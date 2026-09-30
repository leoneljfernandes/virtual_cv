
import { useTranslation } from 'react-i18next';
import { Code2, Database, Server, Cpu, Shield, Key } from 'lucide-react';

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t('skills.fullstack'),
      icon: <Code2 className="w-5 h-5 text-foreground" />,
      skills: ["Python", "FastAPI", "TypeScript", "React", "RESTful APIs", "Java"],
    },
    {
      title: t('skills.db'),
      icon: <Database className="w-5 h-5 text-foreground" />,
      skills: ["SQL Server", "PostgreSQL"],
    },
    {
      title: t('skills.infra'),
      icon: <Server className="w-5 h-5 text-foreground" />,
      skills: ["Linux", "Docker", "AWS", "Git", "GitHub", "TCP/IP, IPv4/IPv6", "DHCP", "DNS", "LAN/WLAN", "Bash", "PowerShell", ...t('skills.networks.extra').split('; ')],
    },
    {
      title: t('skills.hardware'),
      icon: <Cpu className="w-5 h-5 text-foreground" />,
      skills: ["Arduino", "ESP32", "MQTT"],
    },
    {
      title: t('skills.cyber'),
      icon: <Shield className="w-5 h-5 text-foreground" />,
      skills: t('skills.cybersecurity.items').split('; '),
    },
    {
      title: t('skills.crypto'),
      icon: <Key className="w-5 h-5 text-foreground" />,
      skills: t('skills.cryptography.items').split('; '),
    }
  ];

  return (
    <section id="capacidades" className="w-full max-w-5xl px-4 py-24 border-t border-border">
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">{t('skills.title')}</h2>
        
        <div className="grid sm:grid-cols-2 gap-4">
          {skillCategories.map((cat, idx) => (
            <div 
              key={idx} 
              className="p-5 border border-border rounded-lg glass hover:bg-muted/10 transition-colors duration-150"
            >
              <div className="flex items-center space-x-3 mb-4">
                {cat.icon}
                <h3 className="font-medium text-sm text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-2.5 py-1 text-xs bg-muted text-muted-foreground border border-border rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
