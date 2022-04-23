module.exports = {
	plugins: [
		{
			resolve: 'smooth-doc',
			options: {
				author: 'Kamar Mack',
				description: 'Happy TypeScript CLI',
				name: 'HaTs',
				sections: ['Getting Started', 'Development Workflow', 'CLI Reference'],
				siteUrl: 'https://hats.dev',
				trailingSlash: 'always',
			},
		},
	],
};
