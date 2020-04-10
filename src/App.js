import React, { memo, useCallback, useMemo, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import CounterCreator from './components/CounterCreator'
import CounterItem from './components/CounterItem'

import * as action from './store/actions/counters'
import counterKeys from 'constant'


const App = () => {
  const state = useSelector(state => state.counters)

  console.log(state.counters)

  const dispatch = useDispatch()

    /**
   * Sumar todos los valores.
   */
  const handleCounterSum = useCallback(() => {
    dispatch(action.onSumCounters())
  }, [dispatch])


  useEffect(handleCounterSum, [state.counters])

  /**
   * Agregando nuevo contador.
   */
  const handleCreateCounter = useCallback(counter => {
    dispatch(action.onCreateCounter(counter))
  }, [dispatch])

  /**
   * Ordenando por titulo.
   */
  const handleOrderByTitle = useCallback(() => {
    dispatch(action.onApplyFilter(counterKeys.TITLE))
  }, [dispatch])

  /**
   * Ordenando por valor.
   */
  const handleOrderByCount = useCallback(() => {
    dispatch(action.onApplyFilter(counterKeys.COUNT))
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
      <button onClick={handleOrderByTitle}>Ordenar por titulo</button>
      <button onClick={handleOrderByCount}>Ordenar por valor</button>
      <h4>Total: {state.total}</h4>
     </React.Fragment>
  )
}

export default memo(App)
