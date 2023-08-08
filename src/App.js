import logo from './logo.svg';
import './App.css';
import AsideBar from './components/AsideBar';
import MainComp from './components/MainComp';
import './components/style.css';
import { useState } from 'react';
function App() {
  const [showAside,setShowAside] = useState(false);
  return (
    <div className="App">
      <AsideBar setShowAside={setShowAside} showAside={showAside}  />
      <MainComp setShowAside={setShowAside} />
    </div>
  );
}

export default App;
