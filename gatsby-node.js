require('ts-node').register({ files: true })
const path = require('path')

const renderStaticPage = async (
	name,
	pagePath,
	template,
	createPage,
	graphql,
) => {
	const pages = await graphql(`
		query PagesQuery {
			allFile(
				filter: { sourceInstanceName: { eq: "pages" }, extension: { eq: "md" } }
			) {
				edges {
					node {
						id
						name
						relativeDirectory
						childMarkdownRemark {
							htmlAst
							frontmatter {
								title
								website
								twitter
								role
								logo
								instagram
								facebook
							}
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

	if (pages.errors) {
		throw pages.errors
	}

	// Find requested page
	const page = pages.data.allFile.edges.find(
		({ node: { name: nodeName, relativeDirectory } }) =>
			name === nodeName && relativeDirectory === '',
	)

	// Render requested page
	await createPage({
		path: pagePath,
		component: path.join(process.cwd(), 'src', 'templates', `${template}.tsx`),
		context: {
			page: {
				remark: page.node.childMarkdownRemark,
			},
			pages: pages.data.allFile.edges.map(
				({ node: { childMarkdownRemark, ...rest } }) => ({
					remark: childMarkdownRemark,
					...rest,
				}),
			),
		},
	})
}

exports.createPages = async ({ graphql, actions: { createPage } }) => {
	await renderStaticPage('Home', '/', 'home', createPage, graphql)
	await renderStaticPage('Privacy', '/Privacy', 'page', createPage, graphql)
}
