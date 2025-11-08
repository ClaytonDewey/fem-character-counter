import React from 'react';
import { useThemeStore } from '../store/useThemeStore';
import { Icon } from '../svg';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button type='button' className='btn btn-toggle' onClick={toggleTheme}>
      <span className='sr-only'>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </span>
      <Icon name={theme === 'light' ? 'moon' : 'sun'} />
    </button>
  );
};

export default ThemeToggle;
