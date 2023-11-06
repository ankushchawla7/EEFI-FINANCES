import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import CoreStrategies from './Components/CoreStrategies';
import TokenSection from './Components/TokenSection';
import Supply from './Components/Supply';
import UseCaseStrategies from './Components/UseCaseStrategies';
import EcosystemPartners from './Components/EcosystemPartners';
import StrechGains from './Components/StrechGains';
import Team from './Components/Team';
import EERoadmap from './Components/EERoadmap';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import Home from './Components/Home';

function App() {
  
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/StrechGains' element={<StrechGains />} />
          <Route path='/CoreStrategies' element={<CoreStrategies/>} />
          <Route path='/TokenSection' element={<TokenSection/>} />
          <Route path='/Supply' element={<Supply/>} />
          <Route path='/UseCaseStrategies' element={<UseCaseStrategies/>} />
          <Route path='/Team' element={<Team/>} />
          <Route path='/EcosystemPartners' element={<EcosystemPartners/>} />
          <Route path='/EERoadmap' element={<EERoadmap />} />
          <Route path='/ContactUs' element={<ContactUs/>} />
          <Route path='/Footer' element={ <Footer />} />
          

          
                
        
        

         
          </Routes>
      </BrowserRouter>
      
      
    </>
  );
}

export default App;
