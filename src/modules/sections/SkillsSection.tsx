import { Badge } from '@/components/atoms/Badge';
import { SectionWrapper } from '@/components/organisms/SectionWrapper';
import { FadeIn } from '@/components/utility/FadeIn';
import { profileData } from '@/data/profile';

export const SkillsSection = () => (
  <SectionWrapper id="skills" title="Skills" subtitle="多维能力矩阵" alignment="center" background="muted">
    <FadeIn className="grid gap-8 md:grid-cols-3">
      {profileData.skills.categories.map((category) => (
        <div 
          key={category.name} 
          className="rounded-[var(--radius-xl)] border-2 border-[var(--color-border)] bg-[var(--color-surface)] p-8 transition-all duration-300 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-strong)] hover:-translate-y-2 hover:scale-[1.02] group"
        >
          <h3 className="text-2xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent group-hover:from-[var(--color-primary-light)] group-hover:to-[var(--color-secondary-light)] transition-all duration-300">{category.name}</h3>
          <p className="mt-3 text-base leading-relaxed text-[var(--color-text-muted)]">{category.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {category.items.map((item) => (
              <Badge key={item} label={item} tone="accent" />
            ))}
          </div>
        </div>
      ))}
    </FadeIn>
  </SectionWrapper>
);