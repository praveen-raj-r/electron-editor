//Electron
export const HEIGHT_OF_TITLE_BAR = '48px'

// Editor
export const WIDTH_OF_EDITOR_SIDEBAR = '300px'
export const WIDTH_OF_PRIMARY_SIDEBAR = '48PX'
export const WIDTH_OF_INSPECTOR = '290px'
// Editor - Droparea
export const PADDING_OF_DROPAREA = '42px'
export const MINIMUM_WIDTH_OF_DROPAREA = '990px'

// Common
export const HEIGHT_OF_APP_HEADER = '64px'
export const CHARTS_TYPES_ARRAY = ['daily', 'weekly', 'monthly']

export const WIDTHS_AND_HEIGHTS_OF_EDITOR_COMPONENTS = [
  { w: 6, h: 10, name: 'Donut Chart', id: 'donut-chart' },
  { w: 12, h: 11, name: 'Bar Chart', id: 'bar-chart' },
  { w: 12, h: 9, name: 'Summary Table', id: 'summary-table' },
  { w: 12, h: 3.5, name: 'Status Card', id: 'stat-cards' },
  { w: 4, h: 2.5, name: 'Label Card', id: 'label' },
  { w: 12, h: 9, name: 'Performance tracker', id: 'performance-tracker' },
  { w: 12, h: 7, name: 'Active Reports', id: 'active-reports' },
  { w: 12, h: 4, name: 'Productivity cards', id: 'productivity-cards' },
  { w: 2.1, h: 1.8, name: 'Action Button', id: 'action-button' },
  { w: 12, h: 12.5, name: 'Table', id: 'table' },
  { w: 12, h: 10, name: 'Area Chart', id: 'area-chart' },
  { w: 6, h: 10, name: 'Pie Chart', id: 'pie-chart' },
  { w: 3, h: 1.6, name: 'Text Area', id: 'text-area' }
]

export const DEFAULT_LAYOUT_PROPERTIES = {
  isBounded: undefined,
  isDraggable: true,
  isResizable: true,
  maxH: undefined,
  maxW: undefined,
  minH: undefined,
  minW: undefined,
  moved: false,
  resizeHandles: ['s', 'w', 'e', 'n', 'sw', 'nw', 'se', 'ne'],
  static: false
}
