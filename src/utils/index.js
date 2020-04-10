import counterKeys from "constant"


/**
 * @param {'title' | 'count'} type
 * @param {[]} counters
 * @returns {[]}
 */
export function applyFilter([...counters], type) {
  if (type === counterKeys.TITLE) {
    return counters.sort((a, b) => {
      if (a.title.toUpperCase() > b.title.toUpperCase()) {
        return 1
      }
      return -1
    })
  }

  if (type === counterKeys.COUNT) {
    return counters.sort((a, b) => {
      return b.count - a.count
    })
  }

}

/**
 * @param {[]} counters
 */
export function applySumOverCounters([...counters]) {
  return counters.reduce((previous, next) => {
    return previous + next.count 
  }, 0)
}