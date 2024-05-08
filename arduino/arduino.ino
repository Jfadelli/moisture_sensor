    void setup() {
  // Start the serial communication
  Serial.begin(9600);
}

// removed, see notes below at same timestamp
// Define threshold variablexs
// const float highMoistureThreshold = 90.0; // Threshold for high moisture warning
// const float lowMoistureThreshold = 30.0;  // Threshold for low moisture warning

unsigned long lastPrintTime = 0;  // Track the last print time for all sensors

void loop() {
  int moistureValue1 = analogRead(A0);  // Read moisture sensor on pin A0
  int moistureValue2 = analogRead(A1);  // Read moisture sensor on pin A1
  int moistureValue3 = analogRead(A2);  // Read moisture sensor on pin A2
  int moistureValue4 = analogRead(A3);  // Read moisture sensor on pin A3

  // Convert to percentage
  float moisturePercent1 = 100 - (moistureValue1 / 10.23);
  float moisturePercent2 = 100 - (moistureValue2 / 10.23);
  float moisturePercent3 = 100 - (moistureValue3 / 10.23);
  float moisturePercent4 = 100 - (moistureValue4 / 10.23);

  // Print all sensor readings and a timestamp every 5 seconds
  if (millis() - lastPrintTime >= 5000) {
    Serial.print(millis());
    Serial.print("ms - ");
    Serial.print("S1: ");
    Serial.print(moisturePercent1);
    Serial.print("%, S2: ");
  
    Serial.print(moisturePercent2);
    Serial.print("%, S3: ");
    Serial.print(moisturePercent3);
    Serial.print("%, S4: ");
    Serial.print(moisturePercent4);
    Serial.println("%");
    lastPrintTime = millis();  // Update the last print time
  }

  // Check each sensor for moisture level and warn if necessary
  // checkMoistureLevel("Sensor 1", moisturePercent1);
  // checkMoistureLevel("Sensor 2", moisturePercent2);
  // checkMoistureLevel("Sensor 3", moisturePercent3);
  // checkMoistureLevel("Sensor 4", moisturePercent4);

  delay(1000);  // Delay 0.5 seconds before the next loop
}

// this was removed because it was interfering with the expected outputs from the Front end... 
// void checkMoistureLevel(String sensorName, float moisturePercent) {
//   if (moisturePercent > highMoistureThreshold) {
//     Serial.print(millis());
//     Serial.print("ms - ");
//     Serial.print(sensorName);
//     Serial.print(": High moisture warning at ");
//     Serial.print(moisturePercent);
//     Serial.println("%");
//   }
//   else if (moisturePercent < lowMoistureThreshold) {
//     Serial.print(millis());
//     Serial.print("ms - ");
//     Serial.print(sensorName);
//     Serial.print(": Low moisture warning at ");
//     Serial.print(moisturePercent);
//     Serial.println("%");
//   }
// }
