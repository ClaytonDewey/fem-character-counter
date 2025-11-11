import React from 'react';

// Props type for a native <button>
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ type = 'button', ...props }: ButtonProps) => {
  return <button type={type} {...props} />;
};

export default Button;
