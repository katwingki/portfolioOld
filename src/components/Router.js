import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './Home';
import ContactForm from './ContactForm';
import Projects from './Projects';
import Resume from './Resume';
import Navbar from './Navbar';
import Footer from './Footer';

import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
configureAnchors({ offset: -160, scrollDuration: 200 });

function Routers() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' component={Home} />

        <Route exact path='/contactForm' component={ContactForm} />

        <Route exact path='/projects' component={Projects} />
        <Route path='/resume' component={Resume} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routers;
