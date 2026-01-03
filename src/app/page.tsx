import { AboutSection } from '@/modules/sections/AboutSection';
import { ContactSection } from '@/modules/sections/ContactSection';
import { EducationSection } from '@/modules/sections/EducationSection';
import { HeroSection } from '@/modules/sections/HeroSection';
import { ProjectsSection } from '@/modules/sections/ProjectsSection';
import { SkillsSection } from '@/modules/sections/SkillsSection';
import { SocialSection } from '@/modules/sections/SocialSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <SocialSection />
      <ContactSection />
    </>
  );
}
