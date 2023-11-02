import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from 'react-router-dom';
import CoreStrategies from './Components/CoreStrategies';
import TokenSection from './Components/TokenSection';
import Supply from './Components/Supply';
import UseCaseStrategies from './Components/UseCaseStrategies';
import EcosystemPartners from './Components/EcosystemPartners';
import Header from './Components/Header';
import StrechGains from './Components/StrechGains';
import Team from './Components/Team';
import EERoadmap from './Components/EERoadmap';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <StrechGains />
                <CoreStrategies/>
        <TokenSection/>
        <Supply/>
        <UseCaseStrategies/>  
                <Team/>
        <EcosystemPartners/>
        <EERoadmap />
        <ContactUs/>
        <Footer/>
      </BrowserRouter>
      
      
    </>
  );
}

export default App;
