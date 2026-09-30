
import { useTranslation } from 'react-i18next';
import { Target, Zap, Users } from 'lucide-react';

const Profile = () => {
  const { t } = useTranslation();

  return (
    <section id="perfil" className="w-full max-w-5xl px-4 py-24 border-t border-border">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">{t('profile.title')}</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t('profile.desc')}
          </p>
          <div className="mt-8 space-y-4">
            <h3 className="font-medium text-sm">{t('profile.seek.title')}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('profile.seek.desc')}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-medium text-sm">{t('profile.offer.title')}</h3>
          <div className="space-y-4">
            <div className="flex items-start p-4 border border-border rounded-lg bg-muted/30">
              <Target className="w-5 h-5 mr-3 text-foreground mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">{t('profile.offer.1')}</p>
            </div>
            <div className="flex items-start p-4 border border-border rounded-lg bg-muted/30">
              <Zap className="w-5 h-5 mr-3 text-foreground mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">{t('profile.offer.2')}</p>
            </div>
            <div className="flex items-start p-4 border border-border rounded-lg bg-muted/30">
              <Users className="w-5 h-5 mr-3 text-foreground mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">{t('profile.offer.3')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
