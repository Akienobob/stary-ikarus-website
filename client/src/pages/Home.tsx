import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedLogo from '@/components/AnimatedLogo';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Home() {
  const { t, language } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Animated Logo Banner - Full Width */}
      <div className="w-full bg-background -mb-32 sm:-mb-40 md:-mb-56">
        <AnimatedLogo />
      </div>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-16 md:pb-24">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col gap-6 sm:gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Text Content */}
            <motion.div className="flex flex-col gap-4 sm:gap-6" variants={itemVariants}>
              <div>
                <h1 className="font-serif font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-foreground mb-2 leading-tight">
                  {language === 'ru' ? 'Группа «Старый Икарус»' : 'Stary Ikarus Band'}
                </h1>
              </div>

              <div className="border-l-4 border-accent pl-3 sm:pl-4">
                <p className="text-foreground/70 text-base sm:text-lg md:text-xl leading-relaxed font-serif italic">
                  {t('home.tagline')}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-8 sm:pt-12 md:pt-16">
                <Link href="/music" className="w-full sm:w-auto">
                  <Button
                    className="w-full bg-accent text-foreground hover:bg-accent/90 font-sans font-semibold"
                    size="lg"
                  >
                    {t('home.cta_music')}
                  </Button>
                </Link>
                <Link href="/about" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="w-full border-accent text-foreground hover:bg-accent/10 font-sans font-semibold"
                    size="lg"
                  >
                    {t('home.cta_about')}
                  </Button>
                </Link>
              </div>
            </motion.div>


          </motion.div>
        </div>
      </section>


    </div>
  );
}
