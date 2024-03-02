import PropTypes from 'prop-types';

const Button = ({ title, color, onClick }) => {
  return (
    <header onClick={onClick} className='header'>
      <button className='btn' style={{backgroundColor : color}}>{title}</button>
    </header>
  );
}

Button.defaultProps = {
  // backgroundColor : 'white',
  // title : 'Multy',
}

Button.propTypes = {
  title : PropTypes.string.isRequired,
  color : PropTypes.string.isRequired,
  onClick : PropTypes.func,
}

export default Button;