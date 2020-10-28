import React from 'react';
import Img from 'gatsby-image';

export default function Card({ product }) {
	return (
		<div className='Catalogue__item' key={product.id}>
			<div className='Product'>
				<div className='Product__image'>
					<Img sizes={product.image.sizes} />
				</div>
				<div className='Product__details'>
					<h2 className='Product__name'>{product.name}</h2>
					<p className='Product__description'>
						{product.description}
					</p>
					<p className='Product__price'>${product.price}</p>
				</div>
				<div className='Product__price_wrapper'>
					<span
						className='Product__add-item snipcart-add-item'
						data-item-id={product.id}
						data-item-price={product.price}
						data-item-image={product.image.url}
						data-item-name={product.name}
						data-item-description={product.description}
						data-item-url={`/`}
					>
						Add to cart
					</span>
					<span className='Product__buy'>Buy now</span>
				</div>
			</div>
		</div>
	);
}
