import type { AnyAction } from '@reduxjs/toolkit'

import { Channel } from '../../../shared/state/channels'
import createStore from '../../../shared/state/create-store'
import { busMiddleware } from '../../shared/state/middleware.bus'
import { pickerMiddleware } from './middleware'

const middleware = [busMiddleware(Channel.PICKER), pickerMiddleware()]

const store = createStore(Channel.PICKER, middleware)

/**
 * Listen for all actions from main
 */
window.electron.receive(Channel.MAIN, (action: AnyAction) => {
  store.dispatch(action)
})

export default store
