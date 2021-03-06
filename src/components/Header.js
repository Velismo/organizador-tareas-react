import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')    
    }

  return <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Añadir' onCLick={onClick} />
  </header>;
};

Header.defaultProps = {
    title: 'Organizador',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header;
