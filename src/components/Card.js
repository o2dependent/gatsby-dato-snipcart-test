import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

export default function Card({ product, openToast }) {
	return (
		<div className='card'>
			<div className='card__image-container'>
				<Img
					sizes={product.image.sizes}
					alt={`Product with a name of ${product.name}`}
				/>
			</div>
			<div className='content'>
				<h2 className='title'>{product.name}</h2>
				<p className='description'>{product.description}</p>
				<p className='price'>${product.price}</p>
				<div className='button-grid'>
					<Link to={`/${product.name}`}>See more</Link>
					<span
						className='snipcart-add-item'
						onClick={openToast}
						data-item-id={product.id}
						data-item-price={product.price}
						data-item-image={product.image.url}
						data-item-name={product.name}
						data-item-description={product.description}
						data-item-url={`/`}
					>
						Add to cart
					</span>
				</div>
			</div>
		</div>
	);
}
