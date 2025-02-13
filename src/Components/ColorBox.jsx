import React, { useState } from 'react';

function ColorBox({ initialColor = '#000000', colorOptions = [] }) {
  const [color, setColor] = useState(initialColor);

  const randomColor = () => {
    if (colorOptions.length > 0) {
      return colorOptions[Math.floor(Math.random() * colorOptions.length)];
    }
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: color,
          margin: '0 auto',
          border: '1px solid #000',
        }}
      ></div>
      <button onClick={() => setColor(randomColor())}>Changer de couleur</button>
    </div>
  );
}

export default  ColorBox;
