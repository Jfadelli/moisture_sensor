import React from 'react';

function CircularProgress({ progress }) {
  const radius = 10;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress % 100) / 100 * circumference;

  return (
    <svg width="70" height="70">
      <circle cx="35" cy="35" r={radius} fill="transparent" stroke="slategray" strokeWidth="5" />
      <circle cx="35" cy="35" r={radius} fill="transparent" stroke="orange" strokeWidth="5"
        strokeDasharray={circumference} strokeDashoffset={offset} />
    </svg>
  );
}

export default CircularProgress;
