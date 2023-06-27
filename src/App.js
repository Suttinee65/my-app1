import './App.css';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function App() {
  const [num, setNum] = useState(0);  
  return (
    <div className="App">
      <Header />
      <div className="MyContent">
        <h2>{num}</h2>
        <button onClick={()=>setNum(num+1)}>เพิ่ม</button>
        <button onClick={()=>setNum(num-1)}>ลด</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;