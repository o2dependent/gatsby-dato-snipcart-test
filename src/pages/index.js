import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../layouts/index';
import Card from '../components/Card';
import Toast from '../components/Toast';

const DATO_QUERY = graphql`
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
						sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
							...GatsbyDatoCmsSizes
						}
					}
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
			render={(data) => (
				<Layout about={data.about} site={data.site}>
					<Toast toastOpen={toastOpen} toastData={toastData} />
					<div className='Catalogue'>
						{data.products.edges.map(({ node: product }) => (
							<Card
								key={product.name}
								openToast={() =>
									openToast({
										name: product.name,
										price: product.price,
									})
								}
								product={product}
							/>
						))}
					</div>
				</Layout>
			)}
		/>
	);
};
