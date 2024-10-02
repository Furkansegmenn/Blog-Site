import "./login.scss";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className='auth'>
			<h1>Login</h1>
			<form className='form'>
				<div className='value'>
					<label htmlFor='username'>Username</label>
					<input required type='text' name='username' />
				</div>
				<div className='value'>
					<label htmlFor='password'>Password</label>
					<input required type='password' name='password' />
				</div>
				<p className='error'>this an error</p>

				<button className=' button'>Login</button>
				<span>
					<Link to='/register' className='sign'>
						Dont you have an account?
					</Link>
				</span>
			</form>
		</div>
	);
};

export default Login;
