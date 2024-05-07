document.getElementById('moisture-info').innerText = 'Fetching data...';

// Example to update the content dynamically
// This would ideally be replaced with actual API calls to fetch moisture data
setInterval(() => {
  const moistureLevel = Math.random() * 100;  // Mock moisture level
  document.getElementById('moisture-info').innerText = `Current Moisture Level: ${moistureLevel.toFixed(2)}%`;
}, 1000);