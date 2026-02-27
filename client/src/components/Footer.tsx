import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Instagram, Youtube, Music } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-background border-t border-border mt-8 sm:mt-16 md:mt-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-6 sm:mb-8 md:mb-12 max-w-6xl mx-auto">
          {/* Brand Section */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="text-xl sm:text-2xl font-serif font-bold text-foreground">
              STARY IKARUS
            </div>
            <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed">
              {t('footer.design')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="font-serif font-bold text-foreground text-sm sm:text-base">
              {t('contacts.social_title')}
            </h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://bandcamp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors duration-300"
              >
                <Music className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="font-serif font-bold text-foreground text-sm sm:text-base">
              {t('contacts.booking')}
            </h3>
            <a
              href="mailto:booking@staryikarus.com"
              className="text-foreground/70 hover:text-accent transition-colors duration-300 flex items-center gap-2 text-xs sm:text-sm"
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="break-all">booking@staryikarus.com</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-6 sm:my-8" />

        {/* Copyright and Links */}
        <div className="text-center text-foreground/60 text-xs sm:text-sm max-w-6xl mx-auto">
          <p className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 flex-wrap">
            <span>{t('footer.copyright')}</span>
            <span className="hidden sm:inline">|</span>
            <a
              href="/impressum"
              className="text-foreground/60 hover:text-accent transition-colors duration-300"
            >
              {t('footer.impressum')}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
