import logo from './logo.svg';
import './App.css';
import ColorPicker from './Components/ColorPicker';
import { useState } from 'react';

function App() {
  const [selectedColors, setSelectedColors] = useState(['#000']);
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Color Picker</h1>
      </header>
      <ColorPicker
        selectedColors={selectedColors}
        setSelectedColors={setSelectedColors}
      />
    </div>
  );
}

export default App;
