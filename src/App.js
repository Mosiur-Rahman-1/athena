import './App.css';
import About from './Componants/About/About';
import Hero from './Componants/Header/Hero/Hero';
import Navbar from './Componants/Header/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  );
}

export default App;
