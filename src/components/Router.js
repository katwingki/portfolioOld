import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './Home';
import ContactForm from './ContactForm';
import Projects from './Projects';
import Resume from './Resume';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import ScrollableAnchor, {
  configureAnchors,
  goToTop,
} from 'react-scrollable-anchor';
configureAnchors({ offset: -150, scrollDuration: 1000 });
goToTop();

function Routers() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route exact path='/contactform' component={ContactForm} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/resume' component={Resume} />
        <Route path='/portfolio' component={Home} />
        <Route path='/' component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routers;
