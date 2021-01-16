import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import ContactForm from './ContactForm';
import Projects from './Projects';

function Routers() {
  return (
    <>
      <Switch>
        <Route path='/' component={Home} />
        <Route exact path='/contactForm' component={ContactForm} />
        <Route path='/projects' component={Projects} />
      </Switch>
    </>
  );
}

export default Routers;
