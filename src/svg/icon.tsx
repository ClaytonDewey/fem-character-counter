import {
  IconCheck,
  IconInfo,
  IconLogoDark,
  IconLogoLight,
  IconMoon,
  IconCharCount,
  IconSentence,
  IconWordCount,
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
      return <IconCharCount />;
    case 'sentence':
      return <IconSentence />;
    case 'word-count':
      return <IconWordCount />;
    default:
      return <IconLogoLight />;
  }
};

export default Icon;
