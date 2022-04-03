import { useEffect } from 'react/cjs/react.development'

export default function WindowEvent () {
  useEffect(() => {
    const doubleClick = () => alert('mouse pressed')

    window.addEventListener('dblclick', doubleClick)

    return () => window.removeEventListener('dblclick', doubleClick)
  }, [])
  return (
    <h2>Window event is active</h2>
  )
}
