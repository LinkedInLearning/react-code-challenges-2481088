import Color from './Color'

const colors = [{
  hex: '#91A6FF',
  name: 'Cornflower Blue'
},
{
  hex: '#FF88DC',
  name: 'Persian Pink'
},
{
  hex: '#80FF72',
  name: 'Screamin Green'
},
{
  hex: '#FF5154',
  name: 'Tart Orange'
}]

export default function ColorRenderer () {
  return (
    <div>
      <h2>
        Use the Color component to render each
        item in the colors array on the page!
      </h2>
      {colors.map((col)=>(
      <Color key ={col.hex} hex={col.hex} name={col.name}/>
      ))}
    </div>
  )
}
