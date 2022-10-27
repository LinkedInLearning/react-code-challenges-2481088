export const initialState = {
  number1: '',
  number2: '',
  displayNumber: '',
  method: '',
  calc: '',
  target: 'NUMBER_ONE'
}

export const calculatorReducer = (state, payload) => {
  switch (payload.type) {
    case "NUMBER_ONE":
      return {...state, number1: payload.value, displayNumber: payload.value}
    case "NUMBER_TWO":
      return {...state, number2: payload.value, displayNumber: payload.value}
    case "DISPLAY":
      return {...state, displayNumber: payload.value}
    case "METHOD":
      return {...state, method: payload.value, target: "NUMBER_TWO", displayNumber: ''}
    case "CLEAR":
      return initialState
    case "CACLULATE":
      {
        let calcValue;
        const {number1, number2, method} = state;
        switch (method) {
          case "+":
            calcValue = parseInt(number1) + parseInt(number2);
            break;
          case "-":
            calcValue = parseInt(number1) - parseInt(number2);
            break;
          case "/":
            calcValue = parseInt(number1) / parseInt(number2);
            break;
          case "*":
            calcValue = parseInt(number1) * parseInt(number2);
            break;
          default:
            calcValue = '0';
            break;
        }
        return {...state, calc: calcValue, displayNumber: calcValue}
      }
    default:
      return state;
  }
};
