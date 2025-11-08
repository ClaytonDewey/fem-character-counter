import { Icon } from '../svg';
import { ThemeToggle } from '.';
import { useThemeStore } from '../store/useThemeStore';

const Header = () => {
  const { theme } = useThemeStore();
  return (
    <header className='header'>
      <div className='header-logo'>
        <Icon name={theme === 'dark' ? 'logo-dark' : 'logo'} />
      </div>
      <ThemeToggle />
    </header>
  );
};
export default Header;
