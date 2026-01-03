"use client";

export interface Project {
  name: string;
  description: string;
  role: string;
  period: string;
  impact: string;
  details?: string[];
  links: { label: string; url: string }[];
}

export const ProjectDetailsModal = ({ isOpen, onClose, project }: { isOpen: boolean; onClose: () => void; project: Project }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300" 
        onClick={onClose} 
        aria-hidden="true" 
      />
      <div className="relative w-full max-w-2xl rounded-[var(--radius-lg)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-strong)] transition-all duration-300 ease-out-expo transform scale-95 animate-scale-in">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-200"
          aria-label="关闭"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="max-h-[80vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[var(--color-border)] scrollbar-track-[var(--color-surface)] scrollbar-rounded">
          <h2 className="text-2xl font-bold mb-4 text-[var(--color-text)]">{project.name}项目详情</h2>
          <div className="space-y-6">
            <div className="bg-[var(--color-surface-alt)] rounded-[var(--radius-md)] p-5 transition-all duration-300 hover:shadow-[var(--shadow-soft)]">
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-text)]">项目背景与目标</h3>
              <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
                {project.description}
              </p>
            </div>
            
            <div className="bg-[var(--color-surface-alt)] rounded-[var(--radius-md)] p-5 transition-all duration-300 hover:shadow-[var(--shadow-soft)]">
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-text)]">关键成果</h3>
              <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
                {project.impact}
              </p>
            </div>
            
            {project.details && (
              <div className="bg-[var(--color-surface-alt)] rounded-[var(--radius-md)] p-5 transition-all duration-300 hover:shadow-[var(--shadow-soft)]">
                <h3 className="text-xl font-semibold mb-3 text-[var(--color-text)]">项目详情</h3>
                <ul className="space-y-3">
                  {project.details.map((detail: string, index: number) => {
                    // 将 **文本** 转换为 <strong>文本</strong>
                    const processedDetail = detail.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                    return (
                      <li key={index} className="text-base leading-relaxed text-[var(--color-text-muted)] pl-5 relative">
                        <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent-secondary)]"></span>
                        <span dangerouslySetInnerHTML={{ __html: processedDetail }} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};