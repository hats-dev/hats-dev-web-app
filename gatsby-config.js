module.exports = {
	plugins: [
		{
			resolve: 'smooth-doc',
			options: {
				author: 'Kamar Mack',
				baseDirectory: __dirname,
				description:
					'HaTs is a super easy tool that improves your TypeScript development workflow.',
				githubRepositoryURL: 'https://github.com/hats-dev/hats-dev-nextjs',
				name: 'HaTs',
				navItems: [{ title: 'Home', url: '/docs' }],
				sections: ['Getting Started', 'Development Workflow', 'CLI Reference'],
				siteUrl: 'https://hats.dev',
				trailingSlash: 'never',
			},
		},
	],
};
