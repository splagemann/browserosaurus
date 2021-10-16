import React from 'react'
import { Provider } from 'react-redux'

import store from '../store.js'
import Layout from './layout.js'

const Bootstrap = (): JSX.Element => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  )
}

export default Bootstrap
