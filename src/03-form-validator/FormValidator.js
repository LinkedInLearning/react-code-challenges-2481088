import { useState } from 'react'

export default function FormValidator () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [messageList,setMessageList] = useState([]);

  const onFormSubmit = (e) => {
    try {
      e.preventDefault();
      const tempArray = [];
      if(!(email.includes("@"))) {
        tempArray.push("An email must have exactly one @ sign");
      }
      if(!(password.length >= 8)) {
        tempArray.push("Password must be 8 characters or longer")
      }
      if(password !== passwordConfirm) {
        tempArray.push("Passwords do not match! Please try again.")
      }
      if(tempArray.length === 0) {
        tempArray.push("User Created!");
      }
      setMessageList(tempArray);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <form onSubmit={onFormSubmit}>
      <h2>Sign Up!</h2>
      <label htmlFor='email'>Email</label>
      <input type='text' name='email' onChange={e => setEmail(e.target.value)} />
      <label htmlFor='password'>Password</label>
      <input type='password' name='password' onChange={e => setPassword(e.target.value)} />
      <label htmlFor='password-confirm'>Confirm Password </label>
      <input type='password' name='password-confirm' onChange={e => setPasswordConfirm(e.target.value)} />
      <span>{messageList.toString()}</span>
      <input type='submit' value='Submit' />
    </form>
  )
}
