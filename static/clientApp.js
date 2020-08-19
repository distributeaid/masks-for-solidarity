import * as React from 'https://cdn.skypack.dev/react@^16.13.1'
import * as ReactDOM from 'https://cdn.skypack.dev/react-dom@^16.13.1'

export const campaignProgress = ({ target }) => {
	ReactDOM.render(React.createElement('div', null, 'Hello'), target)
}

campaignProgress({ target: document.getElementById('campaignProgress') })
