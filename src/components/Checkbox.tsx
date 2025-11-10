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
    <label htmlFor={id}>
      <input
        id={id}
        type='checkbox'
        checked={checked}
        className={className}
        onChange={handleChange}
        disabled={disabled}
      />
      {label}
    </label>
  );
};
export default Checkbox;
