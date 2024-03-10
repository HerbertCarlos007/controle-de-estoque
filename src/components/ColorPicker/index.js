import React, { useState, } from 'react';
import { ChromePicker } from 'react-color';
import * as C from './styles'

function ColorPicker() {
  const [color, setColor] = useState('');

  const handleChange = (selectedColor) => {
    setColor(selectedColor.hex);
    console.log(color)
  };
  
  

  return (
    <C.Container>
      <ChromePicker color={color} onChange={handleChange} />
      <p>Selected color: {color}</p>
    </C.Container>
  );
}

export default ColorPicker;
