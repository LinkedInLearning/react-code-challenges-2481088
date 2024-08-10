import { useState } from "react"

export default function DogPics () {
  const [imageURL,setImageURL] = useState("https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4172.jpg");

  const onButtonClick = () => {
    try {
      fetch("https://dog.ceo/api/breeds/image/random").then((response) => {
        return response.json();
      }).then((data) => {
        setImageURL(data.message);
      })
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className='dog-pics'>
      <img src={imageURL} width="40%" height={400} style={{objectFit: "contain"}} />
      <button style={{cursor: "pointer"}} onClick={() => onButtonClick()}>🐶</button>
    </div>
  )
}
