import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Hero from './Components/Hero';
import SocialSec from "./Components/SocialSec"
import About from "./Components/About"
import Tokenomics from "./Components/Tokenomics"
import Utility from "./Components/Utility"
import EcoSystem from "./Components/EcoSystem"
import News from './Components/News';
import Footer from "./Components/Footer"
import RoadMap from "./Components/RoadMap"

function App() {
  return (
    <>
      <Hero />
      <SocialSec />
      <About />
      <Tokenomics />
      <Utility />
      <EcoSystem />
      <RoadMap />
      <News />
      <SocialSec />
      <Footer />
    </>
  );
}

export default App;
