import { Checkbox } from '.';
import { useCountStore } from '../store/useCountStore';

const Hero = () => {
  const {
    text,
    excludeSpaces,
    readingTime,
    setText,
    setCharacters,
    setWords,
    setSentences,
    setReadingTime,
    setExcludeSpaces,
  } = useCountStore();

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const wordsPerMinute = 200;
    const textValue = event.target.value;
    setText(textValue);

    const noSpaces = textValue.replace(/\s+/g, '');
    const wordsArray = textValue.trim().split(/\s+/).filter(Boolean);
    const sentencesArray = textValue
      .split(/[.!?]+/)
      .map((s) => s.trim())
      .filter(Boolean);

    setCharacters(excludeSpaces ? noSpaces.length : textValue.length);
    setWords(wordsArray.length);
    setSentences(sentencesArray.length);
    setReadingTime(Math.ceil(wordsArray.length / wordsPerMinute));
  };

  const handleExcludeSpacesChange = (checked: boolean) => {
    setExcludeSpaces(checked);
    // Recalculate character count with the current text
    const noSpaces = text.replace(/\s+/g, '');
    setCharacters(checked ? noSpaces.length : text.length);
  };

  const handleLimitCharactersChange = (checked: boolean) => {
    // Implement character limit logic here if needed
  };

  return (
    <section className='hero'>
      <h1>Analyze your text in real-time.</h1>
      <div className='form'>
        <textarea
          name='text'
          placeholder='Start typing here… (or paste your text)'
          onChange={handleTextChange}></textarea>

        <div className='options'>
          <Checkbox
            className='form-check'
            label='exclude spaces'
            id='spaces'
            onChange={handleExcludeSpacesChange}
          />
          <Checkbox
            className='form-check'
            label='set character limit'
            id='limitChar'
            onChange={handleLimitCharactersChange}
          />
          <span className='reading-time'>
            Approx. reading time:{' '}
            {readingTime <= 1
              ? `< ${readingTime} minute`
              : `${readingTime} minutes`}
          </span>
        </div>
      </div>
    </section>
  );
};
export default Hero;
