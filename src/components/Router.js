import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
function Routers() {
  return (
    <div className='content'>
      <Switch>
        <Route path='/' component={Home} />
        <Route exact path='/aboutme' component={AboutMe} />
        <Route path='/projects' component={Projects} />
      </Switch>
    </div>
  );
}

export default Routers;
