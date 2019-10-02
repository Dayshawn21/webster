import React from 'react';
import IMG1 from '../img/angelos-michalopoulos-S3Rs0DcvvK0-unsplash.jpg';

const About = () => {
	return (
		<div className=" about-me p-1">
			<h1 className="large">About Me </h1>
			<hr />
			<div className="container about py-1 ">
				<div className="about-left">
					<img src={IMG1} alt="" />
				</div>
				<div className="about-right">
					<p className="lead">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic placeat nemo, architecto inventore
						exercitationem consequuntur repellat odit ducimus ad dicta nulla, officiis culpa accusantium
						maxime voluptates itaque suscipit aut? Eaque veniam omnis nesciunt quaerat perferendis soluta,
						harum aperiam architecto, reiciendis cupiditate ex quae voluptatem distinctio facilis! Dolorem,
						voluptatem? Deserunt, enim?
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
