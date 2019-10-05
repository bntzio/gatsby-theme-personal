exports.sourceNodes = ({ actions }: any) => {
  actions.createTypes(`
    type Post implements Node @dontInfer {
      id: ID!
      title: String!
      slug: String!
    }
  `)
}

export {}
