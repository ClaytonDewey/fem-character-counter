import { useThemeStore } from './store/useThemeStore';
import { Card, Header, Hero } from './components';

const App = () => {
  const { theme } = useThemeStore();
  return (
    <div className='app' data-theme={theme}>
      <div className='app-container'>
        <Header />
        <main>
          <Hero />
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
        </main>
        <br />
        <br /> Exclude Spaces Set Character Limit Approx. reading time:{' '}
        {/* <!-- Insert number --> */} minutes
        {/* <!-- Insert number --> */}
        Total Characters
        {/* <!-- Insert number --> */}
        Word Count
        {/* <!-- Insert number --> */}
        Sentence Count Letter Density No characters found. Start typing to see
        letter density.
      </div>
    </div>
  );
};
export default App;
