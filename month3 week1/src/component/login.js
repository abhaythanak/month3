import { useState } from 'react';
import "./login.css"

export default function Signup() {

// States for registration
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);
const [errorMessage, setErrorMessage] = useState('')


// Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

// Handling the password change
const handlePassword = () => {
 
	const validate = (value) => {
   
	  if (validator.isStrongPassword(value, {
		minLength: 8, minLowercase: 1,
		minUppercase: 1, minNumbers: 1, minSymbols: 1
	  })) {
		setErrorMessage('Is Strong Password')
	  } else {
		setErrorMessage('Is Not Strong Password')
	  }
	}
}

// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if ( email === '' || password === '') {
	setError(true);
	} else {
	setSubmitted(true);
	setError(false);
	}
};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1 style={{backgroundColor:'green'}}>User {email} successfully login!!</h1>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1 style={{backgroundColor:'red'}}>Please enter all the fields</h1>
	</div>
	);
};

return (
	<div className="form">
	<div>
		<h1>Log In</h1>
	</div>

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form>

		<label className="label">Email</label>
		<input style={{borderRadius:'25px'}} onChange={handleEmail} className="input"
		value={email} type="email" />

		<label className="label">Password</label>
		<input style={{borderRadius:'25px'}} onChange={handlePassword} className="input"
		value={password} type="password" />

		<button style={{borderRadius:'10px'}} onClick={handleSubmit} className="btn" type="submit">
		Login
		</button>
	</form>
	</div>
);
}
