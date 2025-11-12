import ProgressBar from './ProgressBar';
import { useCountStore } from '../store/useCountStore';

interface LetterProps {
  letter: string;
  count: number;
}

const Letter = ({ letter, count }: LetterProps) => {
  const { characters } = useCountStore();

  const percentage =
    characters > 0 ? ((count / characters) * 100).toFixed(2) : 0;

  return (
    <div className='letter'>
      <span className='letter-char'>{letter}</span>
      <ProgressBar width={Number(percentage)} />
      <span className='letter-count'>
        {count} ({percentage}%)
      </span>
    </div>
  );
};
export default Letter;
