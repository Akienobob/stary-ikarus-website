import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2">
      <Button
        variant={language === 'ru' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('ru')}
        className={`font-sans font-semibold transition-all duration-300 ${
          language === 'ru'
            ? 'bg-accent text-foreground hover:bg-accent/90'
            : 'border-accent text-foreground hover:bg-background'
        }`}
      >
        РУ
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className={`font-sans font-semibold transition-all duration-300 ${
          language === 'en'
            ? 'bg-accent text-foreground hover:bg-accent/90'
            : 'border-accent text-foreground hover:bg-background'
        }`}
      >
        EN
      </Button>
    </div>
  );
}
