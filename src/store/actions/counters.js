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