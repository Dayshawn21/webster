import React from 'react';
import IMG1 from '../img/angelos-michalopoulos-S3Rs0DcvvK0-unsplash.jpg';

const About = () => {
	return (
		<div className=" about-me p-1">
			<div className="container about ">
				<div className="about-left p-1">
					<img src={IMG1} alt="" />
				</div>
				<div className="about-right">
					<h1 className="large">About Me </h1>
					<hr />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic placeat nemo, architecto inventore
						exercitationem consequuntur repellat odit ducimus ad dicta nulla, officiis culpa accusantium
						maxime voluptates itaque suscipit aut? Eaque veniam omnis nesciunt quaerat perferendis soluta,
						harum aperiam architecto, reiciendis cupiditate ex quae voluptatem distinctio facilis! Dolorem,
						voluptatem? Deserunt, enim?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum debitis, temporibus sint aut et
						error cupiditate deserunt quod laboriosam assumenda modi dolore vero saepe excepturi neque.
						Magnam sed eos dolorum.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
