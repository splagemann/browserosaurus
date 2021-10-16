import { clipboard } from 'electron'

import copyToClipboard from './copy-to-clipboard.js'

jest.mock('child_process')

test('should copy string', () => {
  copyToClipboard('string')
  expect(clipboard.readText()).toBe('string')
})
