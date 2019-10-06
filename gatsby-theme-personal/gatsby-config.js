// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = ({ contentPath = 'data', basePath = '/' }) => ({
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: contentPath
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayout: require.resolve('./src/components/Layout/Layout.Post.tsx')
      }
    }
  ]
})
