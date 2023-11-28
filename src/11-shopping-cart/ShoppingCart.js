import { useState } from 'react'

const items = [{
  name: 'apple',
  price: 0.39
}, {
  name: 'banana',
  price: 0.79
}, {
  name: 'cherry tomatoes',
  price: 3.99
}]

function ShoppingCart () {
  const [cart, setCart] = useState([])

  function addToCart(item) {
    const itemIndex = cart.findIndex((cartItem) => cartItem.name === item.name);
    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity++;
      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          name: item.name,
          quantity: 1,
          price: item.price,
        },
      ]);
    }
  }

  function removeFromCart(item) {
    const itemIndex = cart.findIndex((cartItem) => cartItem.name === item.name);
    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      if (updatedCart[itemIndex].quantity > 1) {
        updatedCart[itemIndex].quantity--;
      } else {
        updatedCart.splice(itemIndex, 1);
      }
      setCart(updatedCart);
    }
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className='cart'>
        <div className='items'>
          <h2>Items</h2>
          {items.map(item => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={()=>{addToCart(item)}}>Add to Cart</button>
            </div>)
          )}
        </div>
        <div>
          <h2>Cart</h2>
          {cart.map(item => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>
                <button
                  onClick={() => {
                    removeFromCart(item)
                  }}
                >-</button>
                {item.quantity}
                <button 
                  onClick={() => {
                    addToCart(item)
                  }}
                >+</button>
              </p>
              <p>Subtotal: ${item.quantity * item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='total'>
        <h2>Total:           
          {cart.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2)}
        </h2>
      </div>
    </div>
  )
}

export default ShoppingCart
