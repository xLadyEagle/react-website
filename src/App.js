import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';

function App() {
  return (
    <Fragment>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact />
      </Switch>
    </Router>
    </Fragment>

    
   
  );
}

export default App;
