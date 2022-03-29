const initialState = {}

function reducer (state, action) {}

export default function SimpleCalculator () {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map(number => (
          <button key={number}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map(number => (
          <button key={number}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Actions</h2>
        <button>+</button>
        <button>-</button>
        <button>c</button>
      </div>
      <div><h2>Result:</h2></div>
    </div>
  )
}
