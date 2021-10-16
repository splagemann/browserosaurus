import { app } from 'electron'

import { updateAvailable } from '../../shared/state/actions.js'
import type { AppThunk } from '../../shared/state/reducer.root'
import { isUpdateAvailable } from '../utils/is-update-available.js'

export const checkForUpdate = (): AppThunk => async (dispatch) => {
  if (app.isPackaged && (await isUpdateAvailable())) {
    dispatch(updateAvailable())
  }
}
