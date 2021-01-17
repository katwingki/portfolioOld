import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import ContactForm from './ContactForm';
import Projects from './Projects';
import Resume from './Resume';

function Routers() {
  return (
    <>
      <Switch>
        <Route path='/' component={Home} />
        <Route exact path='/contactForm' component={ContactForm} />
        <Route path='/projects' component={Projects} />
        <Route path='/resume' component={Resume} />
      </Switch>
    </>
  );
}

export default Routers;
