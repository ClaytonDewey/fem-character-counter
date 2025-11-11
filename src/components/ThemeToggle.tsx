import React from 'react';
import { useThemeStore } from '../store/useThemeStore';
import { Button } from '.';
import { Icon } from '../svg';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <Button type='button' className='btn btn-toggle' onClick={toggleTheme}>
      <span className='sr-only'>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </span>
      <Icon name={theme === 'light' ? 'moon' : 'sun'} />
    </Button>
  );
};

export default ThemeToggle;
