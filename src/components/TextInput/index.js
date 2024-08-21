const TextInput = ({ className = "", placeholder, ...rest }) => {
  return (
    <input
      className={`textinput ${className}`}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default TextInput;
