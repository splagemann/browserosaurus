import type { AnyAction } from '@reduxjs/toolkit'

import { Channel } from '../../shared/state/channels.js'
import createStore from '../../shared/state/create-store.js'
import { customWindow } from '../shared/custom.window.js'
import { busMiddleware } from '../shared/state/middleware.bus.js'

const store = createStore([busMiddleware(Channel.TILES)])

export default store

/**
 * Listen for all actions from main
 */
customWindow.electron.receive(Channel.MAIN, (action: AnyAction) => {
  store.dispatch(action)
})
