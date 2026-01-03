'use client';
import Link from 'next/link';
import { Card } from '@/components/molecules/Card';
import { SectionWrapper } from '@/components/organisms/SectionWrapper';
import { FadeIn } from '@/components/utility/FadeIn';
import { profileData } from '@/data/profile';
import { ProjectDetailsModal, Project } from '@/components/molecules/ProjectDetailsModal';
import { useState } from 'react';

export const ProjectsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  return (
    <SectionWrapper id="projects" title="Projects" subtitle="项目经历">
      <FadeIn className="grid gap-6 md:grid-cols-2">
        {profileData.projects.map((project) => (
          <Card
            key={project.name}
            title={project.name}
            description={project.description}
            meta={`${project.role} · ${project.period}`}
            actions={
              <>
                {project.links.map((link) => (
                  <Link
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--color-accent-secondary)] underline hover:text-[var(--color-accent-tertiary)]"
                    onClick={(e) => {
                      if (link.label === '项目详情') {
                        e.preventDefault();
                        setSelectedProject(project);
                        setIsModalOpen(true);
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </>
            }
            className="hover:border-[var(--color-accent-muted)]"
          >
            <p className="text-sm font-medium text-[var(--color-text)]">{project.impact}</p>
          </Card>
        ))}
      </FadeIn>
      {isModalOpen && selectedProject && <ProjectDetailsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} project={selectedProject} />}
    </SectionWrapper>
  );
};