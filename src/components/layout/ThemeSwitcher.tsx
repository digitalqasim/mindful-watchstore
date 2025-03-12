
import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Laptop, Check } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger 
        asChild
        className="rounded-full p-2 text-watch dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        ref={triggerRef}
      >
        <button aria-label="Toggle theme">
          {theme === 'light' && <Sun className="h-5 w-5" />}
          {theme === 'dark' && <Moon className="h-5 w-5" />}
          {theme === 'system' && <Laptop className="h-5 w-5" />}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem onSelect={() => { setTheme('light'); setOpen(false); }} className="cursor-pointer">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <Sun className="h-4 w-4 mr-2" />
              <span>{t('theme.light')}</span>
            </div>
            {theme === 'light' && <Check className="h-4 w-4" />}
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => { setTheme('dark'); setOpen(false); }} className="cursor-pointer">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <Moon className="h-4 w-4 mr-2" />
              <span>{t('theme.dark')}</span>
            </div>
            {theme === 'dark' && <Check className="h-4 w-4" />}
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => { setTheme('system'); setOpen(false); }} className="cursor-pointer">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <Laptop className="h-4 w-4 mr-2" />
              <span>{t('theme.system')}</span>
            </div>
            {theme === 'system' && <Check className="h-4 w-4" />}
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
