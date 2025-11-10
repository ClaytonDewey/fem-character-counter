import { Checkbox } from '.';

const Hero = () => {
  const handleExcludeSpacesChange = (checked: boolean) => {
    console.log('Exclude spaces:', checked);
  };
  return (
    <section className='hero'>
      <h1>Analyze your text in real-time.</h1>
      <div className='form'>
        <textarea
          name='text'
          placeholder='Start typing here… (or paste your text)'></textarea>

        <div className='options'>
          <Checkbox
            className='form-check'
            label='exclude spaces'
            id='spaces'
            checked={false}
            onChange={handleExcludeSpacesChange}
          />
          <Checkbox
            className='form-check'
            label='set character limit'
            id='limitChar'
            checked={false}
            onChange={handleExcludeSpacesChange}
          />
          <span>Approx. reading time: &lt;1 minute</span>
        </div>
      </div>
    </section>
  );
};
export default Hero;
