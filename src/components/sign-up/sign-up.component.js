import React, { Component } from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends Component {
	constructor() {
		super();

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		};
	}

	handleSubmit = async event => {
		event.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserProfileDocument(user, { displayName });

			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});
		} catch (error) {
			console.error('error creating a user', error.message);
		}
	};

	handleChange = event => {
		const {name, value} = event.target;

		this.setState({
			[name]: value
		});
	}

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className="sign-up">
				<h2>I do not have an account</h2>
				<span className="title">
					Sign up with your email and password
				</span>
				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						label="Display name"
						handleChange={this.handleChange}
						value={displayName}
					/>
					<FormInput
						type="email"
						name="email"
						label="Email"
						handleChange={this.handleChange}
						value={email}
					/>
					<FormInput
						type="password"
						name="password"
						label="Password"
						handleChange={this.handleChange}
						value={password}
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						label="Confirm password"
						handleChange={this.handleChange}
						value={confirmPassword}
					/>
					<div className="buttons">
						<CustomButton type="submit">SIGN UP</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignUp;
