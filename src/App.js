import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState(""); 
  useEffect(()=> {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    fetch("https://adsfa-mu.vercel.app/", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setValue(result);
      })
      .catch((error) => console.error(error));
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        my name is avinash
        <p>
          { value }
        </p>
      </header>
    </div>
  );
}

export default App;
