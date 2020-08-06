const minimalcss = require('minimalcss')
const path = require('path')
const { promises: fs } = require('fs')

const crypto = require('crypto')

minimalcss
	.minimize({
		urls: [path.join('file://', process.cwd(), 'public', 'index.html')],
		skippable: (request) => {
			return !!request.url().match('fonts.googleapis.com')
		},
		viewport: {
			width: 1300,
			height: 900,
		},
		styletags: true,
		cssoOptions: {
			comments: false,
		},
	})
	.then(async ({ finalCss }) => {
		const id = crypto
			.randomBytes(Math.ceil(8 * 0.5))
			.toString('hex')
			.slice(0, 8)
		const indexFile = path.join(process.cwd(), 'public', `index.html`)
		let index = await fs.readFile(indexFile, 'utf-8')
		index = index.replace(
			'<head>',
			`<head><style type="text/css">/* Critical CSS */ ${finalCss}</style>`,
		)
		await fs.writeFile(indexFile, index)
	})
