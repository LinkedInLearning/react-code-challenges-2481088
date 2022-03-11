export default function Color ({ hex, name }) {
  return (
    <button
      className='color-square'
      style={{ backgroundColor: hex }}
    >
      <h2>{name}</h2>
    </button>
  )
}
