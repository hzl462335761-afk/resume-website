import clsx from 'clsx';

type BadgeProps = {
  label: string;
  tone?: 'default' | 'accent' | 'success' | 'muted' | 'primary';
  className?: string;
};

const toneClass: Record<Required<BadgeProps>['tone'], string> = {
  default: 'bg-[var(--color-surface)] text-[var(--color-text)] hover:bg-[var(--color-surface-hover)] transition-all duration-300',
  accent: 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white hover:shadow-[var(--shadow-medium)] shadow-[var(--shadow-soft)] transition-all duration-300 hover:scale-105',
  success: 'bg-[var(--color-success)] text-white hover:bg-[var(--color-success)]/90 shadow-[var(--shadow-soft)] transition-all duration-300 hover:scale-105',
  muted: 'bg-[var(--color-border-light)] text-[var(--color-text-muted)] hover:bg-[var(--color-border)] transition-all duration-300',
  primary: 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white hover:shadow-[var(--shadow-medium)] shadow-[var(--shadow-soft)] transition-all duration-300 hover:scale-105'
};

export const Badge = ({ label, tone = 'default', className }: BadgeProps) => (
  <span
    className={clsx(
      'inline-flex items-center rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase',
      toneClass[tone],
      className
    )}
  >
    {label}
  </span>
);