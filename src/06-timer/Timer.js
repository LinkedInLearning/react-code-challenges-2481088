import { useState, useEffect } from 'react'

export default function Timer () {
  const [time, setTime] = useState(60)
  useEffect(() => {
    const decrementTime = () => setTime(prevTime => prevTime - 1)
    setInterval(decrementTime, 1000)
    return () => {
      clearInterval(decrementTime)
    }
  }, [])
  return (
    <div>
      <h1>Time Remaining</h1>
      <h2>{time}</h2>
    </div>
  )
}
