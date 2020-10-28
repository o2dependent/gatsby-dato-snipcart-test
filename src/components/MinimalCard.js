import React from 'react';

export default function MinimalCard({ product }) {
	return (
		<div class='card'>
			<div class='img'></div>
			<div class='content'>
				<h2 class='title'>Product Title</h2>
				<p class='description'>A short description of the product.</p>
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
