const Promise = require("bluebird")
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const event = path.resolve("./src/templates/event-page.js")
    resolve(
      graphql(
        `
          {
            allContentfulEvent {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulEvent.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/events/${post.node.slug}/`,
            component: event,
            context: {
              slug: post.node.slug,
            },
          })
        })
      })
    )
  })
}
