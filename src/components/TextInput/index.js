const TextInput = ({ className = "", placeholder, ...rest }) => {
  return (
    <div className={`textinput-wrapper ${className}`
}>
    <input
      className={`textinput`}
      placeholder={placeholder}
      {...rest}
    />
    </div>
  );
};

export default TextInput;
