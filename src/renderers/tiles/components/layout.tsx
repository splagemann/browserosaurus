import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { tilesStarted } from '../../../shared/state/actions.js'
import { useKeyboardEvents } from './hooks/use-keyboard-events.js'
import SupportMessage from './organisms/support-message.js'
import Tiles from './organisms/tiles.js'
import UrlBar from './organisms/url-bar.js'

const useAppStarted = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(tilesStarted())
  }, [dispatch])
}

const App: React.FC = () => {
  /**
   * Tell main that renderer is available
   */
  useAppStarted()

  /**
   * Setup keyboard listeners
   */
  useKeyboardEvents()

  return (
    <div className="h-screen w-screen select-none flex flex-col items-center relative dark:text-white">
      <Tiles />
      <UrlBar />
      <SupportMessage />
    </div>
  )
}

export default App
