import { Letter } from '.';
import { useCountStore } from '../store/useCountStore';

const LetterDensity = () => {
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

  const counts = countLetters(text);
  return (
    <section className='density'>
      <h2>Letter Density</h2>
      {text === '' ? (
        <p>No characters found. Start typing to see letter density.</p>
      ) : (
        <div className='letters-container'>
          {Array.from(counts.entries()).map(([letter, count]) => (
            <Letter key={letter} count={count} letter={letter} />
          ))}
        </div>
      )}
    </section>
  );
};
export default LetterDensity;
