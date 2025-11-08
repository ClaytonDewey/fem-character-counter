import {
  IconCheck,
  IconInfo,
  IconLogoDark,
  IconLogoLight,
  IconMoon,
  IconPatternCharCount,
  IconPatternSentence,
  IconPatternWordCount,
  IconSun,
} from '.';

const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case 'check':
      return <IconCheck />;
    case 'info':
      return <IconInfo />;
    case 'logo-dark':
      return <IconLogoDark />;
    case 'logo':
      return <IconLogoLight />;
    case 'moon':
      return <IconMoon />;
    case 'sun':
      return <IconSun />;
    case 'char-count':
      return <IconPatternCharCount />;
    case 'sentence':
      return <IconPatternSentence />;
    case 'word-count':
      return <IconPatternWordCount />;
    default:
      return <IconLogoLight />;
  }
};

export default Icon;
