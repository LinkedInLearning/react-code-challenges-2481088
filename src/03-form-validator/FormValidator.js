import { useState } from 'react'



export default function FormValidator () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [message, setMessage] = useState('')

  const isEmailValid = () => {
    const emailChar = email.match(/[@]/g);
    if(email.length && ('emailChar', emailChar instanceof Array) && emailChar.length === 1){
      return true;
    }else{
      setMessage('The Email is invalid');
      return false;
    }
  }; 
  
  const isPWValid = () => {
    if(password.length >= 8) return true;
    setMessage('The assword is too short');
    return false;
  } 
  
  const doPWsMatch = () => {
    if(password === passwordConfirm) return true;
    setMessage('Your passwords do not match');
    return false;
  } 

  const handleSubmit = (e) =>{
    e.preventDefault();
    let emailValid = isEmailValid(email);
    let passwordValid = isPWValid(password);
    let passwordsMatch = doPWsMatch(passwordConfirm);

    if(emailValid && passwordValid && passwordsMatch){
      setMessage('New User Created')
    }else{
      return;
    }
  }

  function handleChange({target}){
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);
    if(target.name === 'password-confirm') setPasswordConfirm(target.value);
    if(message !== '') setMessage('');
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h2>Sign Up!</h2>
      <label htmlFor='email'>Email</label>
      <input
        type='text' name='email'
        onChange={handleChange}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password' name='password'
        onChange={handleChange}
      />
      <label htmlFor='password-confirm'>Confirm Password </label>
      <input
        type='password' name='password-confirm'
        onChange={handleChange}
      />
      <input type='submit' value='Submit' />
    </form>
    <p>{message}</p>
    </>
  )
}
