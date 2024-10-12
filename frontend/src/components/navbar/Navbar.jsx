import "./navbar.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/Segmen.png";
import { FaPen } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
	const { logout, currentUser } = useContext(AuthContext);

	return (
		<div className='navbar'>
			<div className='container'>
				<Link to='/'>
					<div className='logo'>
						<img src={Logo} alt='' />
					</div>
				</Link>

				<div className='links'>
					<Link className='link' to='/?cat=art'>
						<h5>ART</h5>
					</Link>
					<Link className='link' to='/?cat=science'>
						<h5>SCIENCE</h5>
					</Link>
					<Link className='link' to='/?cat=technology'>
						<h5>TECHNOLOGY</h5>
					</Link>
					<Link className='link' to='/?cat=cinema'>
						<h5>CINEMA</h5>
					</Link>
					<Link className='link' to='/?cat=design'>
						<h5>DESIGN</h5>
					</Link>
					<Link className='link' to='/?cat=food'>
						<h5>FOOD</h5>
					</Link>
				</div>
				<div className='right'>
					<span>{currentUser?.username}</span>
					{currentUser ? (
						<span onClick={logout}>Logout</span>
					) : (
						<Link className='link' to='/login'>
							Login
						</Link>
					)}
					<Link className='link' to='/write' title='Write'>
						<span className='write'>
							<FaPen className='pen'></FaPen>
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
