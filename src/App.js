
import './App.css';
import { NavBar } from './main_component/navBar';
import { Hero } from './main_component/hero';
import { ChatSmaprter } from './main_component/chatSmarter';
import { Collaboration } from './main_component/colaboration';
import { Services } from './main_component/services';
import { Pricing } from './main_component/pricing';
import { Working } from './main_component/working';
import { Footer } from './main_component/Footer';
const  App =()=> {
  return (
    <div className="App overflow-hidden position-relative">
      <div className='shadow opacity-50 position-absolute top-50 start-50 translate-middle w-100 h-100 '></div>
      <NavBar/>
      <Hero/>
      <ChatSmaprter/>
      <Collaboration/>
      <Services />
      <Pricing/>
      <Working/>
      <Footer/>
    </div>
  );
}

export default App;
