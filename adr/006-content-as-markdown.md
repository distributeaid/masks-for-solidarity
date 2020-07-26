# 6. Content as Markdown

In order to allow content editors without programming experience to update the
content of this site, **all content should be authored in plain markdown
files**.

The markdown files are transformed to HTML through the
[Remark plugin](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/)
before being rendered into the page.

This approach enables to separate the concern of providing the content from
presenting it onto the website and allows in the future to introduce a content
management system (CMS) and have the site being built regularly (or on change)
with the latest snapshot of the content. The CMS would need be able to export
its content to markdown files. This approach was successfully implemented in the
[COVID-19 Aid Workers Guide project](https://github.com/distributeaid/covid-19-resources-drive-export)
which renders content written in Google Drive to a static website.
