import './Button.css';

// eslint-disable-next-line
function Button({ children, onClick, color = 'blue', className = '' }) {
  const classNames = `Button ${color} ${className}`;
  return (
    <button type="button" onClick={onClick} className={classNames}>
      {children}
    </button>
  );
}

export default Button;
