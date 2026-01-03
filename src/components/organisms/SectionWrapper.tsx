import clsx from 'clsx';
import { ReactNode } from 'react';
import { Typography } from '@/components/atoms/Typography';

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  background?: 'default' | 'muted' | 'gradient';
  children: ReactNode;
  className?: string;
};

export const SectionWrapper = ({
  id,
  title,
  subtitle,
  alignment = 'left',
  background = 'default',
  children,
  className = '',
}: Props) => (
  <section
    id={id}
    className={clsx(
      'py-24 md:py-40 relative',
      background === 'muted' && 'bg-[var(--color-surface-alt)]/50',
      background === 'gradient' && 'bg-[var(--gradient-subtle)]',
      alignment === 'center' && 'text-center',
      className
    )}
  >
    <div className="mx-auto flex w-full max-w-[var(--max-width)] flex-col gap-20">
      <header className={clsx('flex flex-col gap-6', alignment === 'center' && 'items-center')}>
        <Typography variant="overline" className="text-xs font-bold tracking-[0.4em] uppercase bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="heading" className="text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight max-w-4xl bg-gradient-to-r from-[var(--color-text)] via-[var(--color-primary)] to-[var(--color-text)] bg-clip-text text-transparent">
            {subtitle}
          </Typography>
        )}
      </header>
      {children}
    </div>
  </section>
);

