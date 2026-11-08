'use client';

import { useState } from 'react';

interface AlertData {
  status: 'GREEN' | 'YELLOW' | 'RED';
  label: string;
  description: string;
  source: string;
  updatedAt: string;
}

interface AlertBannerProps {
  alert: AlertData | null;
}

const STATUS_STYLE = {
  GREEN: {
    bg: 'bg-green-600',
    text: 'text-green-50',
    dot: 'bg-green-300',
    badge: 'bg-green-400 text-green-950',
  },
  YELLOW: {
    bg: 'bg-yellow-500',
    text: 'text-yellow-50',
    dot: 'bg-yellow-200',
    badge: 'bg-yellow-200 text-yellow-900',
  },
  RED: {
    bg: 'bg-red-600',
    text: 'text-red-50',
    dot: 'bg-red-300',
    badge: 'bg-red-400 text-red-950',
  },
} as const;

export default function AlertBanner({ alert }: AlertBannerProps) {
  const [expanded, setExpanded] = useState(false);

  if (!alert) {
    return (
      <header className="rounded-2xl bg-green-600 px-4 py-3 text-green-50">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-300" />
          <span className="text-sm font-semibold">AMAN</span>
        </div>
      </header>
    );
  }

  const style = STATUS_STYLE[alert.status];
  const statusText = alert.status === 'RED' ? 'SIAGA' : alert.status === 'YELLOW' ? 'WASPADA' : 'SIAGA';

  return (
    <header className={`rounded-2xl ${style.bg} ${style.text} transition-colors`}>
      <div className="px-4 py-3">
        <button
          className="w-full text-left"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${style.dot} animate-pulse`} />
              <span className="text-sm font-bold uppercase tracking-wide">{statusText}</span>
            </div>
            <span className="text-lg" aria-hidden>
              {expanded ? '▲' : '▼'}
            </span>
          </div>
          <p className="mt-1 text-sm">{alert.label}</p>
        </button>

        {expanded && (
          <div className="mt-3 rounded-lg bg-black/20 p-3 text-sm">
            <p>{alert.description}</p>
            <div className="mt-2 flex items-center justify-between text-xs opacity-80">
              <span>{alert.source}</span>
              <span>Diperbarui {alert.updatedAt}</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
