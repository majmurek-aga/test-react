function Button({ name, className, handleClick }) {
  return (
  <button className={className} onClick={handleClick}>
    {name}
  </button>
 );
}

export default Button;
