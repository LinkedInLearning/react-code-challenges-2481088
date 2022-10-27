import { useReducer } from "react";
import { calculatorReducer, initialState } from "./CalculatorReducer";

export default function SimpleCalculator () {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', ' ', '0', ''];
  const methods = ['+', '-', '/', '*'];

  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const handleNumberClick = number => {
    const { displayNumber, target } = state;
    dispatch({ type: target, value: displayNumber + number })
  };

  const handleClearClick = () => {
    dispatch({ type: "CLEAR" })
  }

  const handleMethodClick = method => {
    // After clicking method, switch target to second number.
    dispatch({ type: "METHOD", value: method, target: "NUMBER_TWO"})
  }

  const handleCalcClick = () => {
    dispatch({ type: "CACLULATE", target: "NUMBER_ONE" })
  }

  return (
    <div id="calculator">
      <div className="display">
        {state.displayNumber}
      </div>
      <div className="numberPad">
        {numbers.map(number => (
          <button key={number} onClick={() => handleNumberClick(number)} value={number}>
            {number}
          </button>))}
      </div>
      <div className="methods">
        {methods.map(method => (
          <button key={method} value={method} onClick={() => handleMethodClick(method)}>{method}</button>
        ))}
        <button key="calc" onClick={() => handleCalcClick()}>=</button>
        <button key="reset" onClick={() => handleClearClick()}>CLEAR</button>
      </div>
    </div>
  )
}
