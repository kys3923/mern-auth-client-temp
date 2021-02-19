import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Profile from './pages/Profile';

const Content = (props) => {
  return (
    <main>
      <h1>Content page</h1>
      <Route exact path='/' component={Home} />
      <Route path='/auth' component={Auth} />
      <Route path='/profile' component={Profile} />
    </main>
  );
}
export default Content;