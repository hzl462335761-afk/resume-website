"use client";

import clsx from 'clsx';
import { ReactNode } from 'react';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';

type FadeInProps = {
  children: ReactNode;
  className?: string;
};

export const FadeIn = ({ children, className }: FadeInProps) => {
  const { ref, isVisible } = useInViewAnimation();
  return (
    <div ref={ref} data-visible={isVisible} className={clsx('fade-in-up', className)}>
      {children}
    </div>
  );
};



