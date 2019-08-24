interface Options {
  basePath: string
}

interface Source {
  name: string
}

exports.createResolvers = ({ createResolvers }: any, options: Options) => {
  const basePath = options.basePath || '/'

  const slugify = (str: string) => {
    const slug = str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')
    return `/${basePath}/${slug}`.replace(/\/\/+/g, '/')
  }

  createResolvers({
    Project: {
      slug: {
        resolve: (source: Source) => slugify(source.name)
      }
    }
  })
}

export {}
