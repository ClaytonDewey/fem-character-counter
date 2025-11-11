import { Checkbox } from '.';
import { useCountStore } from '../store/useCountStore';

const WORDS_PER_MINUTE = 200;

const Hero = () => {
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
  };

  const handleLimitCharactersChange = (checked: boolean) => {
    setLimit(checked);
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

  return (
    <section className='hero'>
      <h1>Analyze your text in real-time.</h1>
      <div className='form'>
        <textarea
          maxLength={charLimit || undefined}
          name='text'
          placeholder='Start typing here… (or paste your text)'
          onChange={handleTextChange}
          value={text}
        />

        <div className='options'>
          <div className='form-group'>
            <Checkbox
              className='form-check'
              label='exclude spaces'
              id='spaces'
              onChange={handleExcludeSpacesChange}
            />
          </div>
          <div className='form-group'>
            <Checkbox
              className='form-check'
              label='set character limit'
              id='limitChar'
              onChange={handleLimitCharactersChange}
            />
            {limit && (
              <input
                type='number'
                className='form-control'
                name='text-limit'
                id='text-limit'
                min='1'
                placeholder='Enter limit'
                onChange={handleCharLimitChange}
              />
            )}
          </div>
          <span className='reading-time'>
            Approx. reading time:{' '}
            {readingTime === 0
              ? '< 1 minute'
              : readingTime === 1
              ? '1 minute'
              : `${readingTime} minutes`}
          </span>
        </div>
      </div>
    </section>
  );
};
export default Hero;
