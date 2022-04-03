import { useState } from 'react'
import WindowEvent from './window-event'

export default function ToggleWindowEvent () {
  const [windowEvent, setWindowEvent] = useState(false)
  return (
    <div>
      <button onClick={() => setWindowEvent(prevState => !prevState)}>Toggle Window Event</button>
      {windowEvent && <WindowEvent />}
    </div>
  )
}
