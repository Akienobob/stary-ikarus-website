import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const members = [
    {
      name: t('about.member1_name'),
      role: t('about.member1_role'),
    },
    {
      name: t('about.member2_name'),
      role: t('about.member2_role'),
    },
    {
      name: t('about.member3_name'),
      role: t('about.member3_role'),
    },
    {
      name: t('about.member4_name'),
      role: t('about.member4_role'),
    },
  ];

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title">{t('about.title')}</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent/50 rounded-full" />
        </motion.div>

        {/* Section 1: Our Story */}
        <motion.section
          className="mb-16 md:mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="section-title mb-6" variants={itemVariants}>
            {t('about.section1_title')}
          </motion.h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={itemVariants}>
            <p className="text-foreground/80 text-lg leading-relaxed whitespace-pre-line">
              {t('about.section1_text')}
            </p>
            <div className="glass-card flex items-center justify-center min-h-64 bg-gradient-to-br from-accent/10 to-accent/5">
              <div className="text-center">
                <div className="text-6xl font-serif font-bold text-accent mb-4">
                  ∞
                </div>
                <p className="text-foreground/60 text-sm">
                  Бесконечное путешествие сквозь время и миф
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Divider */}
        <div className="meander-divider" />

        {/* Section 2: Musical Philosophy */}
        <motion.section
          className="mb-16 md:mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="section-title mb-6" variants={itemVariants}>
            {t('about.section2_title')}
          </motion.h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={itemVariants}>
            <div className="glass-card flex items-center justify-center min-h-64 bg-gradient-to-br from-accent/10 to-accent/5">
              <div className="text-center">
                <div className="text-6xl mb-4">🎵</div>
                <p className="text-foreground/60 text-sm">
                  Музыка как язык души
                </p>
              </div>
            </div>
            <p className="text-foreground/80 text-lg leading-relaxed whitespace-pre-line">
              {t('about.section2_text')}
            </p>
          </motion.div>
        </motion.section>

        {/* Divider */}
        <div className="meander-divider" />

        {/* Band Members */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="section-title mb-12" variants={itemVariants}>
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-accent" />
              {t('about.members_title')}
            </div>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {members.map((member, index) => (
              <motion.div
                key={index}
                className="glass-card text-center hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-serif font-bold text-accent">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-foreground/60 text-sm font-sans">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
