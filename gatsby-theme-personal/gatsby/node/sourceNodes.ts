exports.sourceNodes = ({ actions }: any) => {
  actions.createTypes(`
    type Project implements Node @dontInfer {
      id: ID!
      name: String!
      description: String!
      type: String
      release: Date! @dateformat
      url: String!
      status: String!
      slug: String!
    }
  `)
}

export {}
