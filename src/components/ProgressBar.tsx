interface ProgressBarProps {
  width: number;
}

const ProgressBar = ({ width }: ProgressBarProps) => {
  // Ensure width is a percentage string for CSS
  const widthStyle = typeof width === 'number' ? `${width}%` : width;

  return (
    <div className='progress-container'>
      <div className='progress-bar' style={{ width: widthStyle }}></div>
    </div>
  );
};
export default ProgressBar;
