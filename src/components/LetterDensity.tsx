import { useState } from 'react';
import { useCountStore } from '../store/useCountStore';
import { Button, Letter } from '.';
import { FaChevronDown } from 'react-icons/fa6';

const LetterDensity = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { text } = useCountStore();

  const countLetters = (str: string) =>
    Array.from(str.toLowerCase())
      .filter((char) => /[a-z]/.test(char))
      .reduce(
        (map, char) => map.set(char, (map.get(char) || 0) + 1),
        new Map<string, number>()
      );

  const handleClick = () => setIsOpen(!isOpen);

  const sortedCounts = [...countLetters(text)].sort((a, b) => b[1] - a[1]);
  const topFive = sortedCounts.slice(0, 5);
  const remaining = sortedCounts.slice(5);
  const hasMoreThanFive = sortedCounts.length > 5;

  return (
    <section className='density'>
      <h2>Letter Density</h2>
      {text === '' ? (
        <div className='letters-container'>
          <p>No characters found. Start typing to see letter density.</p>
        </div>
      ) : (
        <>
          <div
            className={`${hasMoreThanFive ? 'mb-12' : ''} letters-container`}>
            {topFive.map(([letter, count]) => (
              <Letter key={letter} count={count} letter={letter} />
            ))}
          </div>

          <div className={`letters-slide ${isOpen ? 'open' : ''}`}>
            {remaining.map(([letter, count]) => (
              <Letter key={letter} count={count} letter={letter} />
            ))}
          </div>

          {hasMoreThanFive && (
            <Button
              type='button'
              className={`btn btn-more ${isOpen ? 'open' : ''}`}
              onClick={handleClick}>
              {isOpen ? 'See less' : 'See more'} <FaChevronDown />
            </Button>
          )}
        </>
      )}
    </section>
  );
};
export default LetterDensity;
