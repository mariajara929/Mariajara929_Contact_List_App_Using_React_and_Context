import React from "react";
import "../../styles/home.css";

export const Home = () => {
	return (
		<div className="text-center mt-5">
			<ul className="list-group">
				<li className="list-group-item d-flex">
					<div className="">
						<img />
					</div>
					<div className="">
						<ul>
							<li>Nombre</li>
							<li>Address</li>
							<li>Phone Number</li>
							<li>E-mail</li>
						</ul>
					</div>
					<div className="">
						<button className="btn">
							<i className="fa-solid fa-pen-to-square"></i>
						</button>
						<button className="btn">
							<i class="fa-solid fa-trash"></i>
						</button>
					</div>
				</li>
			</ul>
		</div>
	);
};
