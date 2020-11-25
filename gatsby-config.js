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
			resolve: `gatsby-plugin-snipcart-advanced`,
			options: {
				version: '3.0.15',
				publicApiKey: process.env.SNIPCART_API_KEY, // use public api key here or in environment variable
				defaultLang: 'en',
				currency: 'usd',
				openCartOnAdd: false,
			},
		},
	],
};
