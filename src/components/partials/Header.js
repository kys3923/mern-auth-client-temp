import { Link } from 'react-router-dom';

const Header = (props) => {
  let style = {
    backgroundColor: 'chartreuse',
    borderBottom: '3px solid black'
  }

  return (
    <header style={style}>
      <h1>Header</h1>
      <nav>
        {/* TODO: conditional link rendering */}
        <Link to='/'>Home</Link>{' | '}
        <Link to='/auth'>Login or Signup</Link>{' | '}
        <Link to='/profile'>Account</Link>
      </nav>
    </header>
  );
}
export default Header;