require('ts-node').register({ files: true })
const path = require('path')

const renderStaticPage = async (name, pagePath, createPage, graphql) => {
	const page = await graphql(`
	query PageQuery {
		allFile(
			filter: { sourceInstanceName: { eq: "pages" }, name: { eq: "${name}" } }
		) {
			edges {
				node {
					childMarkdownRemark {
						htmlAst
						headings {
							id
							depth
							value
						}
					}
				}
			}
		}
	}
`)

	if (page.errors) {
		throw page.errors
	}
	// Render index page
	await Promise.all(
		page.data.allFile.edges.map(({ node: { childMarkdownRemark } }) =>
			createPage({
				path: pagePath,
				component: path.join(process.cwd(), 'src', 'templates', 'page.tsx'),
				context: {
					page: {
						remark: childMarkdownRemark,
					},
				},
			}),
		),
	)
}

exports.createPages = async ({ graphql, actions: { createPage } }) => {
	await renderStaticPage('Home', '/', createPage, graphql)
}
