import { configure } from '@kadira/storybook'

const req = require.context('../src/components', true, /\.story\.js$/)

function loadStories () {
  // require('../src/components/actions/actions.story');
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
