import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Ahead from './pages/Ahead/Ahead';
import Customer from './pages/Customer/Customer';
import Pricing from './pages/Pricing/Pricing';
import Resources from './pages/Resources/Resources';

function App() {
  return (
    <div className="App">
      <div className="hh">
        <Header/>
      </div>
      
      <div className={window.localStorage.getItem('mode') == 'dark' ? 'dark routes' : 'routes'}>
        <Routes>
          <Route path='/' element={<Ahead/>}/>
          <Route path='/customer' element={<Customer/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/resources' element={<Resources/>}/>
        </Routes>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
