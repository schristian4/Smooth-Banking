import React from 'react'
import './InputFieldStyles.css'
interface InputFieldProps {
	type: string
	label: string
	onChange: (value: React.SyntheticEvent) => void
	username: string
	password: string
	showErrorMessage: boolean
}

export const textValidations = {
	username: {
		// 'reg': RegExp(`(\\w+\\S+)`),
		regStrict: `^([a-zA-Z0-9]([.](?![.])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$)`,
	},
	password: {
		regStrict: `^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$`,
		reg: `^(?=.*\d).{4,8}$`,
	},
}

const InputField = ({
	type,
	label,
	onChange,
	username,
	password,
	showErrorMessage,
}: InputFieldProps) => {
	const displayErrorMessage = (label: string, username: string, password: string) => {
		if (label === 'username') {
			if (RegExp(textValidations[label]['regStrict']).test(username) === false) {
				return (
					<p className="not-valid">
						Sorry, only letters (a-z), numbers (0-9), Single period(.), underscores (_) are allowed.
					</p>
				)
			}
		}
		if (label === 'password') {
			if (RegExp(textValidations[label]['reg']).test(password) === false) {
				return (
					<p className="not-valid">
						Password must be a Minimum eight characters, at least one letter and one number:

					</p>
				)
			}
		}
	}
	return (
		<div className="form__group field">
			<input
				type={type}
				className="form__field"
				placeholder={label}
				name={label}
				onChange={onChange}
				required
			/>
			<label
				htmlFor="name"
				className="form__label">
				{label}
			</label>

			{showErrorMessage ? displayErrorMessage(label, username, password) : <></>}
		</div>
	)
}

export default InputField
