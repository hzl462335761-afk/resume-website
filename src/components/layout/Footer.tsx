import Link from 'next/link';
import { profileData } from '@/data/profile';

export const Footer = () => (
  <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
    <div className="mx-auto flex w-full max-w-[var(--max-width)] flex-col gap-6 px-4 py-10 text-sm text-[var(--color-text-muted)] md:flex-row md:items-center md:justify-between md:px-0">
      <p>{profileData.siteOptions.footerNote}</p>
      <div className="flex flex-wrap gap-4">
        {profileData.siteOptions.navigation.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-[var(--color-primary)]">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  </footer>
);



