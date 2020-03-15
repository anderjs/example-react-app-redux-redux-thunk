import React, { memo } from 'react'
import { Router } from '@reach/router'

import Index from './modules/index'

const App = () => {
  return (
    <Router>
      <Index path="/" />
    </Router>
  )
}

export default memo(App)
