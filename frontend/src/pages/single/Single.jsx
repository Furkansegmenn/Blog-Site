import { CiEdit } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./single.scss";
import Menu from "../../components/menu/Menu.jsx";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../../context/AuthContext";

const Single = () => {
	const [post, setPost] = useState({});

	const location = useLocation();
	const navigate = useNavigate();

	const postId = location.pathname.split("/")[2];
	const { currentUser } = useContext(AuthContext);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(`/api/posts/${postId}`);
				setPost(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [postId]);

	const handleDelete = async () => {
		try {
			await axios.delete(`/api/posts/${postId}`);
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};
	const getText = (html) => {
		const doc = new DOMParser().parseFromString(html, "text/html");
		return doc.body.textContent;
	};

	return (
		<div className='container'>
			<div className='single'>
				<div className='content'>
					<img src={`../upload/${post?.img}`} alt='' />
					<div className='user'>
						<div className='left'>
							{post.userImg && <img src={post.userImg} alt='' />}
							<div className='info'>
								<span>{post.username}</span>
								<p>Posted {moment(post.date).fromNow()} </p>
							</div>
						</div>

						{currentUser?.username === post.username && (
							<div className='icons'>
								<Link className='link' to={`/write?edit=${post.id}`} state={post}>
									<CiEdit className='edit' />
								</Link>
								<FaTrashAlt className='trash' onClick={handleDelete} />
							</div>
						)}
					</div>
					<h1>{post.title}</h1>
					{getText(post.desc)}
				</div>
				<Menu cat={post.cat} />
			</div>
		</div>
	);
};

export default Single;
