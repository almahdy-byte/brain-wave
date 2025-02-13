
import './App.css';
import { NavBar } from './component/navBar';
import { Hero } from './component/hero';
import { ChatSmaprter } from './component/chatSmarter';
import { Collaboration } from './component/collaboration';
import { Services } from './component/services';
import { Pricing } from './component/pricing';
import { Working } from './component/working';
import { Footer } from './component/Footer';
const  App =()=> {
  return (
    <div className="App  position-relative ">
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
