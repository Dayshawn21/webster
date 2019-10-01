import React from 'react';
import Hero from '../comp/Hero';
import Goals from '../comp/Goals';
import About from '../comp/About';
import Testimon from '../comp/Testimon';
import Form from '../comp/Form';

const Home = () => {
	return (
		<div>
			<Hero />
			<Goals />
			<About />
			<Testimon />
			<Form />
		</div>
	);
};

export default Home;
