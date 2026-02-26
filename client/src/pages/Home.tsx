import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedLogo from '@/components/AnimatedLogo';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Home() {
  const { t } = useLanguage();

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
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Column - Text */}
            <motion.div className="flex flex-col gap-6 order-2 md:order-1" variants={itemVariants}>
              <div>
                <h1 className="font-serif font-bold text-5xl md:text-6xl text-foreground mb-2">
                  Группа «Старый Икарус»
                </h1>
              </div>

              <div className="border-l-4 border-accent pl-4">
                <p className="text-foreground/70 text-lg md:text-xl leading-relaxed font-serif italic">
                  {t('home.tagline')}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/music">
                  <Button
                    className="bg-accent text-foreground hover:bg-accent/90 font-sans font-semibold"
                    size="lg"
                  >
                    {t('home.cta_music')}
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="border-accent text-foreground hover:bg-accent/10 font-sans font-semibold"
                    size="lg"
                  >
                    {t('home.cta_about')}
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right Column - Animated Logo */}
            <motion.div className="flex justify-center order-1 md:order-2" variants={itemVariants}>
              <AnimatedLogo size="lg" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="meander-divider" />

      {/* Quick Info Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Info Card 1 */}
            <motion.div className="glass-card text-center" variants={itemVariants}>
              <h3 className="font-serif font-bold text-2xl text-accent mb-3">
                Folk-Rock
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Уникальное сочетание фолка, рока, блюза и джаза с психоделическими элементами.
              </p>
            </motion.div>

            {/* Info Card 2 */}
            <motion.div className="glass-card text-center" variants={itemVariants}>
              <h3 className="font-serif font-bold text-2xl text-accent mb-3">
                Philosophy
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Глубокие, философичные тексты, вдохновленные древнегреческой мифологией.
              </p>
            </motion.div>

            {/* Info Card 3 */}
            <motion.div className="glass-card text-center" variants={itemVariants}>
              <h3 className="font-serif font-bold text-2xl text-accent mb-3">
                Journey
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                Путешествие сквозь время, миф и звук — как полёт Икара к солнцу.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
