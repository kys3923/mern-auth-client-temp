import { Link } from 'react-router-dom';

const Header = (props) => {
  let style = {
    backgroundColor: 'chartreuse',
    borderBottom: '3px solid black'
  }

  let conditionalLinks = props.currentUser ?
    <nav>
      <Link className="nav-link" to='/'>Home</Link>{' | '}
      <Link className="nav-link" to='/profile'>Account</Link>{' | '}
      <span className="nav-link" onClick={e => props.handleAuth(null)}>logout</span>
      {/* TODO logout link styling & functionality*/}
    </nav> :
    <nav>
      <Link className="nav-link" to='/'>Home</Link>{' | '}
      <Link className="nav-link" to='/auth'>Login or Signup</Link>
    </nav>

  return (
    <header style={style}>
      <h1>Header</h1>
      {conditionalLinks}
    </header>
  );
}
export default Header;