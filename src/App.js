import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import Home from './components/pages/Home';
import Cucina from './components/pages/Cucina';
import Primavera from './components/pages/Primavera';
import Footer from './components/Footer';
import Nara from './components/pages/Nara';

function App() {
  return (
    <Fragment>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/nara" component={Nara} />
        <Route path="/primavera" component={Primavera} />
        <Route path="/cucina" component={Cucina} />
      </Switch>
      <Footer />
    </Router>
    </Fragment>

    
   
  );
}

export default App;
