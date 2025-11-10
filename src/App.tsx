import { useThemeStore } from './store/useThemeStore';
import { CardContainer, Header, Hero } from './components';

const App = () => {
  const { theme } = useThemeStore();
  return (
    <div className='app' data-theme={theme}>
      <div className='app-container'>
        <Header />
        <main>
          <Hero />
          <CardContainer />
          <div>{/* <ProgressBar width={40} /> */}</div>
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
