import { Checkbox } from '.';
import { useCountStore } from '../store/useCountStore';

const Hero = () => {
  const {
    setCharacters,
    setWords,
    setSentences,
    readingTime,
    setReadingTime,
    setExcludeSpaces,
  } = useCountStore();

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const wordsPerMinute = 200;
    const text = event.target.value;
    const wordsArray = text.trim().split(/\s+/).filter(Boolean);
    const sentencesArray = text
      .split(/[.!?]+/)
      .map((s) => s.trim())
      .filter(Boolean);
    setCharacters(text.length);
    setWords(wordsArray.length);
    setSentences(sentencesArray.length);
    setReadingTime(Math.ceil(wordsArray.length / wordsPerMinute));
  };

  const handleExcludeSpacesChange = (checked: boolean) => {
    setExcludeSpaces(checked);
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
