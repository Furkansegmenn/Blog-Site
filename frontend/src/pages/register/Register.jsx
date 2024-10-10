import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
import { useState } from "react";
import axios from "axios";

const Register = () => {
	const [inputs, setInputs] = useState({
		username: "",
		email: "",
		password: "",
	});
	const [err, setErr] = useState();

	const handleChange = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const res = await axios.post("/api/auth/register", inputs);
			console.log(res);
			navigate("/login");
		} catch (err) {
			setErr(err.response.data);
		}
	};

	return (
		<div className='auth'>
			<h1>Register</h1>
			<form className='register-form '>
				<div className='value'>
					<label htmlFor='username'>Username</label>
					<input required type='text' name='username' onChange={handleChange} />
				</div>
				<div className='value'>
					<label htmlFor='email'>Email</label>
					<input required type='email' name='email' onChange={handleChange} />
				</div>
				<div className='value'>
					<label htmlFor='password'>Password</label>
					<input required type='password' name='password' onChange={handleChange} />
				</div>

				{err && <p className='error'>{err}</p>}

				<button className='register' onClick={handleSubmit}>
					Register
				</button>
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
