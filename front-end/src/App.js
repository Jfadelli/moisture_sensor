import React, { useState, useEffect } from 'react';
import FlowerBed from './components/FlowerBed';

const TOTAL_BEDS = 4; // Total number of flower beds

function App() {
  const [moistureData, setMoistureData] = useState(Array(TOTAL_BEDS).fill(null)); // Initialize with null for each bed

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/sensor-data');
        const data = await response.json();
        const values = data.value.split(',').map(item => {
          const matches = item.match(/(\d+\.\d+)/);
          return matches ? parseFloat(matches[0]) : null;
        });
        // Ensure the array has entries for all beds even if some data is missing
        setMoistureData([...values, ...Array(TOTAL_BEDS - values.length).fill(null)]);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    const interval = setInterval(fetchData, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{display:'flex', flexDirection:"column", justifyContent: 'start', alignItems:'center', backgroundColor:"slategray", height:"100vh", color:"orange"    }}>
      <h1>Moisture Levels</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {moistureData.map((level, index) => (
          <FlowerBed key={index} index={index} moistureLevel={level} />
        ))}
      </div>
    </div>
  );
}

export default App;
