import React, { useState, useEffect } from 'react';
import FlowerBed from './components/FlowerBed';
import CircularProgress from './components/CircularProgress';

const TOTAL_BEDS = 4;  // Total number of flower beds

function App() {
  const [moistureData, setMoistureData] = useState(Array(TOTAL_BEDS).fill(null));
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [secondsSinceUpdate, setSecondsSinceUpdate] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/sensor-data');
        const data = await response.json();
        const values = data.value.split(',').map(item => {
          const matches = item.match(/(\d+\.\d+)/);
          return matches ? parseFloat(matches[0]) : null;
        });
        setMoistureData([...values, ...Array(TOTAL_BEDS - values.length).fill(null)]);
        setLastUpdate(Date.now());  // Reset last update time on successful data fetch
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    const updateInterval = setInterval(fetchData, 5000);
    return () => clearInterval(updateInterval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      setSecondsSinceUpdate((now - lastUpdate) / 1000);
    }, 100);  // Update every 0.1 seconds for smooth progress

    return () => clearInterval(timer);
  }, [lastUpdate]);  // Depend on lastUpdate to reset the timer

  return (
    <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'start', alignItems: 'center', backgroundColor: "slategray", height: "100vh", color: "orange" }}>
      <h1>Moisture Levels</h1>
      <div style={{display: 'flex', flexDirection:'row', alignItems:'center', height:'50px'}}>
        <p>Updated: {secondsSinceUpdate.toFixed(1)} seconds ago</p>
      <CircularProgress progress={secondsSinceUpdate * 20 % 100} />  {/* Adjust progress rate for 5 seconds */}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {moistureData.map((level, index) => (
          <FlowerBed key={index} index={index} moistureLevel={level} />
        ))}
      </div>
    </div>
  );
}

export default App;
