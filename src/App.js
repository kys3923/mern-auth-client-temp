import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './components/Content';
import Header from './components/partials/Header';

function App() {
  return (
    <Router>
      {/* TODO remove div, and add some styling */}
      <div className="App">
        <Header />
        <Content />
      </div>
    </Router>
    );
}

export default App;
