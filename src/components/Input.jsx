function Input({ value, className, style, handleOnInput, handleFocuse }) {
  return (
    <input
      value={value}
      style={style}
      className={className}
      onInput={handleOnInput}
      onFocus={handleFocuse}
    />
  );
}

export default Input;
