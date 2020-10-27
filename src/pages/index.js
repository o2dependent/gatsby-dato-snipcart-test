import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../layouts/index';
import Img from 'gatsby-image';

export default () => (
	<StaticQuery
		query={graphql`
			query CatalogueQuery {
				products: allDatoCmsProduct {
					edges {
						node {
							id
							name
							price
							description
							image {
								url
								sizes(
									maxWidth: 300
									imgixParams: { fm: "jpg" }
								) {
									...GatsbyDatoCmsSizes
								}
							}
						}
					}
				}
				site {
					siteMetadata {
						siteName
					}
				}
			}
		`}
		render={(data) => (
			<Layout site={data.site}>
				<div className='Catalogue'>
					{data.products.edges.map(({ node: product }) => (
						<div className='Catalogue__item' key={product.id}>
							<div className='Product'>
								<div className='Product__image'>
									<Img sizes={product.image.sizes} />
								</div>
								<div className='Product__details'>
									<h2 className='Product__name'>
										{product.name}
									</h2>
									<p className='Product__description'>
										{product.description}
									</p>
									<p className='Product__price'>
										${product.price}
									</p>
								</div>
								<div className='Product__price_wrapper'>
									<button
										className='Product__add-item snipcart-add-item'
										data-item-id={product.id}
										data-item-price={product.price}
										data-item-image={product.image.url}
										data-item-name={product.name}
										data-item-description={
											product.description
										}
										data-item-url={`https://silly-stonebraker-09e691.netlify.app/`}
									>
										Add to cart
									</button>
									<span className='Product__buy'>
										Buy now
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</Layout>
		)}
	/>
);
