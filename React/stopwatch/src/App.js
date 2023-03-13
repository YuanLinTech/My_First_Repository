import { useState, useRef } from 'react';

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  function handleReset(){
    clearInterval(intervalRef.current);
    setStartTime(Date.now());
    setNow(Date.now());
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart} style={{marginRight: 15}}>
        Start
      </button>
      <button onClick={handleStop} style={{marginRight: 15}}>
        Stop
      </button>
      <button onClick={handleReset} style={{marginRight: 15}}>
        Reset
      </button>
    </>
  );
}