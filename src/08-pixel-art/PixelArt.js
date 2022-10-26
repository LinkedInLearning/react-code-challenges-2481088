import { createContext, useContext, useEffect, useState } from "react"

const ColorContext = createContext({});

function ColorPicker () {
  const colors = ['red', 'blue', 'yellow', 'green', 'black', 'white', 'purple']
  const {currentColor, setCurrentColor} = useContext(ColorContext);
  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map(color => 
        {
          const btnStyle = { 
            backgroundColor: color,
            border: currentColor === color ? '2px solid black' : '2px solid #ccc'
          };
          return <button 
                    key={color} 
                    style={btnStyle}
                    onClick={() => setCurrentColor(color)} />
        }
      )}
    </div>
  )
}

function Pixel () {
  const {currentColor, setCurrentColor} = useContext(ColorContext);
  
  const [thisColor, setThisColor] = useState('lightGrey');

  const UseSelectedColor = currentColor => {
    if (currentColor) {
      setThisColor(currentColor);
    }
  }

  useEffect(() => setCurrentColor(null), [thisColor]);
  
  const theStyle = {
    backgroundColor: thisColor
  };

  const cssClass = `pixel ${!currentColor ? 'disabled' : 'active'}`

  return <div className={cssClass} style={theStyle} onClick={() => UseSelectedColor(currentColor)} />
}

function Pixels () {
  const pixels = []
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />)
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', width: '210px', margin: '0 auto' }}>
      {pixels}
    </div>
  )
}

export default function PixelArt () {
  const [currentColor, setCurrentColor] = useState(null);
  return (
    <ColorContext.Provider value={{currentColor, setCurrentColor}}>
      <ColorPicker />
      <Pixels />
    </ColorContext.Provider>
  )
}
