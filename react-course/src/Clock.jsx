import React, { useEffect, useState } from 'react';

function Clock({}) {
  const [color, setColor] = useState('red');
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer); // Cleanup
  }, []);

  return (
    <div>
      <h4 style={{ color }}>Digital Clock in React JS: {time}</h4>
      <select onChange={(event) => setColor(event.target.value)} value={color}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="pink">Pink</option>
        <option value="green">Green</option>
      </select>
    </div>
  );
}

export default Clock;
