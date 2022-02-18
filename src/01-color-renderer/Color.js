export default function Color ({ hex, name }) {
  return (
    <div
      className='color-square' style={{ backgroundColor: hex }}
    >
      <h2>{name}</h2>
    </div>
  )
}
