import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, showForm, onToggleForm }) => {  
  const onClick = () => {
    console.log('btn clicked');
  }

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button title={showForm ? 'Close' : 'Add' } color={showForm ? 'red' : 'green' } onClick={onToggleForm} ></Button>
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