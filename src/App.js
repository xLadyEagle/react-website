import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import Home from './components/pages/Home';
import Cucina from './components/pages/Cucina';
import Primavera from './components/pages/Primavera';
import Footer from './components/Footer';
import Nara from './components/pages/Nara';
import Tokyo from './components/pages/Tokyo';
import Kyoto from './components/pages/Kyoto';
import Osaka from './components/pages/Osaka';
import Curiosità from './components/pages/Curiosità';

function App() {
  return (
    <Fragment>
    <Router basename={window.location.pathname || ''}>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tokyo" component={Tokyo} />
        <Route path="/kyoto" component={Kyoto} />
        <Route path="/osaka" component={Osaka} />
        <Route path="/nara" component={Nara} />
        <Route path="/primavera" component={Primavera} />
        <Route path="/cucina" component={Cucina} />
        <Route path="/curiosità" component={Curiosità} />
      </Switch>
      <Footer />
    </Router>
    </Fragment>

    
   
  );
}

export default App;
