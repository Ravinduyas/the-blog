import React, { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Banner, Button, Field, Input, Spinner } from '../components/ui';
import { ApiError } from '../lib/api';

export const LoginPage: React.FC = () => {
  const { user, loading, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  if (loading) return <Spinner label="Checking your session" />;
  if (user) {
    const from = (location.state as { from?: string } | null)?.from ?? '/posts';
    return <Navigate to={from} replace />;
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await login(email.trim(), password);
      navigate('/posts', { replace: true });
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Could not sign in. Try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-sand-50 px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="font-serif-display text-3xl text-ink-900">Down South Ceylon</h1>
          <p className="font-script -rotate-2 text-2xl text-clay-400">the editor</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-sm border border-sand-200 bg-white p-6 shadow-xs"
        >
          {error && <Banner tone="error">{error}</Banner>}

          <Field label="Email" required>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
              placeholder="Your email address"
              required
            />
          </Field>

          <Field label="Password" required>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </Field>

          <Button type="submit" loading={submitting} className="w-full">
            Sign in
          </Button>
        </form>

        <p className="mt-4 text-center text-xs text-ink-500">
          Accounts are created by an admin from the Team page.
        </p>
      </div>
    </div>
  );
};
