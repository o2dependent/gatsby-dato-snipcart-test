import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../layouts/index';
import Card from '../components/Card';
import MinimalCard from '../components/MinimalCard';

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
						<MinimalCard product={product} />
					))}
				</div>
			</Layout>
		)}
	/>
);
