import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      minimizeWindow: () => void
      maximizeWindow: () => void
      closeWindow: () => void
      onMaximizedStateChange: (callback: (isMaximized: boolean) => void) => void
    }
  }
}

export {}
