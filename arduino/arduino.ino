    void setup() {
  // Start the serial communication
  Serial.begin(9600);
}

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

  delay(1000);  // Delay 0.5 seconds before the next loop
}