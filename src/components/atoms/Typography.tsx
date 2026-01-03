import clsx from 'clsx';
import { ElementType, ReactNode } from 'react';

type Variant = 'display' | 'heading' | 'subheading' | 'body' | 'caption' | 'overline';

type TypographyProps = {
  as?: ElementType;
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

const variantClass: Record<Variant, string> = {
  display: 'text-[var(--font-size-display)] font-[var(--font-weight-light)] leading-[var(--line-height-tight)] tracking-[var(--letter-spacing-tight)] text-[var(--color-text)]',
  heading: 'text-[var(--font-size-xxl)] font-[var(--font-weight-bold)] leading-[var(--line-height-tight)] tracking-[var(--letter-spacing-tight)] text-[var(--color-text)]',
  subheading: 'text-[var(--font-size-xl)] font-[var(--font-weight-semibold)] leading-[var(--line-height-normal)] text-[var(--color-text)]',
  body: 'text-[var(--font-size-md)] font-[var(--font-weight-regular)] leading-[var(--line-height-normal)] text-[var(--color-text)]',
  caption: 'text-[var(--font-size-xs)] font-[var(--font-weight-regular)] leading-[var(--line-height-normal)] text-[var(--color-text-muted)]',
  overline: 'text-[var(--font-size-xxs)] font-[var(--font-weight-semibold)] uppercase tracking-[0.25em] text-[var(--color-primary)]',
};

export const Typography = ({ as, variant = 'body', children, className }: TypographyProps) => {
  const Component = (as ?? 'p') as ElementType;
  return <Component className={clsx(variantClass[variant], className)}>{children}</Component>;
};

