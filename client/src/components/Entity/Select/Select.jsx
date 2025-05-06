export const Select = ({
  onChange,
  onBlur,
  name,
  placeholder,
  className,
  options,
}) => {
  return (
    <>
      <select
        className={className}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      >
        {options &&
          options.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
      </select>
    </>
  );
};
