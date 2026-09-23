import React, { useCallback, useEffect, useState } from 'react';
import { Plus, Trash2, UserCheck, UserX } from 'lucide-react';
import { api, ApiError } from '../lib/api';
import { useAuth } from '../context/AuthContext';
import { Banner, Button, Field, Input, Select, Spinner } from '../components/ui';
import type { AdminUser, UserRole } from '../types';

const ROLE_NOTE: Record<UserRole, string> = {
  admin: 'Full access — every article, plus the team page.',
  author: 'Writes and publishes their own articles only.',
};

export const UsersPage: React.FC = () => {
  const { user: me } = useAuth();

  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  const [showForm, setShowForm] = useState(false);
  const [creating, setCreating] = useState(false);
  const [draft, setDraft] = useState({
    name: '',
    email: '',
    password: '',
    role: 'author' as UserRole,
    penName: '',
  });

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const { users: list } = await api.listUsers();
      setUsers(list);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Could not load the team.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const create = async (event: React.FormEvent) => {
    event.preventDefault();
    setCreating(true);
    setError(null);
    setNotice(null);
    try {
      const { user } = await api.createUser({
        ...draft,
        penName: draft.penName.trim() || undefined,
      });
      setUsers((current) => [...current, user]);
      setNotice(`${user.name} can now sign in with ${user.email}.`);
      setDraft({ name: '', email: '', password: '', role: 'author', penName: '' });
      setShowForm(false);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Could not create that account.');
    } finally {
      setCreating(false);
    }
  };

  const patchUser = async (user: AdminUser, changes: Record<string, unknown>) => {
    setBusyId(user._id);
    setError(null);
    setNotice(null);
    try {
      const { user: updated } = await api.updateUser(user._id, changes);
      setUsers((current) => current.map((u) => (u._id === user._id ? updated : u)));
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Could not update that account.');
    } finally {
      setBusyId(null);
    }
  };

  const remove = async (user: AdminUser) => {
    if (!window.confirm(`Remove ${user.name}? Their articles stay published.`)) return;
    setBusyId(user._id);
    setError(null);
    try {
      await api.deleteUser(user._id);
      setUsers((current) => current.filter((u) => u._id !== user._id));
      setNotice(`${user.name} was removed.`);
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Could not remove that account.');
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-serif-display text-3xl text-ink-900">Team</h1>
          <p className="text-sm text-ink-500">Who can sign in and write.</p>
        </div>
        <Button onClick={() => setShowForm((open) => !open)}>
          <Plus className="h-3.5 w-3.5" />
          Add writer
        </Button>
      </div>

      {error && <Banner tone="error">{error}</Banner>}
      {notice && <Banner tone="success">{notice}</Banner>}

      {showForm && (
        <form
          onSubmit={create}
          className="grid gap-4 rounded-xs border border-sand-200 bg-white p-5 sm:grid-cols-2"
        >
          <Field label="Name" required>
            <Input
              value={draft.name}
              onChange={(e) => setDraft({ ...draft, name: e.target.value })}
              required
            />
          </Field>
          <Field label="Email" required>
            <Input
              type="email"
              value={draft.email}
              onChange={(e) => setDraft({ ...draft, email: e.target.value })}
              required
            />
          </Field>
          <Field label="Temporary password" required hint="At least 8 characters.">
            <Input
              type="text"
              value={draft.password}
              onChange={(e) => setDraft({ ...draft, password: e.target.value })}
              minLength={8}
              required
            />
          </Field>
          <Field label="Role" hint={ROLE_NOTE[draft.role]}>
            <Select
              value={draft.role}
              onChange={(e) => setDraft({ ...draft, role: e.target.value as UserRole })}
            >
              <option value="author">Author</option>
              <option value="admin">Admin</option>
            </Select>
          </Field>
          <Field label="Byline" hint="Defaults to their first name." className="sm:col-span-2">
            <Input
              value={draft.penName}
              onChange={(e) => setDraft({ ...draft, penName: e.target.value })}
              placeholder="Macka"
            />
          </Field>

          <div className="flex gap-2 sm:col-span-2">
            <Button type="submit" loading={creating}>
              Create account
            </Button>
            <Button type="button" variant="ghost" onClick={() => setShowForm(false)}>
              Cancel
            </Button>
          </div>
        </form>
      )}

      {loading ? (
        <Spinner label="Loading the team" />
      ) : (
        <div className="overflow-hidden rounded-xs border border-sand-200 bg-white">
          {users.map((user) => {
            const isMe = user._id === me?._id;
            return (
              <div
                key={user._id}
                className="flex flex-wrap items-center gap-3 border-b border-sand-200 px-4 py-3 last:border-b-0"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-ink-900">
                    {user.name}
                    {isMe && <span className="ml-2 text-xs text-clay-400">you</span>}
                    {!user.active && (
                      <span className="ml-2 text-xs text-red-600">deactivated</span>
                    )}
                  </p>
                  <p className="truncate text-xs text-ink-500">
                    {user.email} · writes as {user.penName}
                  </p>
                </div>

                <Select
                  value={user.role}
                  disabled={isMe || busyId === user._id}
                  onChange={(e) => void patchUser(user, { role: e.target.value })}
                  className="w-auto text-xs"
                  title={ROLE_NOTE[user.role]}
                >
                  <option value="author">Author</option>
                  <option value="admin">Admin</option>
                </Select>

                <button
                  onClick={() => void patchUser(user, { active: !user.active })}
                  disabled={isMe || busyId === user._id}
                  className="cursor-pointer rounded-xs border border-sand-300 bg-white p-2 text-ink-500 transition-colors hover:text-ink-900 disabled:opacity-30 disabled:cursor-not-allowed"
                  title={user.active ? 'Deactivate' : 'Reactivate'}
                >
                  {user.active ? (
                    <UserX className="h-3.5 w-3.5" />
                  ) : (
                    <UserCheck className="h-3.5 w-3.5" />
                  )}
                </button>

                <button
                  onClick={() => void remove(user)}
                  disabled={isMe || busyId === user._id}
                  className="cursor-pointer rounded-xs border border-red-200 bg-white p-2 text-red-600 transition-colors hover:bg-red-50 disabled:opacity-30 disabled:cursor-not-allowed"
                  title="Remove"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
