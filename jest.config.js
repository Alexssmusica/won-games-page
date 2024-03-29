module.exports = {
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['/node_modules/', '/.next/'],
	collectCoverage: true,
	collectCoverageFrom: [
		'src/**/*.ts(x)?',
		'!src/**/stories.tsx',
		'!src/pages/**/*.tsx',
		'!src/styles/**/*.ts',
		'!src/utils/apollo.ts',
		'!src/utils/apolloCache.ts',
		'!src/utils/formatDate.ts',
		'!src/hooks/use-query-games/*.ts',
		'!src/hooks/use-apollo/*.ts',
		'!src/types/**/*.d.ts',
		'!src/graphql/**/*.ts',
		'!src/**/mock.ts'
	],
	setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
	modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
	transform: {
	  '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
	},
	moduleNameMapper: {
		'^styled-components':
			'<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
	}
};
