import React from 'react';
import { useThemeStore } from '../store/useThemeStore';
import { Button } from '.';
import { Icon } from '../svg';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <Button
      type='button'
      className='btn btn-toggle'
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
      <Icon name={theme === 'light' ? 'moon' : 'sun'} />
    </Button>
  );
};

export default ThemeToggle;
