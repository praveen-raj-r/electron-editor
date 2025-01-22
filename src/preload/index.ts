import { electronAPI } from '@electron-toolkit/preload'
import { contextBridge, ipcRenderer } from 'electron'

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.

// Custom APIs for the renderer process
const api = {
  minimizeWindow: () => ipcRenderer.send('manualMinimize'),
  maximizeWindow: () => ipcRenderer.send('manualMaximize'),
  closeWindow: () => ipcRenderer.send('manualClose'),
  onMaximizedStateChange: (callback: (isMaximized: boolean) => void) => {
    ipcRenderer.on('windowMaximized', () => callback(true))
    ipcRenderer.on('windowUnmaximized', () => callback(false))
  }
}

// Expose APIs to the renderer
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI) // Expose electronAPI
    contextBridge.exposeInMainWorld('api', api) // Expose custom API
  } catch (error) {
    console.error('Error exposing APIs:', error)
  }
} else {
  // Define a global interface for the window object
  interface CustomWindow extends Window {
    electron: typeof electronAPI
    api: typeof api
  }

  const customWindow = window as unknown as CustomWindow
  customWindow.electron = electronAPI
  customWindow.api = api
}
