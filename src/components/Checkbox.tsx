import { Icon } from '../svg';

interface CheckboxProps {
  className?: string;
  label: string;
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  className,
  label,
  id,
  checked,
  onChange,
  disabled,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label>
      <input
        id={id}
        type='checkbox'
        className={checked ? `${className} checked` : className}
        onChange={handleChange}
        disabled={disabled}
        checked={checked}
      />
      <span className='checkmark'>
        <Icon name='check' />
      </span>
      {label}
    </label>
  );
};
export default Checkbox;
