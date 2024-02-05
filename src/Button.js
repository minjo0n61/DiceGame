// import PropTypes from 'prop-types';

function Button({ children, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

// Button.propsTypes = {
//   children: PropTypes.node.isRequired,
// };

// Button.defaultProps = {
//   children: 'text',
// };
