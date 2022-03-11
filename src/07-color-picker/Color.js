export default function Color ({ hex, name, setBackgroundColor }) {
  return (
    <button
      className='color-square'
      style={{ backgroundColor: hex }}
      onClick={() => setBackgroundColor(hex)}
    >
      <h2>{name}</h2>
    </button>
  )
}
