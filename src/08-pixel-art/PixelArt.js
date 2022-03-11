import { createContext, useContext, useState } from 'react'

const ColorContext = createContext({
  color: 'lightGrey',
  setColor: () => {}
})

function ColorPicker () {
  const { setColor } = useContext(ColorContext)

  const colors = ['red', 'blue', 'yellow', 'green', 'black', 'white', 'purple']
  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map(color => (
        <button
          key={color}
          style={{ backgroundColor: color }}
          onClick={() => setColor(color)}
        />))}
    </div>
  )
}

function Pixel () {
  const { color } = useContext(ColorContext)
  const [pixelColor, setPixelColor] = useState('lightGrey')

  return <button onClick={() => setPixelColor(color)} style={{ height: '20px', width: '20px', backgroundColor: pixelColor, margin: '1px' }} />
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
  const [color, setColor] = useState('lightGrey')

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      <ColorPicker />
      <Pixels />
    </ColorContext.Provider>
  )
}
