import type { AdminPost, AdminUser, FieldIssue, PostInput, PostStatus } from '../types';

const BASE = (import.meta.env.VITE_API_URL ?? '').replace(/\/$/, '');
const TOKEN_KEY = 'dsc_admin_token';

export function getToken(): string | null {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

export function setToken(token: string | null): void {
  try {
    if (token) localStorage.setItem(TOKEN_KEY, token);
    else localStorage.removeItem(TOKEN_KEY);
  } catch {
    /* private browsing — the session simply will not persist */
  }
}

/** An API error carrying the per-field issues the editor highlights inline. */
export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public issues: FieldIssue[] = []
  ) {
    super(message);
    this.name = 'ApiError';
  }

  /** "tileConfig.bgColor" -> the message, so a form can look one up directly. */
  get issueMap(): Record<string, string> {
    return Object.fromEntries(this.issues.map((i) => [i.field, i.message]));
  }
}

/** Fires when a 401 comes back, so the app can bounce to the login screen. */
type UnauthorizedHandler = () => void;
let onUnauthorized: UnauthorizedHandler = () => undefined;
export function setUnauthorizedHandler(handler: UnauthorizedHandler): void {
  onUnauthorized = handler;
}

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const token = getToken();

  let response: Response;
  try {
    response = await fetch(`${BASE}${path}`, {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(init.headers ?? {}),
      },
    });
  } catch {
    throw new ApiError(0, 'Cannot reach the API. Is the backend running on port 4000?');
  }

  if (response.status === 204) return undefined as T;

  const body = await response.json().catch(() => ({}) as Record<string, unknown>);

  if (!response.ok) {
    if (response.status === 401) onUnauthorized();
    const details = (body as { details?: FieldIssue[] }).details;
    throw new ApiError(
      response.status,
      (body as { error?: string }).error ?? `Request failed (${response.status})`,
      Array.isArray(details) ? details : []
    );
  }

  return body as T;
}

export const api = {
  // --- auth ---
  login: (email: string, password: string) =>
    request<{ token: string; user: AdminUser }>('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),

  me: () => request<{ user: AdminUser }>('/api/auth/me'),

  changePassword: (currentPassword: string, newPassword: string) =>
    request<{ ok: true }>('/api/auth/change-password', {
      method: 'POST',
      body: JSON.stringify({ currentPassword, newPassword }),
    }),

  // --- meta ---
  meta: () => request<{ categories: string[]; visualTypes: string[] }>('/api/meta'),

  // --- posts ---
  listPosts: (params: { status?: string; q?: string; mine?: boolean } = {}) => {
    const search = new URLSearchParams();
    if (params.status) search.set('status', params.status);
    if (params.q) search.set('q', params.q);
    if (params.mine) search.set('mine', '1');
    const qs = search.toString();
    return request<{ posts: AdminPost[] }>(`/api/admin/posts${qs ? `?${qs}` : ''}`);
  },

  getPost: (id: string) => request<{ post: AdminPost }>(`/api/admin/posts/${id}`),

  createPost: (input: PostInput) =>
    request<{ post: AdminPost }>('/api/admin/posts', {
      method: 'POST',
      body: JSON.stringify(input),
    }),

  updatePost: (id: string, input: Partial<PostInput>) =>
    request<{ post: AdminPost }>(`/api/admin/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(input),
    }),

  setPostStatus: (id: string, status: PostStatus) =>
    request<{ post: AdminPost }>(`/api/admin/posts/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    }),

  deletePost: (id: string) =>
    request<{ ok: true }>(`/api/admin/posts/${id}`, { method: 'DELETE' }),

  // --- users ---
  listUsers: () => request<{ users: AdminUser[] }>('/api/admin/users'),

  createUser: (input: {
    name: string;
    email: string;
    password: string;
    role: string;
    penName?: string;
  }) =>
    request<{ user: AdminUser }>('/api/admin/users', {
      method: 'POST',
      body: JSON.stringify(input),
    }),

  updateUser: (id: string, input: Record<string, unknown>) =>
    request<{ user: AdminUser }>(`/api/admin/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(input),
    }),

  deleteUser: (id: string) =>
    request<{ ok: true }>(`/api/admin/users/${id}`, { method: 'DELETE' }),
};
