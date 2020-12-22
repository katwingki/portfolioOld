import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Footer from './Footer';
import AboutMe from './AboutMe';
function Routers() {
  return (
    <div className='content'>
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/aboutme' component={AboutMe} />
      </Switch>
    </div>
  );
}

export default Routers;
