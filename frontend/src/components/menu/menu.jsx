import { useEffect, useState } from "react";
import "./menu.scss";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const Menu = ({ cat }) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(`/api/posts/?cat=${cat}`);
				setPosts(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, [cat]);

	return (
		<div className='menu'>
			<h1>Other Posts you may like</h1>
			{posts.map((post) => (
				<div className='post' key={post.id}>
					<img src={`../upload/${post.img}`} />
					<h2>{post.title}</h2>
					<button>Read More</button>
				</div>
			))}
		</div>
	);
};

export default Menu;
