import "./menu.scss";

const menu = () => {
	const posts = [
		{
			id: 1,
			title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, accusantium!",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam qui molestias, iure consequuntur cumque. Fugiat consequuntur cumque molestias temporibus totam perferendis assumenda voluptatibus tempore dolor necessitatibus, illo ipsam distinctio!",
			img: "https://images.unsplash.com/photo-1720048171731-15b3d9d5473f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
		},
		{
			id: 2,
			title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, accusantium!",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam qui molestias, iure consequuntur cumque. Fugiat consequuntur cumque molestias temporibus totam perferendis assumenda voluptatibus tempore dolor necessitatibus, illo ipsam distinctio!",
			img: "https://images.unsplash.com/photo-1728209228772-76351edd20b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 3,
			title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, accusantium!",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam qui molestias, iure consequuntur cumque. Fugiat consequuntur cumque molestias temporibus totam perferendis assumenda voluptatibus tempore dolor necessitatibus, illo ipsam distinctio!",
			img: "https://images.unsplash.com/photo-1719937050445-098888c0625e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 4,
			title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, accusantium!",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam qui molestias, iure consequuntur cumque. Fugiat consequuntur cumque molestias temporibus totam perferendis assumenda voluptatibus tempore dolor necessitatibus, illo ipsam distinctio!",
			img: "https://images.unsplash.com/photo-1726755487183-c7322ae4a3df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
		},
		{
			id: 5,
			title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, accusantium!",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam totam qui molestias, iure consequuntur cumque. Fugiat consequuntur cumque molestias temporibus totam perferendis assumenda voluptatibus tempore dolor necessitatibus, illo ipsam distinctio!",
			img: "https://images.unsplash.com/photo-1726293993561-ae9901d8c6d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
		},
	];
	return (
		<div className='menu'>
			<h1>Other Posts you may like</h1>
			{posts.map((post) => (
				<div className='post' key={post.id}>
					<img src={post.img} />
					<h2>{post.title}</h2>
					<button>Read More</button>
				</div>
			))}
		</div>
	);
};

export default menu;
