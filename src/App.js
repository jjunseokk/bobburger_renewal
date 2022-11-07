import './App.css';
import './Css/Navbar.css'
import './Css/MenuCard.css'
import './Css/Menu.css'
import './Css/Section.css'
import './Css/Loadmap.css'
import './Css/Footer.css'
import './Css/Bongousse.css'
import './Css/Founded.css'
import './Css/StartUpInquiry.css'
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Loadmap from './page/Loadmap';
import Menu from './page/Menu';
import Founded from './page/Founded';
import Service from './page/Service';
import Section from './component/Section';
import Bongousse from './page/Bongousse';
import Footer from './component/Footer';
import StartUpInquiry from './page/StartUpInquiry';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/'element={<Section/>}/>
        <Route path='/Menu' element={<Menu />} />
        <Route path='/Loadmap' element={<Loadmap />} />
        <Route path='/Bongousse' element={<Bongousse />} />
        <Route path='/founded' element={<Founded />} />
        <Route path='/StartUpInquiry' element={<StartUpInquiry />} />
        <Route path='/service' element={<Service />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
