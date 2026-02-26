import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Instagram, Youtube, Music } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-background border-t border-border mt-16 md:mt-24">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-serif font-bold text-foreground">
              STARY IKARUS
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">
              {t('footer.design')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif font-bold text-foreground">
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
          <div className="flex flex-col gap-4">
            <h3 className="font-serif font-bold text-foreground">
              {t('contacts.booking')}
            </h3>
            <a
              href="mailto:booking@staryikarus.com"
              className="text-foreground/70 hover:text-accent transition-colors duration-300 flex items-center gap-2 text-sm"
            >
              <Mail className="w-4 h-4" />
              booking@staryikarus.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Copyright and Links */}
        <div className="text-center text-foreground/60 text-sm space-y-4">
          <p>{t('footer.copyright')}</p>
          <div className="flex justify-center gap-4">
            <a
              href="/impressum"
              className="text-foreground/60 hover:text-accent transition-colors duration-300"
            >
              {t('footer.impressum')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
