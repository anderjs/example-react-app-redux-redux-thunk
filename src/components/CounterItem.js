import React, { memo } from 'react'

/**
 * @typedef {Object} CounterItemProps
 * @property {string} title
 * @property {number} count
 * @property {Function} onDelete
 */

/**
 * @type {React.FunctionComponent<CounterItemProps>}
 */
const CounterItem = ({ title, count, onDelete }) => {
  return (
    <React.Fragment>
      <p>{title}</p>
      <small>{count}</small>
      <button onClick={onDelete}>Delete</button>
    </React.Fragment>
  )
} 


CounterItem.defaultProps = {
  title: '',
  count: 0,
  onDelete: null
}


export default memo(CounterItem)