import React, { memo, useReducer, useMemo } from 'react'
import { Router } from '@reach/router'

import Index from './modules/index'
import { Store, initialState } from './store'
import AppReducer from './store/reducer'

const App = () => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  /**
   * @description
   * Memoization of global state.
   */
  const context = useMemo(() => ({
    dispatch,
    state
  }), [state, dispatch])

  return (
    <Router>
      <Store.Provider value={context}>
        <Index path="/" />
      </Store.Provider>
    </Router>
  )
}

export default memo(App)
