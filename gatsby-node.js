const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const productPageTemplate = path.resolve(`src/templates/product-page.js`);

	const { data } = await graphql(`
		query loadPagesQuery {
			products: allDatoCmsProduct {
				edges {
					node {
						id
						name
					}
				}
			}
		}
	`);

	data.products.edges.forEach((edge) => {
		createPage({
			path: `${edge.node.name}`,
			component: productPageTemplate,
			context: {
				id: edge.node.id,
			},
		});
	});
};
