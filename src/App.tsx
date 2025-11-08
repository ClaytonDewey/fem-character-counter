import { useThemeStore } from './store/useThemeStore';
import { Header } from './components';

const App = () => {
  const { theme } = useThemeStore();
  return (
    <div className='app' data-theme={theme}>
      <div className='app-container'>
        <Header />
        <br />
        <br /> Analyze your text in real-time. Start typing here… (or paste your
        text) Exclude Spaces Set Character Limit Approx. reading time:{' '}
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
