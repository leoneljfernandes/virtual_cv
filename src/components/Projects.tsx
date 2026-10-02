import { useTranslation } from 'react-i18next';
import { getTechIcon } from '../utils/techIcons';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      name: t('projects.p2.name'),
      desc: t('projects.p2.desc'),
      tech: ['Python', 'FastAPI', 'Pytest', 'Docker'],
      repo: "https://github.com/leoneljfernandes/notifications_challenge",
    },
    {
      name: t('projects.p3.name'),
      desc: t('projects.p3.desc'),
      tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      repo: "https://github.com/leoneljfernandes/AutosalernoWeb",
    },
    {
      name: t('projects.p4.name'),
      desc: t('projects.p4.desc'),
      tech: ['Python', 'FastAPI', 'Pydantic', 'SQLAlchemy'],
      repo: "https://github.com/leoneljfernandes/FastAPI-Blog",
    },
    {
      name: t('projects.p5.name'),
      desc: t('projects.p5.desc'),
      tech: ['Python', 'OpenCV', 'Pillow'],
      repo: "https://github.com/leoneljfernandes/waterMarkRemoverMeli",
    }
  ];

  return (
    <section id="proyectos" className="w-full max-w-5xl px-4 py-24 border-t border-border">
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">{t('projects.title')}</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((proj, idx) => (
            <div 
              key={idx} 
              className="flex flex-col justify-between p-5 border border-border rounded-lg glass hover:bg-muted/10 transition-colors duration-150"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-base flex items-center">
                    <FaGithub className="w-4 h-4 mr-2 text-foreground" />
                    {proj.name}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {proj.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((tech, tIdx) => {
                    const Icon = getTechIcon(tech);
                    return (
                      <span 
                        key={tIdx} 
                        className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider bg-muted text-muted-foreground border border-border rounded-md"
                      >
                        {Icon && <Icon className="w-3 h-3 shrink-0" />}
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-border">
                <a 
                  href={proj.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                >
                  {t('projects.repo')}
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
