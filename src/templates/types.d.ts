export type SiteMetaData = {
	title: string
	shortTitle: string
	description: string
	gitHubUrl: string
}

export type Page = {
	id: string
	/**
	 * @example "DA"
	 */
	name: string
	/**
	 * @example "organizations/DA.md"
	 */
	relativeDirectory: string
	/**
	 * @example "organizations"
	 */
	relativePath: string
	remark: {
		htmlAst: any
		headings: {
			id: string
			depth: number
			value: string
		}[]
		frontmatter: {
			subtitle: string | null
			title: string | null
			website: string | null
			twitter: string | null
			role: string | null
			logo: string | null
			instagram: string | null
			facebook: string | null
		}
	}
}
