import { SectionWrapper } from '@/components/organisms/SectionWrapper';
import { EnhancedFadeIn } from '@/components/utility/EnhancedFadeIn';
import { profileData } from '@/data/profile';

export const AboutSection = () => {
  const about = profileData.about;
  return (
    <SectionWrapper id="about" title="About" subtitle={about.title}>
      <EnhancedFadeIn className="grid gap-16 md:grid-cols-[2fr_1fr]" delay={0.2}>
        <div className="prose prose-lg max-w-none text-[var(--color-text)]">
          {about.paragraphs.map((paragraph, index) => (
            <EnhancedFadeIn key={index} animationType="fade-up" delay={0.1 * index}>
              <p className="leading-relaxed">{paragraph}</p>
            </EnhancedFadeIn>
          ))}
        </div>
        <EnhancedFadeIn animationType="fade-up" delay={0.3}>
          <div className="grid gap-6 rounded-3xl bg-[var(--color-surface)] p-8 shadow-[var(--shadow-soft)] transition-all duration-300 hover:shadow-md">
            {about.stats.map((stat) => (
              <EnhancedFadeIn key={stat.label} animationType="scale" delay={0.1 * about.stats.indexOf(stat)}>
                <div className="rounded-2xl bg-[var(--color-surface-alt)] p-6 text-center transition-all duration-300 hover:bg-[var(--color-surface)]">
                  <p className="text-4xl font-bold tracking-tighter text-[var(--color-primary)]">{stat.value}</p>
                  <p className="mt-2 text-sm font-medium text-[var(--color-text-muted)]">{stat.label}</p>
                </div>
              </EnhancedFadeIn>
            ))}
          </div>
        </EnhancedFadeIn>
      </EnhancedFadeIn>
    </SectionWrapper>
  );
};