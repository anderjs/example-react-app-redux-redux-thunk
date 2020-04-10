import * as event from './types'
import { httpClient } from '../../utils/httpClient'

/**
 * @param {{ title: string }} counter
 */
export const onCreateCounter = ({ title }) => async dispatch => {
  const item = {
    title,
    body: Math.random().toString(),
    userId: 1
  }


  /**
   * Siempre hacer ON_START_...ACCION para crear efectos UI/UIX con los spinners.
   */
  dispatch({ type: event.ON_START_CREATE_COUNTER })

  try {
    const counter = await httpClient({
      body: {
        title,
        body: Math.random().toString(),
        userId: 1
      },
      externalHost: 'https://jsonplaceholder.typicode.com/posts',
      method: 'POST'
    })

    
    return dispatch({
      type: event.ON_CREATE_COUNTER,
      payload: {
        ...item,
        ...counter,
        count: 2
      }
    })
  } catch (err) {
    return dispatch({
      type: event.ON_ERROR_CREATE_COUNTER,
      paylaod: err
    })
  }
}


/**
 * @param {'count' | 'title'} filterType
 */
export const onApplyFilter = (filterType) => dispatch => {
  return dispatch({
    type: event.ON_APPLY_FILTER,
    payload: filterType
  })
} 


/**
 * Aplicar suma.
 */
export const onSumCounters = () => dispatch => {
  return dispatch({
    type: event.ON_SUM_COUNTERS
  })
}


/**
 * @param {{ id?: number }} param
 */
export const onDeleteCounter = ({ id }) => async dispatch => {
  /**
   * Evento para cuando empieze a cargar.
   */
  try {
    await httpClient({
      externalHost: 'https://jsonplaceholder.typicode.com/posts/'.concat(id),
      method: 'DELETE'
    })

    return dispatch({
      type: event.ON_DELETE_COUNTER,
      payload: id 
    })
  } catch (err) {
    /**
     * Por si falla
     */
  }
}