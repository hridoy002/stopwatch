import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [watchOn, setWatchOn] = useState(false);
  useEffect(() => {
    let interval = null;
    if (watchOn) {
      interval = setInterval(() => {
        setTime(previous => previous + 10)
      }, 10)
    }
    else {
      clearInterval(interval);
    }

    return () => clearInterval(interval)
  }, [watchOn])
  return (
    <div className="App">
      <div className="stopwatch">
        <div className='watch'>
          <div className='number'>
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + (time / 10) % 100).slice(-2)}</span>
          </div>
        </div>
        <div className='btn'>
          <button onClick={() => setWatchOn(true)}>Start</button>
          <button onClick={() => setWatchOn(false)}>Pause</button>
          {/* <button onClick={() => setWatchOn(true)}>Resume</button> */}
          <button onClick={() => setTime(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
