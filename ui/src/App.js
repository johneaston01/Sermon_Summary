import logo from './logo.svg';
import './App.css';
import Header from './containers/header/header';
import TestDropdown from './containers/Dropdown';
import { Switch, Routes, Route } from 'react-router-dom';
import LandingPage from './containers/landing/landingPage';
import About from './containers/about/About';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <TestDropdown/> */}
      <Routes>
        <Route path="/" exact element={<LandingPage />}/>
        <Route path="/about" element={<About />} />

      </Routes>
    </div>
  );
}

export default App;
