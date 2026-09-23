import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { ExternalLink, FileText, LogOut, UserCircle, Users } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const SITE_URL = import.meta.env.VITE_SITE_URL ?? 'http://localhost:3000';

const navLinkClass = ({ isActive }: { isActive: boolean }): string =>
  `flex items-center gap-2.5 rounded-xs px-3 py-2 text-sm transition-colors ${
    isActive
      ? 'bg-sand-200 text-ink-900 font-semibold'
      : 'text-ink-700 hover:bg-sand-100 hover:text-ink-900'
  }`;

export const Layout: React.FC = () => {
  const { user, isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col bg-sand-50">
      <header className="sticky top-0 z-30 border-b border-sand-200 bg-sand-50/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="flex items-baseline gap-3">
            <span className="font-serif-display text-xl text-ink-900">Down South Ceylon</span>
            <span className="hidden text-[10px] font-bold uppercase tracking-[0.25em] text-clay-400 sm:inline">
              Editor
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={SITE_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-1.5 text-xs text-ink-500 transition-colors hover:text-clay-500 sm:flex"
            >
              View site
              <ExternalLink className="h-3 w-3" />
            </a>

            <div className="hidden text-right sm:block">
              <p className="text-sm font-medium leading-tight text-ink-900">{user?.name}</p>
              <p className="text-[10px] uppercase tracking-[0.15em] text-clay-400">{user?.role}</p>
            </div>

            <button
              onClick={() => {
                logout();
                navigate('/login');
              }}
              className="flex cursor-pointer items-center gap-1.5 rounded-full border border-sand-300 bg-white px-3 py-2 text-xs text-ink-700 transition-colors hover:text-black"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Sign out</span>
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-7xl flex-1 gap-6 px-4 py-6 sm:px-6 lg:gap-10">
        <nav className="hidden w-48 shrink-0 space-y-1 lg:block">
          <NavLink to="/posts" className={navLinkClass}>
            <FileText className="h-4 w-4" />
            Articles
          </NavLink>
          {isAdmin && (
            <NavLink to="/users" className={navLinkClass}>
              <Users className="h-4 w-4" />
              Team
            </NavLink>
          )}
          <NavLink to="/account" className={navLinkClass}>
            <UserCircle className="h-4 w-4" />
            My account
          </NavLink>
        </nav>

        <main className="min-w-0 flex-1">
          {/* Compact nav for narrow screens, where the sidebar is hidden. */}
          <div className="mb-4 flex gap-2 lg:hidden">
            <NavLink to="/posts" className={navLinkClass}>
              Articles
            </NavLink>
            {isAdmin && (
              <NavLink to="/users" className={navLinkClass}>
                Team
              </NavLink>
            )}
            <NavLink to="/account" className={navLinkClass}>
              Account
            </NavLink>
          </div>

          <Outlet />
        </main>
      </div>
    </div>
  );
};
