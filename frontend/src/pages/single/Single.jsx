import { CiEdit } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./single.scss";
import Menu from "../../components/menu/menu.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

const Single = () => {
	const [post, setPost] = useState({});

	const location = useLocation();

	const postId = location.pathname.split("/")[2];

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

	return (
		<div className='container'>
			<div className='single'>
				<div className='content'>
					<img src={post?.img} alt='' />
					<div className='user'>
						<div className='left'>
							<img
								src='https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww'
								alt=''
							/>
							<div className='info'>
								<span>furkan</span>
								<p>Posted 2 days ago</p>
							</div>
						</div>

						<div className='icons'>
							<Link className='link' to='/write?edit=2'>
								<CiEdit className='edit' />
							</Link>
							<FaTrashAlt className='trash' />
						</div>
					</div>
					<h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, nostrum.</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates ipsa eaque voluptatibus
						reiciendis exercitationem aliquid officia dolore, odit veritatis, explicabo aliquam itaque optio
						impedit? Veritatis nam vel consequatur dignissimos ab in odio adipisci est, labore quas magni
						animi non voluptatum provident? Nulla deleniti beatae molestiae suscipit porro debitis odit
						commodi. Architecto saepe repellat, esse dolorem quaerat commodi <br /> sit sed dolores totam
						nihil est id quisquam vero culpa a velit deserunt aliquam distinctio voluptas, aliquid
						asperiores laborum! Necessitatibus assumenda sapiente esse aliquam porro ex maiores illum hic
						voluptate soluta quibusdam eaque vero dolore itaque, nobis provident, explicabo optio
						reprehenderit adipisci sit, recusandae debitis similique! Voluptates cupiditate velit cum sunt
						accusamus labore architecto quidem animi nesciunt vel, repellat dolores aut explicabo aspernatur
						ad? Voluptas debitis eius itaque veniam assumenda illo est vitaeb
						<br /> ullam mollitia! Velit nobis, ullam magnam, perspiciatis, vitae quis repellat unde
						similique quibusdam cumque sapiente nostrum porro ab libero quia doloremque commodi aperiam odio
						ipsa! Soluta aliquid aspernatur nobis repellendus cumque sint aperiam quae accusantium error
						distinctio? Maxime natus repudiandae nostrum, ex sunt distinctio, maiores laudantium quam
						laboriosam placeat, sapiente similique nisi? Reiciendis, quas eveniet. Magnam repellat error
						sint corporis reprehenderit eius aut? Reiciendis magni, aliquam quis sunt at quasi <br /> quae
						nam non aspernatur consequatur animi in, et consequuntur? Vel nisi et qui eos repudiandae dolore
						commodi nemo hic, animi adipisci dolor sed temporibus exercitationem, ipsum quibusdam.
						Exercitationem maiores debitis saepe animi itaque accusamus. Nam repellendus <br /> voluptate
						libero provident? Molestiae odio magnam fugit qui iste natus vitae, commodi cum quis beatae enim
						asperiores atque doloremque? Nostrum placeat <br /> esse modi, sint ex nemo laboriosam. Officia
						minima esse error cupiditate est quisquam fugiat molestiae nam hic ex totam quia officiis aut
						maiores possimus debitis ad et laboriosam, delectus voluptatem? Nulla, ab vel. Iure sequi
						suscipit cupiditate. Quas aperiam molestiae mollitia omnis culpa?
					</p>
				</div>
				<Menu />
			</div>
		</div>
	);
};

export default Single;
