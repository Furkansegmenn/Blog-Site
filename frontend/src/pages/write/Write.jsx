import { useState } from "react";
import "./write.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const Write = () => {
	const [value, setValue] = useState("");
	return (
		<div className='container'>
			<div className='add'>
				<div className='content'>
					<input type='text' placeholder='Title' className='title' />
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
						<input style={{ display: "none" }} type='file' id='file' />
						<label className='file' htmlFor='file'>
							Upload İmage
						</label>
						<div className='buttons'>
							<button>Save as a draft</button>
							<button>Update</button>
						</div>
					</div>
					<div className='item'>
						<h1>Category</h1>
						<div className='categories'>
							<div className='cat'>
								<input type='radio' value='art' name='cat' id='art' />
								<label htmlFor='art'>Art</label>
							</div>

							<div className='cat'>
								<input type='radio' value='science' name='cat' id='science' />
								<label htmlFor='science'>Science</label>
							</div>

							<div className='cat'>
								{" "}
								<input type='radio' value='technology' name='cat' id='technology' />
								<label htmlFor='technology'>Technology</label>
							</div>

							<div className='cat'>
								<input type='radio' value='cinema' name='cat' id='cinema' />
								<label htmlFor='cinema'>Cinema</label>
							</div>

							<div className='cat'>
								<input type='radio' value='design' name='cat' id='design' />
								<label htmlFor='design'>Design</label>
							</div>

							<div className='cat'>
								<input type='radio' value='food' name='cat' id='food' />
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
