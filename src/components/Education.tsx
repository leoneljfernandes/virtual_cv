import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GraduationCap, ExternalLink } from 'lucide-react';

const Education = () => {
  const { t } = useTranslation();

  const mainEducation = [
    { text: t('education.1') },
    { text: t('education.3') }
  ];

  const complementaryEducation = [
    {
      text: t('education.2'),
      link: "https://www.educacionit.com/carrera-seguridad-informatica"
    }
  ];

  return (
    <section id="formacion" className="w-full max-w-5xl px-4 py-24 border-t border-border">
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">{t('education.title')}</h2>
        
        <div className="grid gap-4 md:grid-cols-2">
          {mainEducation.map((item, idx) => (
            <motion.div 
              key={`main-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col justify-between p-5 border border-border rounded-lg glass hover:bg-muted/10 transition-colors duration-150"
            >
              <div className="flex items-start">
                <GraduationCap className="w-5 h-5 mr-4 text-muted-foreground shrink-0 mt-0.5" />
                <div className="space-y-4">
                  <p className="text-sm text-foreground leading-relaxed font-medium">
                    {item.text.split(': ')[0]}: <span className="font-normal text-muted-foreground">{item.text.split(': ')[1]}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="pt-8">
          <h3 className="text-xl font-semibold tracking-tight mb-6">{t('education.complementary.title')}</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {complementaryEducation.map((item, idx) => (
              <motion.div 
                key={`comp-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col justify-between p-5 border border-border rounded-lg glass hover:bg-muted/10 transition-colors duration-150"
              >
                <div className="flex items-start">
                  <GraduationCap className="w-5 h-5 mr-4 text-muted-foreground shrink-0 mt-0.5" />
                  <div className="space-y-4">
                    <p className="text-sm text-foreground leading-relaxed font-medium">
                      {item.text.split(': ')[0]}: <span className="font-normal text-muted-foreground">{item.text.split(': ')[1]}</span>
                    </p>
                  </div>
                </div>

                {item.link && (
                  <div className="mt-6 pt-4 border-t border-border ml-9">
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
                    >
                      Ver programa
                      <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
