module.exports = {
	plugins: [
		{
			resolve: 'smooth-doc',
			options: {
				author: 'Kamar Mack',
				baseDirectory: __dirname,
				description:
					'HaTs is a super easy tool that improves your TypeScript development workflow.',
				githubRepositoryURL: 'https://github.com/hats-dev/hats-dev-web-app',
				name: 'HaTs',
				navItems: [{ title: 'Home', url: '/docs/v1' }],
				sections: ['Getting Started', 'Development Workflow', 'CLI Reference'],
				siteUrl: 'https://hats.dev',
			},
		},
		'gatsby-plugin-remove-trailing-slashes',
		{
			resolve: 'gatsby-plugin-google-gtag',
			options: {
				trackingIds: [process.env.GATSBY_PUBLIC_GA_ID],
				pluginConfig: { head: true },
			},
		},
	],
};
