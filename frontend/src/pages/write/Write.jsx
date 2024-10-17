import { useState } from "react";
import "./write.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
const Write = () => {
	const state = useLocation().state;
	const [value, setValue] = useState(state?.desc || "");
	const [title, setTitle] = useState(state?.title || "");
	const [cat, setCat] = useState(state?.cat || "");
	const [file, setFile] = useState(null);

	const navigate = useNavigate();

	const upload = async () => {
		try {
			const formData = new FormData();
			formData.append("file", file);
			const res = await axios.post("api/upload", formData);
			return res.data;
		} catch (error) {
			console.log(error);
		}
	};

	const handleClick = async (e) => {
		e.preventDefault();

		let imgUrl = state?.img;
		if (file) {
			imgUrl = await upload();
		}

		try {
			state
				? await axios.put(`/api/posts/${state.id}`, {
						title,
						desc: value,
						cat,
						img: imgUrl,
				  })
				: await axios.post("/api/posts/", {
						title,
						desc: value,
						cat,
						img: imgUrl,
						date: moment(Date.now()).local().format("YYYY-MM-DD HH:mm:ss"),
				  });
			navigate("/");
		} catch (error) {
			if (error) return console.log(error);
		}
	};

	return (
		<div className='container'>
			<div className='add'>
				<div className='content'>
					<input
						type='text'
						placeholder='Title'
						className='title'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<div className='editorcontainer'>
						<ReactQuill className='editor' theme='snow' value={value} onChange={setValue} />
					</div>
				</div>
				<div className='menu'>
					<div className='item'>
						<h1>Publish</h1>

						<span>
							<b>Status: </b>Draft
						</span>
						<span>
							<b>Visibility:</b>Public
						</span>
						<input
							style={{ display: "none" }}
							type='file'
							id='file'
							name=''
							onChange={(e) => setFile(e.target.files[0])}
						/>
						<label className='file' htmlFor='file'>
							Upload İmage
						</label>
						<div className='buttons'>
							<button>Save as a draft</button>
							{state ? (
								<button onClick={handleClick}>Update</button>
							) : (
								<button onClick={handleClick}>Publish</button>
							)}
						</div>
					</div>
					<div className='item'>
						<h1>Category</h1>
						<div className='categories'>
							<div className='cat'>
								<input
									type='radio'
									value='art'
									name='cat'
									id='art'
									checked={cat === "art"}
									onChange={(e) => setCat(e.target.value)}
								/>
								<label htmlFor='art'>Art</label>
							</div>

							<div className='cat'>
								<input
									type='radio'
									value='science'
									name='cat'
									id='science'
									checked={cat === "science"}
									onChange={(e) => setCat(e.target.value)}
								/>
								<label htmlFor='science'>Science</label>
							</div>

							<div className='cat'>
								<input
									type='radio'
									value='technology'
									name='cat'
									id='technology'
									checked={cat === "technology"}
									onChange={(e) => setCat(e.target.value)}
								/>
								<label htmlFor='technology'>Technology</label>
							</div>

							<div className='cat'>
								<input
									type='radio'
									value='cinema'
									name='cat'
									id='cinema'
									checked={cat === "cinema"}
									onChange={(e) => setCat(e.target.value)}
								/>
								<label htmlFor='cinema'>Cinema</label>
							</div>

							<div className='cat'>
								<input
									type='radio'
									value='design'
									name='cat'
									id='design'
									checked={cat === "design"}
									onChange={(e) => setCat(e.target.value)}
								/>
								<label htmlFor='design'>Design</label>
							</div>

							<div className='cat'>
								<input
									type='radio'
									value='food'
									name='cat'
									id='food'
									checked={cat === "food"}
									onChange={(e) => setCat(e.target.value)}
								/>
								<label htmlFor='food'>Food</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Write;
