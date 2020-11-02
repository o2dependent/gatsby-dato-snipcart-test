require('dotenv').config();

module.exports = {
	siteMetadata: {
		siteName: process.env.SITE_NAME,
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-datocms`,
			options: { apiToken: process.env.DATO_API_TOKEN },
		},
		{
			resolve: 'gatsby-plugin-snipcart',
			options: {
				apiKey: process.env.SNIPCART_API_KEY,
				autopop: false,
			},
		},
	],
};
