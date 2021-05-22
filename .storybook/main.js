module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-essentials',
     '@storybook/addon-postcss',
     {
       name: '@storybook/addon-postcss',
       options: {
         postcssLoaderOptions: {
           implementation: require('postcss'),
         },
       },
    }],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}