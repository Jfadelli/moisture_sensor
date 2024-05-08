import React, { useState, useEffect } from 'react';

const FlowerBed = ({ moistureLevel, index }) => {
  const [plant, setPlant] = useState('');
  const plants = ["Strawberries", "Carrots", "Tomatoes", "Lettuce", "Cucumbers"];
  plants.unshift("Plant 1", "Plant 2", "Plant 3", "Plant 4")
  useEffect(() => {
    const savedPlant = localStorage.getItem(`flowerbed-${index}`);
    if (savedPlant) {
      setPlant(savedPlant);
    }
  }, [index]);

  const handlePlantChange = (e) => {
    const selectedPlant = e.target.value;
    setPlant(selectedPlant);
    localStorage.setItem(`flowerbed-${index}`, selectedPlant);
  };

  const getColor = (level) => {
    if (level < 20) return 'red';
    if (level < 40) return 'yellow';
    if (level < 60) return 'green';
    return 'orange';
  };

  return (
    <div style={{
      width: '120px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '10px',
      padding: '10px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        backgroundColor: getColor(moistureLevel),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '20px'
      }}>
        {moistureLevel}%
      </div>
      <select value={plant} onChange={handlePlantChange} style={{
        marginTop: '10px',
        padding: '5px 10px',
        borderRadius: '5px',
        borderColor: 'gray',
        cursor: 'pointer',
        outline: 'none'
      }}>
        <option value="">Select a plant</option>
        {plants.map(plantOption => (
          <option key={plantOption} value={plantOption}>{plantOption}</option>
        ))}
      </select>
    </div>
  );
};

export default FlowerBed;
