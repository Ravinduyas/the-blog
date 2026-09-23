import React from 'react';
import { ArrowDown, ArrowUp, Plus, Trash2 } from 'lucide-react';
import { Button, Input, Textarea } from './ui';
import type { PostStep } from '../types';

/* Reordering helper shared by both editors below. */
function move<T>(items: T[], from: number, to: number): T[] {
  if (to < 0 || to >= items.length) return items;
  const next = [...items];
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
}

const RowControls: React.FC<{
  index: number;
  total: number;
  onMove: (from: number, to: number) => void;
  onRemove: (index: number) => void;
}> = ({ index, total, onMove, onRemove }) => (
  <div className="flex shrink-0 flex-col gap-1">
    <button
      type="button"
      onClick={() => onMove(index, index - 1)}
      disabled={index === 0}
      className="rounded-xs border border-sand-300 bg-white p-1 text-ink-500 hover:text-ink-900 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
      aria-label="Move up"
    >
      <ArrowUp className="h-3.5 w-3.5" />
    </button>
    <button
      type="button"
      onClick={() => onMove(index, index + 1)}
      disabled={index === total - 1}
      className="rounded-xs border border-sand-300 bg-white p-1 text-ink-500 hover:text-ink-900 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
      aria-label="Move down"
    >
      <ArrowDown className="h-3.5 w-3.5" />
    </button>
    <button
      type="button"
      onClick={() => onRemove(index)}
      className="rounded-xs border border-red-200 bg-white p-1 text-red-600 hover:bg-red-50 cursor-pointer"
      aria-label="Remove"
    >
      <Trash2 className="h-3.5 w-3.5" />
    </button>
  </div>
);

/** Ordered list of plain paragraphs — used for the intro and key takeaways. */
export const StringListEditor: React.FC<{
  items: string[];
  onChange: (items: string[]) => void;
  addLabel: string;
  placeholder: string;
  rows?: number;
}> = ({ items, onChange, addLabel, placeholder, rows = 3 }) => (
  <div className="space-y-3">
    {items.map((item, index) => (
      <div key={index} className="flex gap-2">
        <Textarea
          rows={rows}
          value={item}
          placeholder={placeholder}
          onChange={(e) => {
            const next = [...items];
            next[index] = e.target.value;
            onChange(next);
          }}
        />
        <RowControls
          index={index}
          total={items.length}
          onMove={(from, to) => onChange(move(items, from, to))}
          onRemove={(i) => onChange(items.filter((_, n) => n !== i))}
        />
      </div>
    ))}

    <Button type="button" variant="secondary" onClick={() => onChange([...items, ''])}>
      <Plus className="h-3.5 w-3.5" />
      {addLabel}
    </Button>
  </div>
);

/** The numbered body sections of an article. */
export const StepsEditor: React.FC<{
  steps: PostStep[];
  onChange: (steps: PostStep[]) => void;
}> = ({ steps, onChange }) => {
  const update = (index: number, patch: Partial<PostStep>) => {
    const next = [...steps];
    next[index] = { ...next[index], ...patch };
    onChange(next);
  };

  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div key={index} className="flex gap-2">
          <div className="flex-1 space-y-2 rounded-xs border border-sand-200 bg-white p-3">
            <Input
              value={step.title}
              placeholder="1. Walk the Galle Fort Ramparts at Golden Hour"
              onChange={(e) => update(index, { title: e.target.value })}
            />
            <Textarea
              rows={4}
              value={step.description}
              placeholder="Body copy. Inline links use [label](https://example.com) and become partner backlinks on the site."
              onChange={(e) => update(index, { description: e.target.value })}
            />
            <Input
              value={step.tip ?? ''}
              placeholder="Optional pull-out tip"
              onChange={(e) => update(index, { tip: e.target.value })}
            />
          </div>
          <RowControls
            index={index}
            total={steps.length}
            onMove={(from, to) => onChange(move(steps, from, to))}
            onRemove={(i) => onChange(steps.filter((_, n) => n !== i))}
          />
        </div>
      ))}

      <Button
        type="button"
        variant="secondary"
        onClick={() => onChange([...steps, { title: '', description: '' }])}
      >
        <Plus className="h-3.5 w-3.5" />
        Add section
      </Button>
    </div>
  );
};
