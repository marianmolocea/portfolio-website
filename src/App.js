import React from 'react';
import { HashRouter as Router} from 'react-router-dom'
import './App.css';
import PageView from './components/PageView/PageView'

function App() {
  return (
    <Router >
      <div className="App">
        <PageView />  
      </div>
    </Router>
  );
}

export default App;
