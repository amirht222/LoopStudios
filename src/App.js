import { Fragment } from 'react';
import Creations from './components/Creations';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <Fragment>
      <Hero />
      <Feature />
      <Creations />
      <Footer />
    </Fragment>
  );
}

export default App;
