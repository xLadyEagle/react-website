import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import Home from './components/pages/Home';

function App() {
  return (
    <Fragment>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
    </Fragment>

    
   
  );
}

export default App;
