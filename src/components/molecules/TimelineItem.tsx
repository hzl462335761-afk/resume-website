import clsx from 'clsx';

type TimelineItemProps = {
  time: string;
  title: string;
  subtitle: string;
  description: string;
  compact?: boolean;
};

export const TimelineItem = ({ time, title, subtitle, description, compact }: TimelineItemProps) => (
  <div className="relative flex gap-6 pb-10 md:pb-12">
    <div className="flex flex-col items-center">
      <div className="h-3 w-3 rounded-full bg-[var(--color-accent-secondary)]" />
      <div className="mt-2 w-px flex-1 bg-[var(--color-border)]" />
    </div>
    <div
      className={clsx(
        'flex-1 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:border-[var(--color-accent-muted)] hover:shadow-[var(--shadow-soft)]',
        compact && 'p-4',
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-secondary)]">{time}</p>
      <h3 className="mt-3 text-xl font-semibold">{title}</h3>
      <p className="text-sm text-[var(--color-text-muted)]">{subtitle}</p>
      <p className="mt-4 text-sm leading-relaxed text-[var(--color-text)]">{description}</p>
    </div>
  </div>
);