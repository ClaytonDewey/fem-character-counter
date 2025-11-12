import { useState } from 'react';
import { Checkbox } from '.';
import { useCountStore } from '../store/useCountStore';
import { Icon } from '../svg';

const WORDS_PER_MINUTE = 200;

const Hero = () => {
  const [isExcludeChecked, setIsExcludeChecked] = useState(false);
  const [isLimitChecked, setIsLimitChecked] = useState(false);
  const {
    text,
    excludeSpaces,
    readingTime,
    charLimit,
    limit,
    setText,
    setCharacters,
    setCharLimit,
    setLimit,
    setWords,
    setSentences,
    setReadingTime,
    setExcludeSpaces,
  } = useCountStore();

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
    setReadingTime(Math.ceil(wordsArray.length / WORDS_PER_MINUTE));
  };

  const handleExcludeSpacesChange = (checked: boolean) => {
    setExcludeSpaces(checked);
    // Recalculate character count with the current text
    const noSpaces = text.replace(/\s+/g, '');
    setCharacters(checked ? noSpaces.length : text.length);
    setIsExcludeChecked(checked);
  };

  const handleLimitCharactersChange = (checked: boolean) => {
    setLimit(checked);
    setIsLimitChecked(checked);
    if (!checked) {
      setCharLimit(null);
    }
  };

  const handleCharLimitChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const limitValue = parseInt(event.target.value, 10);
    if (!isNaN(limitValue) && limitValue > 0) {
      setCharLimit(limitValue);
    }
  };

  // Count words by splitting text on whitespace and filtering out empty strings
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  let readingTimeText = '';
  if (wordCount === 0) {
    readingTimeText = '0 minute';
  } else if (wordCount < WORDS_PER_MINUTE) {
    readingTimeText = '<1 minute'; // Less than one minute reading time
  } else if (readingTime === 1) {
    readingTimeText = '1 minute';
  } else {
    readingTimeText = `${readingTime} minutes`;
  }

  return (
    <section className='hero'>
      <h1>Analyze your text in real-time.</h1>
      <div className='form'>
        <label htmlFor='text-input' className='sr-only'>
          Text to count
        </label>
        <textarea
          id='text-input'
          className={`${charLimit && text.length >= charLimit ? 'error' : ''}`}
          maxLength={charLimit || undefined}
          name='text'
          placeholder='Start typing here… (or paste your text)'
          onChange={handleTextChange}
          value={text}
        />

        {charLimit && text.length >= charLimit && (
          <p className='error'>
            <Icon name='info' />
            Limit reached! Your text exceeds {charLimit} characters.
          </p>
        )}

        <div className='options'>
          <div className='form-group'>
            <Checkbox
              checked={isExcludeChecked}
              className='form-check'
              label='exclude spaces'
              id='spaces'
              onChange={handleExcludeSpacesChange}
            />
          </div>
          <div className='form-group'>
            <Checkbox
              checked={isLimitChecked}
              className='form-check'
              label='set character limit'
              id='limitChar'
              onChange={handleLimitCharactersChange}
            />
            {limit && (
              <>
                <label htmlFor='text-limit' className='sr-only'>
                  Enter Limit
                </label>
                <input
                  type='number'
                  className='form-control'
                  name='text-limit'
                  id='text-limit'
                  min='1'
                  value={charLimit || ''}
                  onChange={handleCharLimitChange}
                />
              </>
            )}
          </div>
          <span className='reading-time'>
            Approx. reading time: {readingTimeText}
          </span>
        </div>
      </div>
    </section>
  );
};
export default Hero;
