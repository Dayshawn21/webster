import React from 'react';
import IMG1 from '../img/foYNc1569618390.jpg';
import IMG2 from '../img/eyvts1569618548.jpg';
import IMG3 from '../img/kltX11569618776.jpg';

const Goals = () => {
	return (
		<div className="container text-center">
			<h1 className="large">Program</h1>
			<hr />

			<div className="goals  p-2">
				<div className="goal p-2  ">
					<img src={IMG1} alt="" />
					<h3>Set Your Goal</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit similique unde accusamus est illum
						maxime!
					</p>
				</div>
				<div className="goal p-2 ">
					<img src={IMG2} alt="" />
					<h3>Get A Program </h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit similique unde accusamus est illum
						maxime!
					</p>
				</div>
				<div className="goal p-2 ">
					<img src={IMG3} alt="" />
					<h3>TRAIN HARD</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit similique unde accusamus est illum
						maxime!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Goals;
