import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { profileData } from '@/data/profile';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// 获取基础URL，优先使用环境变量，否则使用默认值
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourusername.github.io/your-repo-name';

export const metadata: Metadata = {
  title: profileData.meta.title,
  description: profileData.meta.description,
  keywords: profileData.meta.keywords,
  authors: [{ name: 'Leon Lin' }],
  creator: 'Leon Lin',
  publisher: 'Leon Lin',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    title: profileData.meta.title,
    description: profileData.meta.description,
    images: [profileData.meta.ogImage],
    locale: profileData.meta.locale,
    siteName: profileData.meta.title,
  },
  twitter: {
    card: 'summary_large_image',
    title: profileData.meta.title,
    description: profileData.meta.description,
    images: [profileData.meta.ogImage],
  },
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className={inter.variable}>
        <ScrollProgress />
        <Header />
        <main className="flex flex-col items-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}