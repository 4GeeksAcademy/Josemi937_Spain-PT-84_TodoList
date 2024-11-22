import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

//create your first component




//create your first component
const Home = () => {
	const [newEntry, setNewEntry] = useState('');
	const [todoList, setToDoList] = useState(["Study", "Walk the dog", "Clean the kitchen"]);
	const [estate, setEstado] = useState(false);
	const ammountDutties = todoList.length;


	function mouseOver(index) {
		setEstado(index);
	}

	function mouseOut() {
		setEstado(false);

	}

	function onSubmit(e) {
		e.preventDefault();
		const newList = [...todoList, newEntry];
		setToDoList(newList)
		setNewEntry('');
		console.log("onSubmit");
	};

	function deleteElement(value) {
		const result = todoList.filter((element, index) => index !== value);
		setToDoList(result);

	};

	console.log(todoList);
	return (
		<div className="container w-50 text-center">
			<h1 className="tittle text-center mt-5"><strong>To-do List!</strong></h1>
			<div className=" container-flex ">
				<form onSubmit={onSubmit}>
					<div className="container-flex border-bottom p-1">
						<input onChange={(e) => setNewEntry(e.target.value)} value={newEntry} type="text"
							className=" 
						 form-control lavenderBlush inputStyle" placeholder="New task" />
					</div>
				</form>
				<ul className="list-group mt-2 list-group">
					{todoList.length === 0 ? (
						<p className="text-center pt-3">There are no tasks for today</p>
					) : (
						todoList.map((item, index) => (
							<li
								key={index}
								className="list  list-group-item lavenderBlush d-flex justify-content-between align-items-center"
								onMouseOver={() => mouseOver(index)}
								onMouseOut={() => mouseOut()}
							>
								{item}
								{estate === index && (
									<button className="btn" onClick={() => deleteElement(index)}><i class="fa-solid fa-x"></i></button>
								)}
							</li>
						))
					)}
				</ul>
				<div className="pending pt-3 ps-2 border-top">
					{ammountDutties} Pending tasks
				</div>
			</div>
			<div style={{ height: "3px", borderRadius: "3px", }} className="lavenderBlush border mx-1"></div>
			<div style={{ height: "3px", borderRadius: "3px" }} className="lavenderBlush border mx-2"></div>
		</div>

	);
};

export default Home;