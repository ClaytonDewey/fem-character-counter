import { useState } from 'react';
import { Icon } from '../svg';

interface CheckboxProps {
  className?: string;
  label: string;
  id: string;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  className,
  label,
  id,
  onChange,
  disabled,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    onChange(checked);
  };

  return (
    <label>
      <input
        id={id}
        type='checkbox'
        className={isChecked ? `${className} checked` : className}
        onChange={handleChange}
        disabled={disabled}
        checked={isChecked}
      />
      <span className='checkmark'>
        <Icon name='check' />
      </span>
      {label}
    </label>
  );
};
export default Checkbox;
