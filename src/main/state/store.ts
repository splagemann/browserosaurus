import createStore from '../../shared/state/create-store.js'
import { storage } from '../storage.js'
import { actionHubMiddleware } from './middleware.action-hub.js'
import { busMiddleware } from './middleware.bus.js'

const middleware = [busMiddleware(), actionHubMiddleware()]
const initialPartialState = { storage: storage.getAll() }

const { dispatch } = createStore(middleware, initialPartialState)

export { dispatch }
