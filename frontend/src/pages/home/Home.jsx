import { Link, useLocation } from "react-router-dom";
import "./home.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
	const [posts, setPosts] = useState([]);

	const cat = useLocation().search;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(`/api/posts${cat}`);
				setPosts(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [cat]);

	const getText = (html) => {
		const doc = new DOMParser().parseFromString(html, "text/html");
		return doc.body.textContent;
	};

	// const posts = [
	// 	{
	// 		id: 1,
	// 		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, accusantium!",
	// 		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam qui molestias, iure consequuntur cumque. Fugiat consequuntur cumque molestias temporibus totam perferendis assumenda voluptatibus tempore dolor necessitatibus, illo ipsam distinctio!",
	// 		img: "https://images.unsplash.com/photo-1720048171731-15b3d9d5473f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
	// 	},
	// 	{
	// 		id: 2,
	// 		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, accusantium!",
	// 		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam qui molestias, iure consequuntur cumque. Fugiat consequuntur cumque molestias temporibus totam perferendis assumenda voluptatibus tempore dolor necessitatibus, illo ipsam distinctio!",
	// 		img: "https://images.unsplash.com/photo-1728209228772-76351edd20b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
	// 	},
	// 	{
	// 		id: 3,
	// 		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, accusantium!",
	// 		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam qui molestias, iure consequuntur cumque. Fugiat consequuntur cumque molestias temporibus totam perferendis assumenda voluptatibus tempore dolor necessitatibus, illo ipsam distinctio!",
	// 		img: "https://images.unsplash.com/photo-1719937050445-098888c0625e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
	// 	},
	// 	{
	// 		id: 4,
	// 		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, accusantium!",
	// 		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam qui molestias, iure consequuntur cumque. Fugiat consequuntur cumque molestias temporibus totam perferendis assumenda voluptatibus tempore dolor necessitatibus, illo ipsam distinctio!",
	// 		img: "https://images.unsplash.com/photo-1726755487183-c7322ae4a3df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
	// 	},
	// 	{
	// 		id: 5,
	// 		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, accusantium!",
	// 		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam qui molestias, iure consequuntur cumque. Fugiat consequuntur cumque molestias temporibus totam perferendis assumenda voluptatibus tempore dolor necessitatibus, illo ipsam distinctio!",
	// 		img: "https://images.unsplash.com/photo-1726293993561-ae9901d8c6d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
	// 	},
	// ];
	return (
		<div className='container'>
			<div className='posts'>
				{posts.map((post) => (
					<div className='post' key={post.id}>
						<div className='img'>
							<img src={`../upload/${post.img}`} alt='' />
						</div>
						<div className='content'>
							<div className='top'>
								<Link className='link' to={`/post/${post.id}`}>
									<h1 title='Read More'>{post.title}</h1>
								</Link>
								<p>{getText(post.desc)}</p>
							</div>

							<div className='button'>
								<button>Read More</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
