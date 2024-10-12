import { useContext, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
	const [inputs, setInputs] = useState({
		username: "",
		password: "",
	});
	const [err, setErr] = useState();

	const handleChange = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	const navigate = useNavigate();
	const { login } = useContext(AuthContext);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await login(inputs);
			navigate("/");
		} catch (err) {
			setErr(err.response.data);
		}
	};
	return (
		<div className='auth'>
			<h1>Login</h1>
			<form className='form'>
				<div className='value'>
					<label htmlFor='username'>Username</label>
					<input required type='text' name='username' onChange={handleChange} />
				</div>
				<div className='value'>
					<label htmlFor='password'>Password</label>
					<input required type='password' name='password' onChange={handleChange} />
				</div>
				{err && <p className='error'>{err}</p>}

				<button className='button' onClick={handleSubmit}>
					Login
				</button>
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
