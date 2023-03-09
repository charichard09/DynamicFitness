import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime(prevElapsedTime => prevElapsedTime + 10);
      }, 10);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(prevIsRunning => !prevIsRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  const formatTime = (time) => {
    // divide time by 60000 milliseconds (1 minute in milliseconds) and round down to get the number of minutes
    const minutes = Math.floor(time / 60000); 
    // use modulo operator to get the remainder after dividing time by 60000, then divide by 1000 milliseconds (1 second in milliseconds) and round down to get the number of seconds
    const seconds = Math.floor((time % 60000) / 1000);
    // use modulo operator to get the remainder after dividing time by 1000, then divide by 10 to get the number of milliseconds (rounded to 2 decimal places) 
    const milliseconds = (time % 1000) / 10; 
  
    // The padStart() method is used to ensure that each value has two digits, with leading zeros added if necessary.
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds
      .toFixed(0)
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <div>
      <div className="text-8xl justify-center flex">
        {formatTime(elapsedTime)}
      </div>
      <div className="justify-center flex">
        <button className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-4 mt-4 mb-1 ml-1  rounded" onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
        <button className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-1 px-4 mt-4 mb-1 ml-1  rounded" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;

