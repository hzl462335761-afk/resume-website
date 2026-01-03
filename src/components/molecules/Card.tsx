import clsx from 'clsx';
import { ElementType, ReactNode } from 'react';

type CardProps = {
  title?: string;
  description?: string;
  meta?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
  as?: ElementType;
  className?: string;
};

export const Card = ({
  title,
  description,
  meta,
  actions,
  children,
  as = 'div',
  className,
}: CardProps) => {
  const Component = as as ElementType;
  return (
    <Component
      className={clsx(
        'flex flex-col gap-5 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-strong)] hover:-translate-y-2 hover:scale-[1.02] group',
        className,
      )}
    >
      {meta && <div className="text-[var(--font-size-xs)] font-medium text-[var(--color-text-muted)] uppercase tracking-wider">{meta}</div>}
      {title && <h3 className="text-[var(--font-size-xl)] font-[var(--font-weight-bold)] leading-[var(--line-height-tight)] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent group-hover:from-[var(--color-primary-light)] group-hover:to-[var(--color-secondary-light)] transition-all duration-300">{title}</h3>}
      {description && <p className="text-[var(--font-size-md)] leading-[var(--line-height-relaxed)] text-[var(--color-text-muted)]">{description}</p>}
      {children}
      {actions && <div className="mt-auto flex flex-wrap gap-3 pt-2">{actions}</div>}
    </Component>
  );
};