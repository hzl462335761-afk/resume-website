"use client";

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, useState } from 'react';

type SocialLink = {
  platform: string;
  url?: string;
  iconKey?: string;
  label?: string;
  note?: string;
  qrCode?: string;
};

type Props = {
  data: SocialLink;
  icon: ReactNode;
};

export const SocialCard = ({ data, icon }: Props) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    if (data.url === '#') {
      setShowDetails(!showDetails);
      return;
    }
  };

  const content = (
    <div
      className={clsx(
        'flex items-center justify-between gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border-light)] bg-[var(--color-background)] p-5 shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-medium)] hover:-translate-y-1',
      )}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-gradient-to-br from-[var(--color-primary)/10] to-[var(--color-secondary)/10] shadow-[var(--shadow-soft)] transition-all duration-300 hover:from-[var(--color-primary)/20] hover:to-[var(--color-secondary)/20]">{icon}</div>
        <div>
          <p className="text-[var(--font-size-md)] font-[var(--font-weight-semibold)] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">{data.platform}</p>
          <p className="text-[var(--font-size-sm)] text-[var(--color-text-muted)]">{data.label}</p>
          {data.note && <p className="text-[var(--font-size-xs)] text-[var(--color-text-muted)]">{data.note}</p>}
          {data.qrCode && (
            <Image
              src={data.qrCode}
              alt={`${data.platform} 二维码`}
              width={64}
              height={64}
              className="mt-2 rounded-[var(--radius-md)] border border-[var(--color-border-light)] object-cover shadow-[var(--shadow-soft)] transition-all duration-300 hover:shadow-[var(--shadow-medium)]"
            />
          )}
        </div>
      </div>
      {data.url && data.url !== '#' && (
        <span className="text-[var(--font-size-sm)] font-[var(--font-weight-medium)] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent transition-all duration-300 hover:from-[var(--color-primary-accent)] hover:to-[var(--color-secondary-accent)]">访问</span>
      )}
      {data.url === '#' && (
        <span className="text-[var(--font-size-sm)] font-[var(--font-weight-medium)] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent transition-all duration-300 hover:from-[var(--color-primary-accent)] hover:to-[var(--color-secondary-accent)] cursor-pointer">
          {showDetails ? '收起' : '查看详情'}
        </span>
      )}
    </div>
  );

  // 如果是特殊链接（如微信、抖音），添加点击事件处理
  if (data.url === '#') {
    return (
      <div 
        onClick={toggleDetails}
        className="cursor-pointer transition-all duration-300"
        aria-label={`查看${data.platform}详情`}
      >
        {content}
        {showDetails && (
          <div className="mt-3 rounded-[var(--radius-md)] bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface-alt)] p-4 text-sm shadow-[var(--shadow-soft)] transition-all duration-300 animate-fade-in">
            <p className="font-medium bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">联系方式详情:</p>
            <p className="mt-2 text-[var(--color-text)]">{data.label}</p>
            <p className="mt-1 text-[var(--color-text-muted)]">点击复制或截图保存</p>
          </div>
        )}
      </div>
    );
  }

  // 普通链接
  if (data.url) {
    return (
      <Link href={data.url} target="_blank" rel="noopener noreferrer" aria-label={data.platform} className="transition-all duration-300">
        {content}
      </Link>
    );
  }

  return content;
};