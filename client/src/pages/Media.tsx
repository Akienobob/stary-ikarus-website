import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ImageIcon, Video, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Media() {
  const { t, language } = useLanguage();
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  const galleryAlbums = [
    {
      id: 'wilde-weiber',
      titleRu: 'Wilde Weiber фотографии Nina Krutikova',
      titleDe: 'Wilde Weiber von Nina Krutikova',
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
      titleRu: 'Студийные сессии',
      titleDe: 'Shooting im Tonstudio',
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
      titleRu: 'Release-Party 02.04.2010',
      titleDe: 'Release-Party am 02.04.2010',
      photos: [
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/release_party_1_10101301.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/release_party_2_e186e14e.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/release_party_3_ffedb6b4.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/release_party_4_66be2fa7.jpg',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663375501955/4pPxt6BesnJdqhWZbjbdiu/release_party_5_3e230059.jpg',
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

  const currentAlbum = galleryAlbums.find(a => a.id === selectedAlbum);
  const getAlbumTitle = (album: typeof galleryAlbums[0]) => language === 'ru' ? album.titleRu : album.titleDe;

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

        {/* Photo Gallery Section - Albums View */}
        {!selectedAlbum ? (
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
                {language === 'ru' ? 'Фотогалерея' : 'Galerie'}
              </div>
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {galleryAlbums.map((album) => (
                <motion.button
                  key={album.id}
                  className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer text-left"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedAlbum(album.id)}
                >
                  <img
                    src={album.photos[0]}
                    alt={getAlbumTitle(album)}
                    className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-4">
                    <div className="w-full">
                      <p className="text-white font-sans font-semibold text-sm md:text-base group-hover:opacity-100 transition-opacity duration-300">
                        {getAlbumTitle(album)}
                      </p>
                      <p className="text-white/70 text-xs mt-1">
                        {album.photos.length} {language === 'ru' ? 'фото' : 'Fotos'}
                      </p>
                    </div>
                    <ChevronRight className="w-6 h-6 text-white ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </motion.section>
        ) : (
          /* Gallery View - Individual Album */
          <motion.section
            className="mb-16 md:mb-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.button
              className="flex items-center gap-2 text-accent hover:text-accent/80 mb-8 transition-colors"
              onClick={() => setSelectedAlbum(null)}
              variants={itemVariants}
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
              {language === 'ru' ? 'Назад' : 'Zurück'}
            </motion.button>

            <motion.h2 className="section-title mb-12" variants={itemVariants}>
              <div className="flex items-center gap-3">
                <ImageIcon className="w-8 h-8 text-accent" />
                {currentAlbum && getAlbumTitle(currentAlbum)}
              </div>
            </motion.h2>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4"
              variants={containerVariants}
            >
              {currentAlbum?.photos.map((photo, index) => (
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
                    <ImageIcon className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
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
