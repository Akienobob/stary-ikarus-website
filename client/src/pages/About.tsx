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
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/Lev_6224a242.jpg',
    },
    {
      name: t('about.member2_name'),
      role: t('about.member2_role'),
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/Slava_85fd6864.jpg',
    },
    {
      name: t('about.member3_name'),
      role: t('about.member3_role'),
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/Ina_2cb1cddf.jpg',
    },
    {
      name: t('about.member4_name'),
      role: t('about.member4_role'),
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/Valera_18eb947e.jpg',
    },
  ];

  return (
    <div className="min-h-screen py-8 sm:py-16 md:py-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Page Title */}
        <motion.div
          className="mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title text-3xl sm:text-4xl md:text-5xl">{t('about.title')}</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent/50 rounded-full" />
        </motion.div>

        {/* Section 1: Our Story */}
        <motion.section
          className="mb-12 sm:mb-16 md:mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="section-title mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl" variants={itemVariants}>
            История группы
          </motion.h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" variants={itemVariants}>
            <p className="text-foreground/80 text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line">
              {t('about.section1_text')}
            </p>
            <div className="glass-card flex items-center justify-center min-h-48 sm:min-h-64 bg-gradient-to-br from-accent/10 to-accent/5 overflow-hidden">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/1000050483ed_52632548.JPG"
                alt="История группы"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.section>

        {/* Divider */}
        <div className="meander-divider" />

        {/* Section 2: Musical Philosophy */}
        <motion.section
          className="mb-12 sm:mb-16 md:mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="section-title mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl" variants={itemVariants}>
            О мышах и людях
          </motion.h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8" variants={itemVariants}>
            <div className="glass-card flex items-center justify-center min-h-48 sm:min-h-64 bg-gradient-to-br from-accent/10 to-accent/5 overflow-hidden">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/ChatGPTImage2.März2026,05_54_39_95260f41.png"
                alt="Философия музыки"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-foreground/80 text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line">
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
          <motion.h2 className="section-title mb-8 sm:mb-12 text-2xl sm:text-3xl md:text-4xl" variants={itemVariants}>
            <div className="flex items-center gap-2 sm:gap-3">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-accent flex-shrink-0" />
              {t('about.members_title')}
            </div>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            variants={containerVariants}
          >
            {members.map((member, index) => (
              <motion.div
                key={index}
                className="glass-card text-center hover:shadow-lg transition-shadow duration-300 p-4 sm:p-6"
                variants={itemVariants}
              >
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover mx-auto mb-3 sm:mb-4 border-2 border-accent/30"
                  />
                ) : (
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 mx-auto mb-3 sm:mb-4 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-accent">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
                <h3 className="font-serif font-bold text-base sm:text-lg text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-foreground/60 text-xs sm:text-sm font-sans">
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
