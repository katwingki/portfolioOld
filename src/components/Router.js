import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';

function Routers() {
  return (
    <>
      <Switch>
        <Route path='/' component={Home} />
        <Route exact path='/aboutme' component={AboutMe} />
        <Route path='/projects' component={Projects} />
      </Switch>
    </>
  );
}

export default Routers;
