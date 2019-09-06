const themeOptions = require('@availity/gatsby-theme-docs/theme-options');

module.exports = {
  pathPrefix: '/sdk-js',
  __experimentalThemes: [
    {
      resolve: '@availity/gatsby-theme-docs',
      options: {
        ...themeOptions,
        root: __dirname,
        subtitle: 'SDK Resources',
        description: 'Documentation for Resources',
        githubRepo: 'availity/sdk-js',
        contentDir: 'packages/docs/source',
        sidebarCategories: {
          null: ['index', 'contributing'],
          API: [
            'api/getting-started',
            'api/definitions',
            'api/authorizations',
            'api/downloads',
            'api/uploads',
          ],
          Features: [
            'features/analytics',
            'features/env-var',
            'features/messaging',
            'features/native-form',
            'features/resolve-url',
            'features/yup',
            'features/exceptions',
          ],
        },
      },
    },
  ],
};
