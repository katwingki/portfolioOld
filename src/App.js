import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import Routers from './components/Router';
import Footer from './components/Footer';
// import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Router>
        {/* <ScrollToTop /> */}
        <Navbar />
        <Routers />
        <Footer />
      </Router>
    </>
  );
}

export default App;
