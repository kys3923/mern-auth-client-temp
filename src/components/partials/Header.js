import { Link } from 'react-router-dom';

const Header = (props) => {
  let style = {
    backgroundColor: 'chartreuse',
    borderBottom: '3px solid black'
  }

  let conditionalLinks = props.currentUser ?
    <nav>
      <Link to='/'>Home</Link>{' | '}
      <Link to='/profile'>Account</Link>{' | '}
      <span>logout</span>
      {/* TODO logout link styling & functionality*/}
    </nav> :
    <nav>
      <Link to='/'>Home</Link>{' | '}
      <Link to='/auth'>Login or Signup</Link>
    </nav>

  return (
    <header style={style}>
      <h1>Header</h1>
      {conditionalLinks}
    </header>
  );
}
export default Header;