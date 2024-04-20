import React, { useState, } from 'react';
import { ChromePicker } from 'react-color';
import * as C from './styles'

function ColorPicker({ onColorChange }) {
  const [color, setColor] = useState('');

  const handleChange = (selectedColor) => {
    setColor(selectedColor.hex);
    onColorChange(selectedColor.hex); // Passa a cor selecionada para o componente pai
  };

  return (
    <C.Container>
      <ChromePicker color={color} onChange={handleChange} />
      <p>Selected color: {color}</p>
    </C.Container>
  );
}

export default ColorPicker;
