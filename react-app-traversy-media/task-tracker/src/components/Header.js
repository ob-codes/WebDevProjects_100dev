import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title}) => {
  const onClick = (e) => {
    console.log(`button-${title} clicked`)
  }
  
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button title='Add' color='green' onClick={onClick}></Button>      
    </header>
  );
}

// CSS in JS
// const headingStyle = {
//   color: 'yellow', 
//   backgroundColor: 'black',
// }

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header;