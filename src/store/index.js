import { createContext } from 'react'

import users from './data/users'

export const initialState = {
  users
}

export const Store = createContext({
  ...initialState
})