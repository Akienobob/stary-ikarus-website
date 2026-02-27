import { useState } from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const { t, language } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.music'), href: '/music' },
    { label: t('nav.media'), href: '/media' },
    { label: t('nav.contacts'), href: '/contacts' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300">
            <div className="text-2xl font-serif font-bold text-foreground">
              SI
            </div>
            <div className="flex flex-col">
              <div className="text-xs sm:text-sm font-serif font-bold text-foreground leading-tight">
                {language === 'ru' ? 'Старый Икарус' : 'Stary Ikarus'}
              </div>
              <div className="hidden sm:block text-xs text-accent font-sans font-semibold">
                {language === 'ru' ? 'Stary Ikarus' : 'Старый Икарус'}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link font-sans text-lg font-medium hover:text-accent transition-colors duration-300">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side: Language Switcher + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-border flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link font-sans text-base font-medium block py-2 hover:text-accent transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
