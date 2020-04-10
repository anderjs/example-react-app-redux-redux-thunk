import React, { memo } from 'react'

/**
 * @typedef {Object} CounterItemProps
 * @property {string} title
 * @property {number} count
 */

/**
 * @type {React.FunctionComponent<CounterItemProps>}
 */
const CounterItem = ({ title, count }) => {
  return (
    <React.Fragment>
      <p>{title}</p>
      <small>{count}</small>
    </React.Fragment>
  )
} 


CounterItem.defaultProps = {
  title: '',
  count: 0
}


export default memo(CounterItem)