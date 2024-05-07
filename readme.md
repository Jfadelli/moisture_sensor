# Plant Moisture Monitoring System

# Table of Contents
- [Plant Moisture Monitoring System](#plant-moisture-monitoring-system)
- [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Hardware Setup](#hardware-setup)
    - [Components Needed](#components-needed)
    - [Sensor Connection](#sensor-connection)
  - [Software Development](#software-development)
    - [Script Requirements](#script-requirements)
    - [Implementation](#implementation)
  - [Testing and Calibration](#testing-and-calibration)
  - [Additional Considerations](#additional-considerations)
  - [Future Enhancements](#future-enhancements)
- [Calibration of Moisture Sensor](#calibration-of-moisture-sensor)
  - [1. Prepare Your Test Environment](#1-prepare-your-test-environment)
  - [2. Setup Your Sensor](#2-setup-your-sensor)
  - [3. Record Sensor Readings](#3-record-sensor-readings)
  - [4. Analyze Data](#4-analyze-data)
  - [5. Implement in Software](#5-implement-in-software)
- [Setting Up Wi-Fi on Raspberry Pi](#setting-up-wi-fi-on-raspberry-pi)
  - [Overview](#overview-1)
  - [Prerequisites](#prerequisites)
  - [Steps for Models with Built-in Wi-Fi](#steps-for-models-with-built-in-wi-fi)
  - [Steps for Models without Built-in Wi-Fi](#steps-for-models-without-built-in-wi-fi)
  - [Recommended Wi-Fi Dongles](#recommended-wi-fi-dongles)
  - [Additional Tips](#additional-tips)
- [Setting Up Server and Front-End on Raspberry Pi](#setting-up-server-and-front-end-on-raspberry-pi)
  - [Overview](#overview-2)
  - [Prerequisites](#prerequisites-1)
  - [1. Install Node.js and npm](#1-install-nodejs-and-npm)
  - [2. Create a Node.js Project](#2-create-a-nodejs-project)
  - [3. Develop the Server](#3-develop-the-server)
  - [4. Set Up the Front-End](#4-set-up-the-front-end)
    - [Develop HTML](#develop-html)
    - [Develop CSS](#develop-css)
    - [Develop JavaScript](#develop-javascript)
  - [5. Running and Testing](#5-running-and-testing)
  - [Security Measures](#security-measures)
- [Front-End Setup for Plant Moisture Monitoring](#front-end-setup-for-plant-moisture-monitoring)
  - [Overview](#overview-3)
  - [Prerequisites](#prerequisites-2)
  - [1. Create React Application](#1-create-react-application)
  - [2. Implement the FlowerBed Component](#2-implement-the-flowerbed-component)
  - [3. Update the App Component](#3-update-the-app-component)
  - [4. Running the Application](#4-running-the-application)
  - [Security Measures](#security-measures-1)
- [Server Setup for Plant Moisture Monitoring](#server-setup-for-plant-moisture-monitoring)
  - [Overview](#overview-4)
  - [Prerequisites](#prerequisites-3)
  - [1. Initialize Node.js Project](#1-initialize-nodejs-project)
  - [2. Create Server File](#2-create-server-file)
  - [3. Running the Server](#3-running-the-server)
  - [4. Testing API Endpoints](#4-testing-api-endpoints)
  - [Security and Maintenance](#security-and-maintenance)
    - [Run the Python Script](#run-the-python-script)
  - [2. Modifying the Server to Handle Incoming Data](#2-modifying-the-server-to-handle-incoming-data)
    - [Extend Node.js Server to Accept POST Requests](#extend-nodejs-server-to-accept-post-requests)
- [Automating Git Pulls on Raspberry Pi](#automating-git-pulls-on-raspberry-pi)
  - [Overview](#overview-5)
  - [Prerequisites](#prerequisites-4)
  - [1. Install Git](#1-install-git)
  - [2. Clone Your Repository](#2-clone-your-repository)
  - [3. Create a Pull Script](#3-create-a-pull-script)
  - [4. Schedule the Script with Cron](#4-schedule-the-script-with-cron)
  - [Handling Merge Conflicts](#handling-merge-conflicts)
  - [Security Tips](#security-tips)

## Overview
This document provides a comprehensive guide to setting up a plant moisture monitoring system using a Raspberry Pi and a moisture sensor. The project aims to monitor the moisture levels of plants individually and display this information via terminal output.

[Jump to Table of Contents](#table-of-contents)

## Hardware Setup

### Components Needed
- Raspberry Pi
- Moisture Sensor
- Breadboard
- Connecting wires
- Resistors (if required)
- LEDs, switches, beepers, and buttons (optional for future expansion)
- Power supply for Raspberry Pi (ensure stability and adequacy)

### Sensor Connection
1. **Power Connection**: Connect the VCC pin of the moisture sensor to the 3.3V or 5V pin on the Raspberry Pi.
2. **Ground Connection**: Connect the GND pin of the moisture sensor to one of the ground (GND) pins on the Raspberry Pi.
3. **Signal Connection**: Connect the output pin of the moisture sensor to a GPIO pin on the Raspberry Pi.

[Jump to Table of Contents](#table-of-contents)

## Software Development

### Script Requirements
- Python script to read moisture levels from the sensor and output these readings to a terminal.

### Implementation
```python
import RPi.GPIO as GPIO
import time

# Configure GPIO mode
GPIO.setmode(GPIO.BCM)

# Initialize GPIO pin for sensor input
sensor_pin = 17  # Adjust based on actual GPIO pin used
GPIO.setup(sensor_pin, GPIO.IN)

try:
    while True:
        # Read sensor and display output
        moisture_status = GPIO.input(sensor_pin)
        print("Moisture Level: " + ("Wet" if moisture_status == GPIO.HIGH else "Dry"))
        time.sleep(1)  # Delay between readings
except KeyboardInterrupt:
    GPIO.cleanup()  # Clean up GPIO on CTRL+C exit
```

[Jump to Table of Contents](#table-of-contents)

## Testing and Calibration
1. **Run the Script**: Execute the Python script to start monitoring the moisture levels.
2. **Observe Output**: Check the terminal for changes in moisture levels to ensure the sensor and script are properly functioning.
3. **Sensor Calibration**: Depending on soil type, calibrate the sensor to accurately determine moisture levels.

[Jump to Table of Contents](#table-of-contents)

## Additional Considerations
- **Environmental Protection**: If the setup is near water or in high-humidity areas, consider waterproofing the electronics or using protective enclosures.
- **Error Handling**: Enhance the script to handle potential errors more robustly for improved reliability.
- **Sensor Positioning**: Ensure the sensor is correctly positioned in the soil to get accurate readings and avoid damage.
- **Safety Precautions**: Secure all connections and prevent potential short circuits, especially when expanding the system.

[Jump to Table of Contents](#table-of-contents)

## Future Enhancements
- **Data Logging**: Incorporate data logging to track moisture levels over time.
- **Notification Alerts**: Implement notification alerts via email or SMS when moisture levels fall outside predefined thresholds.
- **Automated Watering**: Consider automating the watering process based on the moisture level readings.

[Jump to Table of Contents](#table-of-contents)

# Calibration of Moisture Sensor

## 1. Prepare Your Test Environment
- **Soil Samples**: Use the same type of soil in several pots to ensure consistency.
- **Moisture Levels**: Water each pot to different levels: dry, moist, and wet.

[Jump to Table of Contents

](#table-of-contents)

## 2. Setup Your Sensor
- **Insert the Sensor**: Ensure the sensor is inserted at the same depth in each pot for consistent readings.

[Jump to Table of Contents](#table-of-contents)

## 3. Record Sensor Readings
- **Take Readings**: Record the sensor output from each pot using the Raspberry Pi. Repeat to establish reliable averages.
- **Document Readings**: Note these readings along with the corresponding moisture conditions.

[Jump to Table of Contents](#table-of-contents)

## 4. Analyze Data
- **Plot the Data**: Create a graph with moisture conditions on the x-axis and sensor readings on the y-axis.
- **Define Thresholds**: Identify threshold values for different moisture levels based on the graph.

[Jump to Table of Contents](#table-of-contents)

## 5. Implement in Software
- **Code Example**:
  ```python
  dry_threshold = 300  # Adjust to your actual dry threshold value
  wet_threshold = 700  # Adjust to your actual wet threshold value

  moisture_reading = GPIO.input(sensor_pin)  # Sensor reading

  if moisture_reading < dry_threshold:
      print("Soil is dry")
  elif moisture_reading > wet_threshold:
      print("Soil is wet")
  else:
      print("Soil is moist")
  ```

[Jump to Table of Contents](#table-of-contents)


# Setting Up Wi-Fi on Raspberry Pi

## Overview
This section provides instructions for connecting your Raspberry Pi to a Wi-Fi network. Steps vary depending on whether your Raspberry Pi model has built-in Wi-Fi capabilities.

## Prerequisites
- Raspberry Pi with or without built-in Wi-Fi.
- Wi-Fi network accessibility.
- (If no built-in Wi-Fi) A compatible Wi-Fi USB dongle.

## Steps for Models with Built-in Wi-Fi
Raspberry Pi models 3 and later, including Raspberry Pi Zero W and Raspberry Pi 4, come with built-in Wi-Fi. Follow these steps to connect to your Wi-Fi network:

1. **Access Wi-Fi Settings**:
   - **Desktop**: Click on the Wi-Fi icon in the upper right corner of the screen. Select your network, enter the password, and connect.
   - **Command Line**:
     ```bash
     sudo raspi-config
     ```
     Navigate to `Network Options > Wi-Fi`, enter your SSID (network name), and password, then select `Finish` to save the settings.

## Steps for Models without Built-in Wi-Fi
For older models such as Raspberry Pi 1 and Raspberry Pi Zero (not Zero W), a Wi-Fi dongle is required:

1. **Install Wi-Fi Dongle**:
   - Insert the Wi-Fi dongle into a free USB port on your Raspberry Pi.

2. **Install Necessary Drivers** (if not automatically recognized by the OS):
   ```bash
   sudo apt-get update
   sudo apt-get install firmware-realtek
   ```
   Replace `firmware-realtek` with the appropriate driver package for your dongle.

3. **Connect to Wi-Fi**:
   - **Desktop**: Use the Wi-Fi icon in the taskbar to connect as described above.
   - **Command Line**:
     ```bash
     sudo raspi-config
     ```
     Go to `Network Options > Wi-Fi`, provide your network details, and confirm.

## Recommended Wi-Fi Dongles
- **CanaKit Raspberry Pi WiFi Wireless Adapter/Dongle**
- **Edimax EW-7811Un Wi-Fi USB Adapter**

## Additional Tips
- Ensure that your Raspberry Pi has a sufficient power supply, especially when using USB dongles, as they might draw additional power.
- Consider network security measures such as setting up firewall rules if your device will be accessible over the internet.

[Jump to Table of Contents](#table-of-contents)

# Setting Up Server and Front-End on Raspberry Pi

## Overview
This guide provides instructions on setting up both the server and front-end interface directly on a Raspberry Pi for monitoring plant moisture levels. It assumes that the Raspberry Pi is equipped with a suitable OS, such as Raspberry Pi OS, and has network connectivity.

## Prerequisites
- Raspberry Pi with Raspberry Pi OS installed.
- Internet connection on Raspberry Pi.
- Basic knowledge of Node.js and web technologies (HTML, CSS, JavaScript).

## 1. Install Node.js and npm
Ensure Node.js and npm (node package manager) are installed on your Raspberry Pi to run the server and manage packages.
```bash
sudo apt-get update
sudo apt-get install nodejs npm
```

## 2. Create a Node.js Project
Set up a new Node.js project and install Express, a minimal and flexible Node.js web application framework.
```bash
mkdir moisture-server
cd moisture-server
npm init -y
npm install express
```

## 3. Develop the Server
Create a basic server using Express to handle HTTP requests and serve the front-end files.
```javascript
// File: app.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));  // Serve static files from 'public' directory

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
```

## 4. Set Up the Front-End
Create a directory for the front-end files and develop the HTML, CSS, and JavaScript to display the moisture data.
```bash
mkdir public
cd public
touch index.html styles.css scripts.js
```

### Develop HTML
```html
<!-- File: index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plant Moisture Monitoring</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Plant Moisture Levels</h1>
    <div id="moisture-info"></div>
    <script src="scripts.js"></script>
</body>
</html>
```

### Develop CSS
```css
/* File: styles.css */
body {
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 20px;
}
```

### Develop JavaScript
```javascript
/* File: scripts.js */
document.getElementById('moisture-info').innerText = 'Fetching data...';

// Example to update the content dynamically
// This would ideally be replaced with actual API calls to fetch moisture data
setInterval(() => {
  const moistureLevel = Math.random() * 100;  // Mock moisture level
  document.getElementById('moisture-info').innerText = `Current Moisture Level: ${moistureLevel.toFixed(2)}%`;
}, 1000);
```

## 5. Running and Testing
Start your server by running the following command and then visit `http://localhost:3000` in a web browser to view the interface.
```bash
node app.js
```

## Security Measures
- Ensure the Raspberry Pi's software is up-to-date.
- Consider implementing authentication and HTTPS if the server will be accessible over the Internet.

[Jump to Table of Contents](#table-of-contents)

# Front-End Setup for Plant Moisture Monitoring

## Overview
This document outlines the process for setting up a front-end interface using React to monitor and display the moisture levels of five different flower beds. Each flower bed's moisture level is represented by a colored circle that changes based on the moisture status: red for very dry, yellow for moderate, green for ideal, and orange for too wet.

## Prerequisites
- Node.js and npm installed on the development machine.
- Basic familiarity with React and JavaScript.

## 1. Create React Application
Initialize a new React application which will serve as the front-end for the moisture monitoring system.
```bash
npx create-react-app moisture-monitor
cd moisture-monitor
```

## 2. Implement the FlowerBed Component
Create a `FlowerBed.js` file to define a React component that visually represents the moisture status of a single flower bed.
```javascript
// File: src/FlowerBed.js
import React from 'react';

const FlowerBed = ({ moistureLevel }) => {
  const getColor = (level) => {
    if (level < 20) return 'red';    // Needs water badly
    if (level < 40) return 'yellow'; // Moderate
    if (level < 60) return 'green';  // Excellent
    return 'orange';                // Too wet
  };

  return (
    <div style={{
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      backgroundColor: getColor(moistureLevel),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '20px',
      margin: '10px'
    }}>
      {moistureLevel}%
    </div>
  );
};

export default FlowerBed;
```

## 3. Update the App Component
Modify the `App.js` to manage the state of moisture levels and render multiple `FlowerBed` components.
```javascript
// File: src/App.js
import React, { useState, useEffect } from 'react';
import FlowerBed from './FlowerBed';

const App = () => {
  const [moistureLevels, setMoistureLevels] = useState([10, 30, 50, 70, 90]);

  // Placeholder for fetching real data
  useEffect(() => {
    // Simulate fetching data periodically
    const interval = setInterval(() => {
      setMoistureLevels(moistureLevels.map(level =>
        Math.max(0, Math.min(100, level + (Math.random() * 20 - 10)))
      ));
    }, 5000);
    return () => clearInterval(interval);
  }, [moistureLevels]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {moistureLevels.map((level, index) => (
        <FlowerBed key={index} moistureLevel={level} />
      ))}
    </div>
  );
};

export default App;
```

## 4. Running the Application
Launch the application to view the interface and ensure that everything is functioning as expected.
```bash
npm start
```
This command will start the development server and automatically open the application in your default web browser.

## Security Measures
- Ensure all dependencies are up-to-date to mitigate vulnerabilities.
- Consider implementing proper security measures if the application will be deployed publicly.

[Jump to Table of Contents](#table-of-contents)

# Server Setup for Plant Moisture Monitoring

## Overview
This guide details the steps to create a Node.js server using Express to manage and provide API endpoints for retrieving moisture data for different flower beds. This data can be displayed on the React front-end.

## Prerequisites
- Node.js and npm installed on the server machine (Raspberry Pi).
- Basic knowledge of Node.js and the Express framework.

## 1. Initialize Node.js Project
Create a new directory and initialize a Node.js project with Express as a dependency.
```bash
mkdir moisture-server
cd moisture-server
npm init -y
npm install express
```

## 2. Create Server File
Set up the basic structure of the server with predefined moisture data for simplicity.

```javascript
// File: index.js
const express = require('express');
const app = express();
const port = 3000;

// Simulated data for moisture levels
let moistureData = [
  { id: 1, level: 25 },
  { id: 2, level: 35 },
  { id: 3, level: 45 },
  { id: 4, level: 55 },
  { id: 5, level: 65 }
];

// API endpoint to get all moisture levels
app.get('/api/moisture', (req, res) => {
  res.json(moistureData);
});

// API endpoint to get a single flower bed's moisture level
app.get('/api/moisture/:id', (req, res) => {
  const flowerBed = moistureData.find(bed => bed.id === parseInt(req.params.id));
  if (!flowerBed) res.status(404).send('Flower bed not found');
  else res.json(flowerBed);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
```

## 3. Running the Server
Navigate to the server directory and run the server to start listening for API requests.
```bash
node index.js
```

## 4. Testing API Endpoints
You can test your API endpoints using tools like Postman or through the browser:
- To get all moisture levels: `http://localhost:3000/api/moisture`
- To get the moisture level for a specific flower bed (e.g., ID 1): `http://localhost:3000/api/moisture/1`

## Security and Maintenance
- Ensure that the Node.js and all npm packages are kept up-to-date.
- Consider implementing additional security measures such as HTTPS, especially if the server will be accessible over the Internet.
- Monitor the server performance and adjust as necessary to handle the workload.

[Jump to Table of Contents](#table-of-contents)

Certainly! Here's the detailed technical guide formatted in Markdown for integrating sensor data with your server, ensuring real-time interaction between your Raspberry Pi sensors and the Node.js server:

```markdown
# Integrating Sensor Data with Server

## Overview
This guide details how to enable real-time interaction between the moisture sensors connected to a Raspberry Pi and a Node.js server. It covers both hardware interfacing and software integration to manage the sensor data effectively.

## Prerequisites
- Raspberry Pi with GPIO pins set up for moisture sensors.
- Node.js and npm installed on the Raspberry Pi.
- Python installed if opting for a Python script to handle GPIO interaction.

## 1. Sensor Data Reading Script

### Using Python to Read GPIO
Create a Python script that continuously reads moisture levels from sensors connected to the Raspberry Pi’s GPIO pins and sends this data to the server.

```python
# File: read_sensors.py
import RPi.GPIO as GPIO
import time
import requests

def read_moisture_sensor(channel):
    # Dummy function to simulate reading from a sensor
    return GPIO.input(channel)

def send_data_to_server(moisture_level):
    url = "http://localhost:3000/api/moisture"
    data = {'level': moisture_level}
    response = requests.post(url, json=data)
    print(f"Data posted: {response.text}")

channel = 17
GPIO.setmode(GPIO.BCM)
GPIO.setup(channel, GPIO.IN)

try:
    while True:
        level = read_moisture_sensor(channel)
        send_data_to_server(level)
        time.sleep(10)  # Delay between readings
except KeyboardInterrupt:
    GPIO.cleanup()
```

### Run the Python Script
Execute the script to start reading from the sensors and sending data:
```bash
python read_sensors.py
```

## 2. Modifying the Server to Handle Incoming Data

### Extend Node.js Server to Accept POST Requests
Adjust your Node.js server to handle POST requests that update moisture data received from the sensors.

```javascript
// File: index.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json()); // Middleware to parse JSON bodies

let moistureData = [
  { id: 1, level: 25 },
  { id: 2, level: 35 },
  { id: 3, level: 45},
]
```
[Jump to Table of Contents](#table-of-contents)

# Automating Git Pulls on Raspberry Pi

## Overview
This document describes how to set up your Raspberry Pi to automatically pull changes from a Git repository. This is useful for deploying updates automatically to your Raspberry Pi without manual file transfers.

## Prerequisites
- Git installed on the Raspberry Pi.
- SSH key configured for GitHub if the repository is private.

## 1. Install Git
Ensure Git is installed on your Raspberry Pi:
```bash
sudo apt-get install git
```

## 2. Clone Your Repository
Clone your Git repository onto your Raspberry Pi:
```bash
git clone <repository-url>
cd <repository-directory>
```
Replace `<repository-url>` with your repository's URL and `<repository-directory>` with the directory name.

## 3. Create a Pull Script
Create a script to pull updates from your Git repository:
```bash
# File: git-pull.sh
#!/bin/bash
cd /path/to/your/repository
git pull origin main
```
Ensure to replace `/path/to/your/repository` with the actual path and `main` with your branch name if different.

Make the script executable:
```bash
chmod +x git-pull.sh
```

## 4. Schedule the Script with Cron
Use `cron` to schedule your script to run at regular intervals. Here's how to edit your crontab:
```bash
crontab -e
```
Add the following line to execute the script every hour:
```cron
0 * * * * /path/to/git-pull.sh
```

## Handling Merge Conflicts
Note: This setup assumes no merge conflicts or other manual interventions are necessary. If your local repository may change, consider more advanced scripts that handle conflicts or stash changes.

## Security Tips
- Keep your Raspberry Pi and its software up to date.
- Securely store SSH keys and other sensitive information.
- 
[Jump to Table of Contents](#table-of-contents)

