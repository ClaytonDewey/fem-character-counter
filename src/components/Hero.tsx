const Hero = () => {
  return (
    <section className='hero'>
      <h1>Analyze your text in real-time.</h1>
      <form className='form'>
        <textarea
          name='text'
          placeholder='Start typing here… (or paste your text)'></textarea>
      </form>
    </section>
  );
};
export default Hero;
