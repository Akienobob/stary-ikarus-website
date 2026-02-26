import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ImageIcon, Video } from 'lucide-react';

export default function Media() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  const galleryItems = [
    { type: 'photo', title: t('media.concert_photos'), icon: ImageIcon },
    { type: 'photo', title: t('media.studio_sessions'), icon: ImageIcon },
    { type: 'photo', title: t('media.behind_scenes'), icon: ImageIcon },
    { type: 'photo', title: t('media.concert_photos'), icon: ImageIcon },
    { type: 'photo', title: t('media.studio_sessions'), icon: ImageIcon },
    { type: 'photo', title: t('media.behind_scenes'), icon: ImageIcon },
  ];

  const videoItems = [
    { title: 'Live Performance - 2024', duration: '12:45' },
    { title: 'Studio Session - Album 3', duration: '8:30' },
    { title: 'Behind the Scenes', duration: '5:15' },
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
          <h1 className="section-title">{t('media.title')}</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent/50 rounded-full" />
        </motion.div>

        {/* Photo Gallery Section */}
        <motion.section
          className="mb-16 md:mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="section-title mb-12" variants={itemVariants}>
            <div className="flex items-center gap-3">
              <ImageIcon className="w-8 h-8 text-accent" />
              {t('media.gallery_title')}
            </div>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                {/* Placeholder Image */}
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent/15 transition-all duration-300">
                  <ImageIcon className="w-12 h-12 text-accent/50 group-hover:text-accent/70 transition-colors duration-300" />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end p-4">
                  <p className="text-white font-sans font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Divider */}
        <div className="meander-divider" />

        {/* Videos Section */}
        <motion.section
          className="py-16 md:py-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="section-title mb-12" variants={itemVariants}>
            <div className="flex items-center gap-3">
              <Video className="w-8 h-8 text-accent" />
              {t('media.videos_title')}
            </div>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {videoItems.map((video, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                {/* Video Placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent/15 transition-all duration-300">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                      <div className="w-0 h-0 border-l-8 border-l-accent border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1" />
                    </div>
                    <p className="text-foreground/60 text-xs font-sans">
                      {video.duration}
                    </p>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end p-4">
                  <p className="text-white font-sans font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {video.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
