import ProgressBar from './ProgressBar';

interface LetterProps {
  letter: string;
  count: number;
}

const Letter = ({ letter, count }: LetterProps) => {
  return (
    <div className='letter'>
      <span className='letter-char'>{letter}</span>
      <ProgressBar width={(count / 100) * 100} />
      <span className='letter-count'>{count}</span>
    </div>
  );
};
export default Letter;
