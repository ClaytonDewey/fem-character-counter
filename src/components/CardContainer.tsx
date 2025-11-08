import { Card } from '.';

const CardContainer = () => {
  return (
    <section className='card-container'>
      <Card
        className='card-char-count'
        count={278}
        text='total characters'
        iconName='char-count'
      />
      <Card
        className='card-word-count'
        count={39}
        text='word count'
        iconName='word-count'
      />
      <Card
        className='card-sentence-count'
        count={4}
        text='sentence count'
        iconName='sentence'
      />
    </section>
  );
};
export default CardContainer;
