export function useElectron() {
  return navigator.userAgent.toLowerCase().includes('electron')
}
