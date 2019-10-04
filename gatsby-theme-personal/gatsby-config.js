// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = ({ contentPath = 'data', basePath = '/' }) => ({
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: contentPath
      }
    },
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName: 'Project'
      }
    }
  ]
})
