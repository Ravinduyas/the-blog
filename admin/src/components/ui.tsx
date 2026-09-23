import React from 'react';
import { AlertCircle, Loader2 } from 'lucide-react';

/* ------------------------------------------------------------------ *
 * Small shared building blocks. Kept in one file because each is a few
 * lines and they are always imported together by the editor screens.
 * ------------------------------------------------------------------ */

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
    loading?: boolean;
  }
> = ({ variant = 'primary', loading = false, className = '', children, disabled, ...rest }) => {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full text-xs font-semibold uppercase tracking-widest px-5 py-2.5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

  const variants: Record<string, string> = {
    primary: 'bg-ink-900 text-white hover:bg-black',
    secondary: 'bg-white text-ink-700 border border-sand-300 hover:text-black hover:bg-sand-100',
    ghost: 'text-ink-500 hover:text-ink-900',
    danger: 'bg-white text-red-700 border border-red-200 hover:bg-red-50',
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} disabled={disabled || loading} {...rest}>
      {loading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
      {children}
    </button>
  );
};

export const Field: React.FC<{
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}> = ({ label, hint, error, required, children, className = '' }) => (
  <label className={`block ${className}`}>
    <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500 mb-1.5">
      {label}
      {required && <span className="text-clay-400 ml-1">*</span>}
    </span>
    {children}
    {hint && !error && <span className="block text-xs text-ink-500 mt-1">{hint}</span>}
    {error && (
      <span className="flex items-center gap-1 text-xs text-red-600 mt-1">
        <AlertCircle className="w-3 h-3 shrink-0" />
        {error}
      </span>
    )}
  </label>
);

const inputBase =
  'w-full rounded-xs border border-sand-300 bg-white px-3 py-2 text-sm text-ink-900 outline-none transition-colors focus:border-clay-400 placeholder:text-ink-500/60';

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  className = '',
  ...rest
}) => <input className={`${inputBase} ${className}`} {...rest} />;

export const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  className = '',
  ...rest
}) => <textarea className={`${inputBase} leading-relaxed ${className}`} {...rest} />;

export const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = ({
  className = '',
  children,
  ...rest
}) => (
  <select className={`${inputBase} cursor-pointer ${className}`} {...rest}>
    {children}
  </select>
);

/** Colour swatch + hex box that stay in sync. */
export const ColorInput: React.FC<{
  value: string;
  onChange: (value: string) => void;
}> = ({ value, onChange }) => (
  <div className="flex items-center gap-2">
    <input
      type="color"
      value={/^#[0-9a-fA-F]{6}$/.test(value) ? value : '#ffffff'}
      onChange={(e) => onChange(e.target.value)}
      className="h-9 w-12 shrink-0 cursor-pointer rounded-xs border border-sand-300 bg-white p-1"
      aria-label="Pick a colour"
    />
    <Input value={value} onChange={(e) => onChange(e.target.value)} placeholder="#c3c8cf" />
  </div>
);

export const Toggle: React.FC<{
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  hint?: string;
}> = ({ checked, onChange, label, hint }) => (
  <button
    type="button"
    onClick={() => onChange(!checked)}
    className="flex w-full items-start gap-3 text-left cursor-pointer group"
  >
    <span
      className={`mt-0.5 flex h-5 w-9 shrink-0 items-center rounded-full p-0.5 transition-colors ${
        checked ? 'bg-clay-400' : 'bg-sand-300'
      }`}
    >
      <span
        className={`h-4 w-4 rounded-full bg-white shadow-xs transition-transform ${
          checked ? 'translate-x-4' : 'translate-x-0'
        }`}
      />
    </span>
    <span>
      <span className="block text-sm font-medium text-ink-900 group-hover:text-clay-500 transition-colors">
        {label}
      </span>
      {hint && <span className="block text-xs text-ink-500">{hint}</span>}
    </span>
  </button>
);

export const StatusPill: React.FC<{ status: 'draft' | 'published' }> = ({ status }) => (
  <span
    className={`inline-block rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] ${
      status === 'published'
        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
        : 'bg-amber-50 text-amber-700 border border-amber-200'
    }`}
  >
    {status}
  </span>
);

export const Banner: React.FC<{ tone: 'error' | 'success'; children: React.ReactNode }> = ({
  tone,
  children,
}) => (
  <div
    className={`rounded-xs border px-4 py-3 text-sm ${
      tone === 'error'
        ? 'border-red-200 bg-red-50 text-red-800'
        : 'border-emerald-200 bg-emerald-50 text-emerald-800'
    }`}
  >
    {children}
  </div>
);

export const Spinner: React.FC<{ label?: string }> = ({ label = 'Loading' }) => (
  <div className="flex items-center justify-center gap-2 py-16 text-sm text-ink-500">
    <Loader2 className="w-4 h-4 animate-spin" />
    {label}
  </div>
);

export const EmptyState: React.FC<{ title: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div className="rounded-xs border border-dashed border-sand-300 bg-white/60 px-6 py-14 text-center">
    <p className="font-serif-display text-xl text-ink-900">{title}</p>
    {children && <div className="mt-2 text-sm text-ink-500">{children}</div>}
  </div>
);
