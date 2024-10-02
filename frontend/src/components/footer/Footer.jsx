import Logo from "../../assets/Segmen2.png";
import "./footer.scss";
const Footer = () => {
	return (
		<footer>
			<img src={Logo} alt='' />
			<span className='creator'>
				Created by Furkan Seğmen <span className='x'>❤</span>{" "}
			</span>
		</footer>
	);
};

export default Footer;
