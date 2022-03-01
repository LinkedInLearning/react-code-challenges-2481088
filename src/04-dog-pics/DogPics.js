import { useEffect, useState } from 'react'

const getDogPic = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random')
  const dog = await response.json()
  return dog.message
}

export default function DogPics () {
  const [dogPic, setDogPic] = useState('')

  useEffect(() => {
    const getDog = async () => setDogPic(await getDogPic())
    getDog()
  }, [])

  return (
    <div className='dog-pics'>
      <img src={dogPic} />
      <button onClick={async e => setDogPic(await getDogPic())}>🐶</button>
    </div>
  )
}
