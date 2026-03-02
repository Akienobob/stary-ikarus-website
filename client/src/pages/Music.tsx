import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Music as MusicIcon, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Music() {
  const { t, language } = useLanguage();

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

  const albums = [
    {
      title: t('music.album1_title'),
      year: t('music.album1_year'),
      description: t('music.album1_description'),
      color: 'from-accent/20 to-accent/5',
    },
    {
      title: t('music.album2_title'),
      year: t('music.album2_year'),
      description: t('music.album2_description'),
      color: 'from-accent/20 to-accent/5',
    },
    {
      title: t('music.album3_title'),
      year: t('music.album3_year'),
      description: t('music.album3_description'),
      color: 'from-accent/20 to-accent/5',
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
          <h1 className="section-title">{t('music.title')}</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent/50 rounded-full" />
        </motion.div>



        {/* SoundCloud Player */}
        <motion.section
          className="py-12 md:py-16 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="section-title mb-12 text-center" variants={itemVariants}>
            {language === 'ru' ? 'Слушайте на SoundCloud' : 'Listen on SoundCloud'}
          </motion.h2>
          
          <motion.div
            className="flex justify-center"
            variants={itemVariants}
          >
            <iframe
              style={{ borderRadius: '12px' }}
              width="100%"
              height="450"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/starikarus&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            />
          </motion.div>
        </motion.section>

        {/* Divider */}
        <div className="meander-divider" />

        {/* Spotify Player */}
        <motion.section
          className="py-12 md:py-16 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="section-title mb-12 text-center" variants={itemVariants}>
            {language === 'ru' ? 'Слушайте альбом на Spotify' : 'Listen to the Album on Spotify'}
          </motion.h2>
          
          <motion.div
            className="flex flex-col gap-6"
            variants={itemVariants}
          >
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/album/06C3L0lrk8xYnrm6ZjoPDu?utm_source=generator"
              width="100%"
              height="380"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
            
            <div className="flex justify-center">
              <a
                href="https://open.spotify.com/album/06C3L0lrk8xYnrm6ZjoPDu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#1DB954] hover:bg-[#1ed760] text-white font-sans font-semibold">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {language === 'ru' ? 'Открыть полный альбом в Spotify' : 'Open Full Album on Spotify'}
                </Button>
              </a>
            </div>
          </motion.div>
        </motion.section>


      </div>
    </div>
  );
}
