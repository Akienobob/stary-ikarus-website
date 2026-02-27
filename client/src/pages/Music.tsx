import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Music as MusicIcon, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Music() {
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

        {/* Albums Section */}
        <motion.section
          className="mb-16 md:mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="section-title mb-12" variants={itemVariants}>
            <div className="flex items-center gap-3">
              <MusicIcon className="w-8 h-8 text-accent" />
              {t('music.albums_title')}
            </div>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {albums.map((album, index) => (
              <motion.div
                key={index}
                className={`glass-card bg-gradient-to-br ${album.color} hover:shadow-lg transition-all duration-300 group`}
                variants={itemVariants}
              >
                {/* Album Cover Placeholder */}
                <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-accent/30 to-accent/10 mb-6 flex items-center justify-center group-hover:from-accent/40 group-hover:to-accent/20 transition-all duration-300">
                  <MusicIcon className="w-16 h-16 text-accent/50" />
                </div>

                {/* Album Info */}
                <h3 className="font-serif font-bold text-xl text-foreground mb-2">
                  {album.title}
                </h3>
                <p className="text-accent font-sans font-semibold text-sm mb-3">
                  {album.year}
                </p>
                <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                  {album.description}
                </p>

                {/* Listen Button */}
                <Button
                  variant="outline"
                  className="w-full border-accent text-foreground hover:bg-accent/10 font-sans font-semibold"
                  size="sm"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {t('music.listen_on')} Spotify
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Spotify Player */}
        <motion.section
          className="py-12 md:py-16 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="section-title mb-12 text-center" variants={itemVariants}>
            Слушайте альбом на Spotify
          </motion.h2>
          
          <motion.div
            className="flex flex-col gap-6"
            variants={itemVariants}
          >
            <div className="flex justify-center">
              <a
                href="https://open.spotify.com/album/06C3L0lrk8xYnrm6ZjoPDu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[#1DB954] hover:bg-[#1ed760] text-white font-sans font-semibold">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Открыть полный альбом в Spotify
                </Button>
              </a>
            </div>
            
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
          </motion.div>
        </motion.section>

        {/* Divider */}
        <div className="meander-divider" />

        {/* Streaming Platforms */}
        <motion.section
          className="py-12 md:py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="section-title mb-12 text-center" variants={itemVariants}>
            Слушайте везде
          </motion.h2>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={containerVariants}
          >
            {['Spotify', 'Apple Music', 'YouTube Music', 'Bandcamp'].map((platform) => (
              <motion.a
                key={platform}
                href="#"
                className="glass-card text-center py-6 hover:shadow-lg hover:bg-accent/5 transition-all duration-300 group"
                variants={itemVariants}
              >
                <p className="font-sans font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                  {platform}
                </p>
              </motion.a>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
