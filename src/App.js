import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import Home from './components/pages/Home';
import Cucina from './components/pages/Cucina';

function App() {
  return (
    <Fragment>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cucina" component={Cucina} />
      </Switch>
    </Router>
    </Fragment>

    
   
  );
}

export default App;
