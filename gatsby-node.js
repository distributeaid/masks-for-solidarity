require('ts-node').register({ files: true })
const path = require('path')

const renderContentPage = async (
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
						relativePath
						childMarkdownRemark {
							htmlAst
							frontmatter {
								title
								subtitle
								website
								twitter
								role
								instagram
								facebook
								logo
								photoSanityId
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
		({ node: { relativePath } }) => name === relativePath,
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
	await renderContentPage('Home.md', '/', 'home', createPage, graphql)
	await renderContentPage('Privacy.md', '/Privacy', 'page', createPage, graphql)
	await createPage({
		path: '/Dovetail',
		component: path.join(
			process.cwd(),
			'src',
			'templates',
			`design-system.tsx`,
		),
	})
}
