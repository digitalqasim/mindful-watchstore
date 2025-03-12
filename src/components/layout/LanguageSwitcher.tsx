
import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Check } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'es', name: 'Español' }
];

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger 
        asChild
        className="rounded-full p-2 text-watch dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        ref={triggerRef}
      >
        <button aria-label={t('language.language')}>
          <Globe className="h-5 w-5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <div className="py-2 px-3 text-xs font-medium text-gray-500 dark:text-gray-400">
          {t('language.language')}
        </div>
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onSelect={() => handleLanguageChange(language.code)}
            className="cursor-pointer"
          >
            <div className="flex items-center justify-between w-full">
              <span>{t(`language.${language.code === 'en' ? 'english' : language.code === 'fr' ? 'french' : language.code === 'de' ? 'german' : 'spanish'}`)}</span>
              {i18n.language === language.code && (
                <Check className="h-4 w-4" />
              )}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
