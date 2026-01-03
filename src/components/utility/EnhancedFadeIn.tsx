"use client";

import clsx from 'clsx';
import { ReactNode } from 'react';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';

type AnimationType = 'fade' | 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale';

type EnhancedFadeInProps = {
  children: ReactNode;
  className?: string;
  animationType?: AnimationType;
  delay?: number;
};

export const EnhancedFadeIn = ({ 
  children, 
  className, 
  animationType = 'fade-up',
  delay = 0
}: EnhancedFadeInProps) => {
  const { ref, isVisible } = useInViewAnimation();
  
  const getAnimationClass = () => {
    switch (animationType) {
      case 'fade': return 'fade-in';
      case 'fade-up': return 'fade-in-up';
      case 'fade-down': return 'fade-in-down';
      case 'fade-left': return 'fade-in-left';
      case 'fade-right': return 'fade-in-right';
      case 'scale': return 'scale-in';
      default: return 'fade-in-up';
    }
  };

  return (
    <div 
      ref={ref} 
      data-visible={isVisible} 
      className={clsx(getAnimationClass(), className)}
      style={delay ? { animationDelay: `${delay}s` } : {}}
    >
      {children}
    </div>
  );
};