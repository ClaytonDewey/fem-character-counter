import { useThemeStore } from './store/useThemeStore';
import {
  CardContainer,
  Footer,
  Header,
  Hero,
  LetterDensity,
} from './components';

const App = () => {
  const { theme } = useThemeStore();
  return (
    <div className='app' data-theme={theme}>
      <div className='app-container'>
        <Header />
        <main>
          <Hero />
          <CardContainer />
          <LetterDensity />
        </main>
        <Footer />
      </div>
    </div>
  );
};
export default App;
