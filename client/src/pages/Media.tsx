import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ImageIcon, Video, X } from 'lucide-react';
import { useState } from 'react';

export default function Media() {
  const { t, language } = useLanguage();
  const [selectedAlbumId, setSelectedAlbumId] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  const galleryAlbums = [
    {
      id: 'wilde-weiber',
      titleRu: 'Wilde Weiber (2010)',
      titleDe: 'Wilde Weiber (2010)',
      cover: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/wilde_weiber_1_4843457f.jpg',
      photos: [
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/wilde_weiber_1_4843457f.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/wilde_weiber_2_be0d980e.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/wilde_weiber_3_2798085f.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/wilde_weiber_4_7f9cd61c.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/wilde_weiber_5_8d80fe85.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/wilde_weiber_6_f3f3df10.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/wilde_weiber_7_93e0619c.jpg',
      ]
    },
    {
      id: 'studio-sessions',
      titleRu: 'Студия (2010)',
      titleDe: 'Studio (2010)',
      cover: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/studio_1_eff36da7.jpg',
      photos: [
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/studio_1_eff36da7.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/studio_2_47c7e8ad.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/studio_15_e8f2f726.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/studio_16_3ab71237.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/studio_18_5d32541b.jpg',
      ]
    },
    {
      id: 'release-party',
      titleRu: 'Release-Party (2010)',
      titleDe: 'Release-Party (2010)',
      cover: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/release_party_1_f9ef7814.jpg',
      photos: [
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/release_party_1_f9ef7814.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/release_party_2_670a920e.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/release_party_3_71821f07.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/release_party_4_9ac4dfc2.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/release_party_5_4d476ae0.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/release_party_6_cea0eda9.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/release_party_7_619e5285.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/release_party_8_1c0554ed.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/release_party_9_597945fa.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/release_party_10_f269d704.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/release_party_11_bcb67630.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/release_party_12_85d7d355.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/release_party_13_25768d50.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/release_party_14_6c2ea984.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/release_party_15_91c01d31.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/release_party_16_b2199132.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/release_party_17_e1ca0e75.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/release_party_18_2cb245ef.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/release_party_19_700a3690.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/release_party_20_8f34f7a7.jpg',
      ]
    }
  ];

  const videoItems = [
    { title: 'Чай с бергамотом / Bergamotte Tee', videoId: '0VfUjFBIuMs', duration: '1:26' },
    { title: 'Хищные бабы / Wilde Weiber', videoId: 'i0cxtmVkO_o', duration: '4:07' },
    { title: 'Постапокалипсис / Postapokalypse', videoId: '4Qvl5bAn5as', duration: '3:55' },
    { title: 'Обманщик / Betrüger', videoId: '0QBE2K7QgWY', duration: '4:49' },
    { title: 'Неуловимый Джо / Uncatchable Joe', videoId: '1uStlchRh3s', duration: '3:04' },
    { title: 'Нет / Nein', videoId: '2fQ6DZ2t46E', duration: '3:33' },
  ];

  const getAlbumTitle = (album: typeof galleryAlbums[0]) => language === 'ru' ? album.titleRu : album.titleDe;
  const currentAlbum = galleryAlbums.find(a => a.id === selectedAlbumId);

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
          <h1 className="section-title">{language === 'ru' ? 'Медиа' : t('media.title')}</h1>
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
          <motion.h2 className="section-title mb-8 md:mb-12" variants={itemVariants}>
            <div className="flex items-center gap-3">
              <ImageIcon className="w-8 h-8 text-accent" />
              {language === 'ru' ? 'Фотогалерея' : 'Galerie'}
            </div>
          </motion.h2>

          {/* Albums Grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4"
            variants={containerVariants}
          >
            {galleryAlbums.map((album) => (
              <motion.button
                key={album.id}
                className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedAlbumId(album.id)}
              >
                <img
                  src={album.cover}
                  alt={getAlbumTitle(album)}
                  className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-2 md:p-3">
                  <p className="text-white font-sans font-semibold text-xs md:text-sm">
                    {getAlbumTitle(album)}
                  </p>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </motion.section>

        {/* Album Modal */}
        {selectedAlbumId && currentAlbum && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedAlbumId(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-lg bg-background p-6 md:p-8"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedAlbumId(null)}
                className="absolute top-4 right-4 bg-accent hover:bg-accent/90 text-background p-2 rounded-full transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-2xl md:text-3xl font-bold mb-6 mt-4">
                {getAlbumTitle(currentAlbum)}
              </h3>

              {/* Photos Grid in Modal */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {currentAlbum.photos.map((photo, index) => (
                  <motion.div
                    key={index}
                    className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedImage(photo)}
                  >
                    <img
                      src={photo}
                      alt={`${getAlbumTitle(currentAlbum)} ${index + 1}`}
                      className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <ImageIcon className="w-4 md:w-6 h-4 md:h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Gallery"
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-accent hover:bg-accent/90 text-background p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* Divider */}
        <div className="meander-divider my-16 md:my-24" />

        {/* Videos Section */}
        <motion.section
          className="pt-16 md:pt-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="section-title mb-12" variants={itemVariants}>
            <div className="flex items-center gap-3">
              <Video className="w-8 h-8 text-accent" />
              {language === 'ru' ? 'Видео' : 'Videos'}
            </div>
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {videoItems.map((video, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-video"
                variants={itemVariants}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
