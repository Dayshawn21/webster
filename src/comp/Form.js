import React, { useState } from 'react';

const Form = () => {
	const [
		form,
		setForm
	] = useState({
		name  : '',
		email : '',
		phone : '',
		type  : 'weight lost',
		days  : ''
	});

	const { name, email, phone, type, days } = form;

	const onChange = (e) =>
		setForm({
			...form,
			[e.target.name]: e.target.value
		});
	return (
		<div className="about-me p-2">
			<form className=" container text-center form-group form-container" action="">
				<h2>Tell Us About You</h2>
				<input type="text" name="name" placeholder="Name" value={name} onChange={onChange} />
				<input type="email" placeholder="Email" name="email" value={email} onChange={onChange} />
				<input type="text" placeholder="Phone" name="phone" value={phone} onChange={onChange} />
				<div className="p-2">
					<h2>What are your goals</h2>
					<input type="radio" name="type" value="weight" onChange={onChange} checked={type === 'weight'} />
					{''} Weight Lost {''}
					<input type="radio" name="type" value="gain" onChange={onChange} checked={type === 'gain'} /> {''}{' '}
					Muscle Gain {''}
				</div>
				<h2>What days can you work out</h2>
				<input type="checkbox" name="days" value="sunday" onChange={onChange} id="" /> {''} Sunday {''}
				<input type="checkbox" name="days" value="sunday" onChange={onChange} id="" /> {''}Monday {''}
				<input type="checkbox" name="days" value="sunday" onChange={onChange} id="" /> {''} Tuesday {''}
				<input type="checkbox" name="days" value="sunday" onChange={onChange} id="" /> {''} Wednesday {''}
				<input type="checkbox" name="days" value="sunday" onChange={onChange} id="" /> {''} Thurday {''}
				<input type="checkbox" name="days" value="sunday" onChange={onChange} id="" /> {''}Friday{''}
			</form>
		</div>
	);
};

export default Form;
