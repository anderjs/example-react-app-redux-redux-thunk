import React, { useCallback, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import CounterCreator from './components/CounterCreator'
import CounterItem from './components/CounterItem'

import * as action from './store/actions/counters'


const App = () => {
  const state = useSelector(state => state.counters)

  console.log("state", state)

  const dispatch = useDispatch()

  /**
   * Agregando nuevo contador.
   */
  const handleCreateCounter = useCallback(counter => {
    dispatch(action.onCreateCounter(counter))
  }, [dispatch])

  return (
    <React.Fragment>
      <CounterCreator onSubmit={handleCreateCounter} />
      {state.loading.onCreate && (
        <h3>Creando contador....</h3>
      )}
      <br /><br />
      {state.counters.map(counter => (
        /** AQUI VA A ID en el key */
        <CounterItem key={counter.title} title={counter.title} count={counter.count} />
      ))}
     </React.Fragment>
  )
}

export default memo(App)
