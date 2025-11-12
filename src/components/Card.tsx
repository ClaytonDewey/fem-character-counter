import { Icon } from '../svg';

interface CardProps {
  className?: string;
  count: number;
  text: string;
  iconName: string;
}

const Card = ({
  className = 'card-char-count',
  count,
  text,
  iconName,
}: CardProps) => {
  let displayCount;
  count < 10 ? (displayCount = `0${count}`) : (displayCount = `${count}`);

  return (
    <div className={`card ${className}`}>
      <div className='card-body'>
        <h3 className='card-count'>{displayCount}</h3>
        <p className='card-text'>{text}</p>
      </div>
      <div className='card-bg'>
        <Icon name={iconName} />
      </div>
    </div>
  );
};
export default Card;
