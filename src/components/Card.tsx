import { Icon } from '../svg';

interface CardProps {
  className?: string;
  count: string | number;
  text: string;
  iconName: string;
}

const Card = ({
  className = 'card-char-count',
  count,
  text,
  iconName,
}: CardProps) => {
  return (
    <section className={`card ${className}`}>
      <div className='card-body'>
        <h2 className='card-count'>{count}</h2>
        <p className='card-text'>{text}</p>
      </div>
      <div className='card-bg'>
        <Icon name={iconName} />
      </div>
    </section>
  );
};
export default Card;
