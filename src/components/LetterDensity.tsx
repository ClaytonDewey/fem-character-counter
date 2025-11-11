import { Letter } from '.';
import { FaChevronDown } from 'react-icons/fa6';
import { useCountStore } from '../store/useCountStore';
import { useState } from 'react';

const LetterDensity = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { text } = useCountStore();

  const countLetters = (str: string): Map<string, number> => {
    const letterCounts = new Map<string, number>();

    for (const char of str) {
      // Conver to lowercase to count 'A' and 'a' as the same letter
      const lowerChar = char.toLowerCase();

      // Check if the character is an alphabet letter
      if (/[a-z]/.test(lowerChar)) {
        letterCounts.set(lowerChar, (letterCounts.get(lowerChar) || 0) + 1);
      }
    }

    return letterCounts;
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const counts = countLetters(text);
  const sortedCounts = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);
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
          <div className='letters-container'>
            {topFive.map(([letter, count]) => (
              <Letter key={letter} count={count} letter={letter} />
            ))}
            {isOpen &&
              remaining.map(([letter, count]) => (
                <Letter key={letter} count={count} letter={letter} />
              ))}
          </div>

          {hasMoreThanFive && (
            <button
              type='button'
              className={`btn btn-more ${isOpen ? 'open' : ''}`}
              onClick={handleClick}>
              {isOpen ? 'See less' : 'See more'} <FaChevronDown />
            </button>
          )}
        </>
      )}
    </section>
  );
};
export default LetterDensity;
