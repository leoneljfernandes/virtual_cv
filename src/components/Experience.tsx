import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      date: t('exp.1.date'),
      role: t('exp.1.role'),
      company: t('exp.1.company'),
      details: [
        t('exp.1.d1'),
        t('exp.1.d2'),
        t('exp.1.d3'),
        t('exp.1.d4'),
        t('exp.1.d5'),
      ]
    },
    {
      date: t('exp.2.date'),
      role: t('exp.2.role'),
      company: t('exp.2.company'),
      details: [
        t('exp.2.d1'),
        t('exp.2.d2'),
        t('exp.2.d3'),
        t('exp.2.d4'),
      ]
    }
  ];

  return (
    <section id="experiencia" className="w-full max-w-5xl px-4 py-24 border-t border-border">
      <div className="space-y-12">
        <h2 className="text-2xl font-semibold tracking-tight">{t('exp.title')}</h2>
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              
              <div className="flex items-center justify-center w-5 h-5 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-1.5 h-1.5 bg-foreground rounded-full"></div>
              </div>
              
              <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] p-5 rounded-lg border border-border glass hover:bg-muted/10 transition-colors duration-150">
                <div className="flex flex-col space-y-1 mb-3">
                  <span className="text-xs font-medium text-muted-foreground">{exp.date}</span>
                  <h3 className="font-semibold text-base text-foreground">{exp.role} <span className="font-normal text-muted-foreground">@ {exp.company}</span></h3>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-muted-foreground">
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx} className="leading-relaxed pl-1">{detail}</li>
                  ))}
                </ul>
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
