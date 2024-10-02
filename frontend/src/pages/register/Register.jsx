import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
	return (
		<div className='auth'>
			<h1>Register</h1>
			<form className='form'>
				<div className='value'>
					<label htmlFor='username'>Username</label>
					<input required type='text' name='username' />
				</div>
				<div className='value'>
					<label htmlFor='email'>Email</label>
					<input required type='email' name='email' />
				</div>
				<div className='value'>
					<label htmlFor='password'>Password</label>
					<input required type='password' name='password' />
				</div>

				<p className='error'>this an error</p>

				<button className=' button'>Login</button>
				<span className='span'>
					Do you have an account?
					<Link to='/login' className='login'>
						Login
					</Link>
				</span>
			</form>
		</div>
	);
};

export default Register;
