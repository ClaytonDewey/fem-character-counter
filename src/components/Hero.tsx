import { useState } from 'react';
import { Checkbox } from '.';
import { useCountStore } from '../store/useCountStore';

const Hero = () => {
  const {
    setCharacters,
    excludeSpaces,
    setWords,
    setSentences,
    readingTime,
    setReadingTime,
    setExcludeSpaces,
  } = useCountStore();

  const [textValue, setTextValue] = useState('');

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const wordsPerMinute = 200;
    const text = event.target.value;
    setTextValue(text);

    const noSpaces = text.replace(/\s+/g, '');
    const wordsArray = text.trim().split(/\s+/).filter(Boolean);
    const sentencesArray = text
      .split(/[.!?]+/)
      .map((s) => s.trim())
      .filter(Boolean);

    setCharacters(excludeSpaces ? noSpaces.length : text.length);
    setWords(wordsArray.length);
    setSentences(sentencesArray.length);
    setReadingTime(Math.ceil(wordsArray.length / wordsPerMinute));
  };

  const handleExcludeSpacesChange = (checked: boolean) => {
    setExcludeSpaces(checked);
    // Recalculate character count with the current text
    const noSpaces = textValue.replace(/\s+/g, '');
    setCharacters(checked ? noSpaces.length : textValue.length);
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
          <span>
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
