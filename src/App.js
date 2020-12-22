import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Routers from './components/Router';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routers />
        <Footer />
      </Router>
    </>
  );
}

export default App;
