'use client';

import { useScrollProgress } from '@/hooks/useScrollProgress';

export const ScrollProgress = () => {
  const progress = useScrollProgress();
  
  return (
    <div 
      className="scroll-progress" 
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
};