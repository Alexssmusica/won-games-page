module.exports = {
	stories: ['../src/components/**/stories.tsx'],
	addons: ['@storybook/addon-essentials'],
	webpackFinal: (config) => {
		config.resolve.modules.push(`${process.cwd()}/src`)
		return config
	},
	features: {
		postcss: false,
		babelModeV7: true
	},
	core: {
		builder: 'webpack5'
	},
}
