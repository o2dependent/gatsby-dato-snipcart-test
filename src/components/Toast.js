import React from 'react';

export default function Toast({ toastData, toastOpen }) {
	const { name, price } = toastData;

	return (
		<div className='Toast' style={{ opacity: toastOpen ? 1 : 0 }}>
			<h4>{name} added to cart</h4>
			<p>+{price}</p>
		</div>
	);
}
