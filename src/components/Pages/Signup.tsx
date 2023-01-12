import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { RandomBalance, RandomDigits } from '../../Methods/methods'
import { userProp } from '../../libs/component'
import InputField, { textValidations } from '../InputField/InputField'

interface eventMethodProps {
	eventSetSignup: (value: {}) => void
}

const Signup = ({ eventSetSignup }: eventMethodProps) => {
	let navigate = useNavigate()
	const [username, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const [newUser, setNewUser] = useState({})
	const [showErrorMessageUsername, setShowErrorMessageUsername] = useState(false)
	const [showErrorMessagePassword, setShowErrorMessagePassword] = useState(false)

	const HandleSubmit = (e: any) => {
		debugger
		e.preventDefault()
		let randomBalance = RandomBalance()
		let randomDigits = RandomDigits()
		let userObject: userProp = {
			username: username,
			password: password,
			balance: randomBalance,
			digits: randomDigits,
		}
		let validateContent = ValidateSignupUsername(username, password)
		if (validateContent === true) {
			setNewUser(userObject)
		}
	}

	const ValidateSignupUsername = (username: string, password: string) => {
		let usernameCondition = RegExp(textValidations['username']['regStrict']).test(username)
		let passwordCondition = true
		//  RegExp(textValidations['password']['reg']).test(password)
		debugger
		if (usernameCondition === false) {
			setShowErrorMessageUsername(true)
		}
		// if (passwordCondition === false) {
		// 	setShowErrorMessagePassword(true)
		// }
		debugger
		return usernameCondition === true && passwordCondition === true ? true : false
	}
	const handleUsernameEntry = (e: React.SyntheticEvent) => {
		let target = e.target as HTMLInputElement
		setUserName(target.value)
	}
	const handlePasswordEntry = (e: React.SyntheticEvent) => {
		let target = e.target as HTMLInputElement
		setPassword(target.value)
	}

	useEffect(() => {
		if (Object.keys(newUser).length > 0) {
			eventSetSignup(newUser)
			navigate('/login')
		}
	})

	return (
		<div className="container">
			<div className="content-wrapper">
				<div className="form__group__Wrapper">
					<h1>SIGN UP</h1>
					<InputField
						type="text"
						label="username"
						onChange={handleUsernameEntry}
						username={username}
						password={password}
						showErrorMessage={showErrorMessageUsername}
					/>
					<InputField
						type="password"
						label="password"
						onChange={handlePasswordEntry}
						username={username}
						password={password}
						showErrorMessage={showErrorMessagePassword}
					/>
				</div>
				<div className="btn-wrapper">
					<button
						className="btn btn-submit"
						type="submit"
						onClick={HandleSubmit}>
						Submit
					</button>
				</div>
			</div>
			<div className="center">
				<div className="navigation-wrapper">
					<span>
						<span>Already a user? &nbsp;</span>
						<Link to="/login">LOGIN</Link>
					</span>
					{/* <br /> */}
					{/* <span>
            Go: <Link to="/">Home</Link>
          </span> */}
				</div>
			</div>
		</div>
	)
}

export default Signup
