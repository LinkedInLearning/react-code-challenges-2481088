import { useState } from 'react'

export default function Timer () {
  const [time, setTime] = useState(100)
  return (
    <div>
      <h1>Time Remaining</h1>
      <h2>{time}</h2>
    </div>
  )
}
