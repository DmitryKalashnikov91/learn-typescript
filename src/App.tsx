import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TodosPage from './pages/TodosPage';
import About from './pages/About';

const App: React.FC =() => {
 
  return (
   <BrowserRouter>
    <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodosPage} path='/' exact />
          <Route component={About} path='/about'/>
        </Switch>
        
      </div>
   </BrowserRouter>
  );
}

export default App;
