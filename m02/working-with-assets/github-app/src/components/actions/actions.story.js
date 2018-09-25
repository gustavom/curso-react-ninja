'use strict'

import { storiesOf, action } from '@kadira/storybook'
import React from 'react'
import Actions from './index'

const stories = storiesOf('Div', module)

stories.add('Actions Component', () => (
  <Actions
    getRepos={action('Get Repos')}
    getStarred={action('Get Starred')}
  />
  ))
