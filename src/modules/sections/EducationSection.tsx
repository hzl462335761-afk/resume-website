import { TimelineItem } from '@/components/molecules/TimelineItem';
import { SectionWrapper } from '@/components/organisms/SectionWrapper';
import { FadeIn } from '@/components/utility/FadeIn';
import { profileData } from '@/data/profile';

export const EducationSection = () => (
  <SectionWrapper id="education" title="Education" subtitle="教育背景与研究方向">
    <FadeIn className="flex flex-col">
      {profileData.education.map((item) => (
        <TimelineItem
          key={item.school}
          time={item.period}
          title={item.school}
          subtitle={item.program}
          description={item.description}
        />
      ))}
    </FadeIn>
  </SectionWrapper>
);

