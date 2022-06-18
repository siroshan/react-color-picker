import React, { useState, useRef } from 'react';
import { ChromePicker } from 'react-color';
import RemoveIcon from '../Icons/RemoveIcon';
import AddIcon from '../Icons/AddIcon';

const ColorPicker = ({ selectedColors, setSelectedColors }) => {
  const [bgColor, setBgColor] = useState('#000');
  const [isShown, setIsShown] = useState(false);
  const addBtnRef = useRef();

  const onChangeHandler = ({ hex }, event) => {
    setBgColor(hex);
  };

  const onAddColorHandler = () => {
    if (selectedColors.indexOf(bgColor) === -1) {
      setSelectedColors((prev) => [...prev, bgColor]);
    }
  } 

  const onAddClickHandler = (e) => {
    e.preventDefault();
    isShown ? setIsShown(false) : setIsShown(true);
    if (isShown) {
      setIsShown(false);
      addBtnRef.current.classList.toggle('add-btn-active');
    } else {
      setIsShown(true);
      addBtnRef.current.classList.toggle('add-btn-active');
    }
  };

  const onRemoveClickHandler = (color) => {
    setSelectedColors(
      selectedColors.filter((selectedColor) => selectedColor !== color)
    );
  };

  const ColorRound = ({ color }) => (
    <div className="color-round-wrap">
      <button
        className="round-btn remove-btn"
        aria-label="remove color"
        onClick={() => onRemoveClickHandler(color)}
      >
        <RemoveIcon size={24} />
      </button>

      <div className="color-round" style={{ backgroundColor: color }}></div>
    </div>
  );

  return (
    <div className="custom-color-picker-wrap">
      {selectedColors.length > 0 &&
        selectedColors.map((color, i) => (
          <ColorRound key={color} color={color} />
        ))}
      <button
        ref={addBtnRef}
        className="round-btn add-btn"
        onClick={onAddClickHandler}
      >
        <AddIcon size={40} />
      </button>
      {isShown && (
        <div className='color-picker-wrap'>
          <ChromePicker
            color={bgColor}
            onChange={onChangeHandler}
          />
          <button className="color-add-btn" onClick={onAddColorHandler}>Add Color</button>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
