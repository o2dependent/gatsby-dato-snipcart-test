import { StaticQuery, graphql } from 'gatsby';
import React, { useState } from 'react';
import Layout from '../layouts';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import Toast from '../components/Toast';

const DATO_QUERY = graphql`
	query ProductPage($id: String) {
		product: datoCmsProduct(id: { eq: $id }) {
			id
			name
			price
			description
			image {
				url
				sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
					...GatsbyDatoCmsSizes
				}
			}
		}
		about: datoCmsAboutContent {
			aboutDescription
			profileImage {
				url
				sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
					...GatsbyDatoCmsSizes
				}
			}
		}
		site {
			siteMetadata {
				siteName
			}
		}
	}
`;

export default () => {
	const [toastOpen, setToastOpen] = useState(false);
	const [toastData, setToastData] = useState({ name: '', price: '' });
	let toastTimer;
	const openToast = (newToastData) => {
		setToastOpen(true);
		setToastData(newToastData);
		toastTimer = setTimeout(() => {
			setToastOpen(false);
			clearTimeout(toastTimer);
		}, 3000);
	};

	return (
		<StaticQuery
			query={DATO_QUERY}
			render={({ about, site, product }) => (
				<Layout about={about} site={site}>
					<Toast toastOpen={toastOpen} toastData={toastData} />
					<div className='Product_Page'>
						<div className='Product_Page__image-container'>
							<Img
								sizes={product.image.sizes}
								alt={`Product with a name of ${product.name}`}
							/>
						</div>
						<div className='Product_Page__content'>
							<h2 className='Product_Page__title'>{product.name}</h2>
							<p className='Product_Page__description'>{product.description}</p>
							<p className='Product_Page__price'>${product.price}</p>
							<div className='Product_Page__button-grid'>
								<span
									onClick={() =>
										openToast({
											name: product.name,
											price: product.price,
										})
									}
									className='snipcart-add-item'
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
				</Layout>
			)}
		/>
	);
};
