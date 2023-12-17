import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the seconds state every second
      setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <p>Resend in : {seconds} seconds</p>
    </div>
  );
};

export default Timer;
