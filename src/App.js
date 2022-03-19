import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Components/Menubar/Menubar';
import AllProducts from './Components/AllProducts/AllProducts';
import { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [count, setCount] = useState(0);

  const setCardCount = () => setCount(count + 1)

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div className="App container">
      <Menubar count={count}></Menubar>
      <AllProducts setCardCount={setCardCount}></AllProducts>
    </div>
  );
}

export default App;
