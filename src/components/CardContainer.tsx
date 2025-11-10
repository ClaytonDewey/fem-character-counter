import { Card } from '.';
import { useCountStore } from '../store/useCountStore';

const CardContainer = () => {
  const { characters, words, sentences } = useCountStore();
  return (
    <section className='card-container'>
      <Card
        className='card-char-count'
        count={characters}
        text='total characters'
        iconName='char-count'
      />
      <Card
        className='card-word-count'
        count={words}
        text='word count'
        iconName='word-count'
      />
      <Card
        className='card-sentence-count'
        count={sentences}
        text='sentence count'
        iconName='sentence'
      />
    </section>
  );
};
export default CardContainer;
