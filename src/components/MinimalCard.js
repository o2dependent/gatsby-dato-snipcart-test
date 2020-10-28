import React from 'react';
import Img from 'gatsby-image';

export default function MinimalCard({ product }) {
	return (
		<div class='card'>
			<div class='card__image-container'>
				<Img sizes={product.image.sizes} />
			</div>
			<div class='content'>
				<h2 class='title'>{product.names}</h2>
				<p class='description'>{product.description}</p>
				<div class='button-grid'>
					<span
						class='snipcart-add-item'
						data-item-id={product.id}
						data-item-price={product.price}
						data-item-image={product.image.url}
						data-item-name={product.name}
						data-item-description={product.description}
						data-item-url={`/`}
					>
						Add to cart
					</span>
					<span
						class='snipcart-add-item snipcart-checkout'
						data-item-id={product.id}
						data-item-price={product.price}
						data-item-image={product.image.url}
						data-item-name={product.name}
						data-item-description={product.description}
						data-item-url={`/`}
					>
						Buy Now
					</span>
				</div>
			</div>
		</div>
	);
}
