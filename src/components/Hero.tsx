
import { Shield, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/20 blur-3xl floating-animation"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/20 blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 animate-fade-in-up">
          {/* Avatar/Logo */}
          <div className="relative mx-auto w-32 h-32 mb-8">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-primary to-accent p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <Shield className="w-16 h-16 text-primary" />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center animate-pulse">
              <Code className="w-4 h-4 text-gray-900" />
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-black font-['Orbitron'] text-cyber">
              JUNIOR
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white/90">
              DE OLEO
            </h2>
            <div className="flex items-center justify-center space-x-4 text-xl md:text-2xl text-primary font-medium">
              <Zap className="w-6 h-6" />
              <span>{t('hero.specialist')}</span>
              <Zap className="w-6 h-6" />
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 cyber-glow"
            >
              {t('hero.viewProjects')}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
            >
              {t('hero.downloadCV')}
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
