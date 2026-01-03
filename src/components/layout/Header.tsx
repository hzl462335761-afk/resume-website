'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { profileData } from '@/data/profile';

export const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--color-border)] bg-[var(--color-background)]/95 backdrop-blur-xl shadow-[var(--shadow-soft)]">
      <div className="mx-auto flex w-full max-w-[var(--max-width)] items-center justify-between px-6 py-5 md:px-8">
        <Link 
          href="/" 
          className="text-xl font-bold tracking-tight bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent transition-all duration-300 hover:scale-105" 
          aria-label="返回首页"
        >
          Leon Lin · AI PM
        </Link>

        <nav className="hidden items-center gap-2 text-sm font-medium md:flex">
          {profileData.siteOptions.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'transition-all duration-300 px-4 py-2 rounded-lg relative group',
                pathname === item.href 
                  ? 'text-[var(--color-primary)] font-semibold' 
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]',
              )}
            >
              <span className="relative z-10">{item.label}</span>
              {pathname === item.href && (
                <span className="absolute inset-0 bg-[var(--color-primary-muted)] rounded-lg -z-0" />
              )}
              <span className="absolute inset-0 bg-[var(--color-surface-hover)] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-[var(--color-surface)] transition-colors duration-300"
          aria-label="打开菜单"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
        >
          <span className={clsx(
            "h-0.5 w-6 bg-[var(--color-text)] block transition-all duration-300",
            isOpen && "rotate-45 translate-y-2"
          )} />
          <span className={clsx(
            "h-0.5 w-6 bg-[var(--color-text)] block transition-all duration-300",
            isOpen && "opacity-0"
          )} />
          <span className={clsx(
            "h-0.5 w-6 bg-[var(--color-text)] block transition-all duration-300",
            isOpen && "-rotate-45 -translate-y-2"
          )} />
        </button>
      </div>
      {isOpen && (
        <nav className="flex flex-col gap-2 border-t border-[var(--color-border)] bg-[var(--color-surface)] p-4 md:hidden animate-in slide-in-from-top duration-300">
          {profileData.siteOptions.navigation.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-lg hover:bg-[var(--color-surface-hover)] transition-colors duration-300 text-[var(--color-text)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

