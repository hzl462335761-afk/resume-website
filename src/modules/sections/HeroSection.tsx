import Image from 'next/image';
import { Button } from '@/components/atoms/Button';
import { Badge } from '@/components/atoms/Badge';
import { SectionWrapper } from '@/components/organisms/SectionWrapper';
import { EnhancedFadeIn } from '@/components/utility/EnhancedFadeIn';
import { profileData } from '@/data/profile';

export const HeroSection = () => {
  const hero = profileData.hero;
  return (
    <SectionWrapper id="home" title="HOME" subtitle={hero.tagline} className="pt-28 md:pt-40 pb-20 md:pb-32">
      <EnhancedFadeIn className="grid gap-20 md:grid-cols-2 md:items-center" delay={0.2}>
        <EnhancedFadeIn animationType="fade-right" className="space-y-10" delay={0.3}>
          <Badge tone="accent" label={hero.greeting} className="rounded-[var(--radius-full)]" /> 
          <h1 className="text-5xl md:text-7xl font-[var(--font-weight-bold)] leading-[1.1] tracking-tight bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">{hero.name}</h1>
          <p className="max-w-xl text-xl leading-[1.7] text-[var(--color-text-muted)]">{hero.summary}</p>
          <div className="flex flex-wrap gap-4 pt-6">
            {hero.ctas.map((cta) => (
              <EnhancedFadeIn key={cta.label} animationType="scale" delay={0.1}>
                <Button 
                  label={cta.label} 
                  href={cta.href} 
                  variant={cta.variant} 
                  external={cta.external || false} 
                /> 
              </EnhancedFadeIn>
            ))}
          </div>
        </EnhancedFadeIn>

        <EnhancedFadeIn animationType="fade-left" delay={0.4}>
          <div className="relative w-full max-w-[420px] mx-auto overflow-hidden rounded-[var(--radius-2xl)] bg-[var(--color-surface-gradient)] p-10 shadow-[var(--shadow-strong)] transition-all duration-500 hover:shadow-[var(--shadow-hover)] hover:shadow-[var(--shadow-glow)]">
            <div className="absolute inset-x-10 -top-40 h-64 rounded-[var(--radius-xl)] bg-gradient-to-b from-[var(--color-primary)]/30 via-[var(--color-secondary)]/20 to-transparent opacity-80 blur-3xl animate-pulse" /> 

            <div className="relative flex flex-col items-center gap-8">
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-[var(--color-primary)]/30 bg-[var(--color-background)] shadow-[var(--shadow-strong)] transition-all duration-500 hover:shadow-[var(--shadow-hover)] hover:shadow-[var(--shadow-glow)] hover:scale-110 hover:border-[var(--color-primary)]/50">
                <Image
                  src="./images/touxiang.png"
                  alt="怪异启示录头像"
                  fill
                  sizes="192px"
                  priority
                  className="object-cover"
                /> 
              </div>
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-[0.3em] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
                  AI PRODUCT MANAGER
                </p>
                <p className="mt-3 text-base text-[var(--color-text-muted)]">浙江未来科技大学 · 杭州</p>
              </div>
            </div>
          </div>
        </EnhancedFadeIn>
      </EnhancedFadeIn>
    </SectionWrapper>
  );
};