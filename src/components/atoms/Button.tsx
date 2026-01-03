"use client";

import clsx from 'clsx';
import Link from 'next/link';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type BaseProps = {
  label: string;
  href?: string;
  variant?: ButtonVariant;
  external?: boolean;
  icon?: ReactNode;
} & ComponentPropsWithoutRef<'button'>;

const baseClass =
  'inline-flex items-center justify-center gap-2 text-sm font-semibold transition-all duration-300 px-8 py-3.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transform hover:scale-105 active:scale-95';

const variantClass: Record<ButtonVariant, string> = {
  primary: 'rounded-[var(--radius-full)] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-strong)] hover:shadow-[var(--shadow-glow)] focus-visible:outline-[var(--color-primary)] active:shadow-[var(--shadow-soft)]',
  secondary:
    'rounded-[var(--radius-full)] border-2 border-[var(--color-primary)] text-[var(--color-primary)] bg-transparent hover:bg-[var(--color-primary)] hover:text-white shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] focus-visible:outline-[var(--color-primary)] active:bg-[var(--color-primary-accent)]',
  ghost: 'rounded-[var(--radius-full)] text-[var(--color-primary)] bg-transparent hover:bg-[var(--color-primary-muted)] focus-visible:outline-[var(--color-primary)] active:bg-[var(--color-surface-hover)]',
};

export const Button = ({ label, href, variant = 'primary', external, icon, ...rest }: BaseProps) => {
  if (href) {
    return (
      <Link
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={clsx(baseClass, variantClass[variant], 'font-semibold')}
        aria-label={label}
      >
        <span>{label}</span>
        {icon}
      </Link>
    );
  }

  const isDisabled = rest.disabled;

  return (
    <button
      className={clsx(baseClass, variantClass[variant], isDisabled && 'cursor-not-allowed opacity-60', 'font-semibold')}
      {...rest}
    >
      <span>{label}</span>
      {icon}
    </button>
  );
};