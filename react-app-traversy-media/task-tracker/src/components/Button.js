import PropTypes from 'prop-types';

const Button = ({ title, color, onClick }) => {
  return (
    <button className='btn' onClick={onClick} style={{backgroundColor : color}}>
      {title}
    </button>
  );
}

Button.defaultProps = {
  // backgroundColor : 'white',
  // title : 'Multy',
}

Button.propTypes = {
  title : PropTypes.string.isRequired,
  color : PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default Button;