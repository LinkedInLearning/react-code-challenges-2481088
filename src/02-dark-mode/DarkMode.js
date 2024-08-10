import { useState } from "react"

export default function DarkMode () {
  const [isLightMode,setLightMode] = useState(true);
  return (
    <div className='page' style={{backgroundColor: isLightMode ? "#FFF" : "#000"}}>
      <button className='dark-mode-button' onClick={() => setLightMode(false)}>Dark Mode</button>
      <button className='light-mode-button' onClick={() => setLightMode(true)}>Light Mode</button>
    </div>
  )
}
