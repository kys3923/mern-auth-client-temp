import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './components/Content';
import Header from './components/partials/Header';

function App() {
  // current user
  const [currentUser, setCurrentUser] = useState(null);
  // isAuthenticated - boolean
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuth = user => {
    console.log('handling Authentication ... ');
    setCurrentUser(user);
    setIsAuthenticated(true);
  }

  return (
    <Router>
      {/* TODO remove div, and add some styling */}
      <div className="App">
        <Header currentUser={currentUser} />
        <Content 
          currentUser={currentUser}
          isAuthenticated={isAuthenticated}
          handleAuth={handleAuth}
        />
      </div>
    </Router>
    );
}

export default App;
