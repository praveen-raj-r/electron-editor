/* eslint-disable @typescript-eslint/no-explicit-any */
import { DragEvent } from 'react'
import { componentsList } from '@/data/editor/components'
import { DEFAULT_LAYOUT_PROPERTIES, WIDTHS_AND_HEIGHTS_OF_EDITOR_COMPONENTS } from '@/lib/constants'

export function handleOnDrop({
  layout,
  setLayout,
  dashboardComponents,
  setDashboardComponents,
  setSelectedEditItem,
  setInspectorOpen
}) {
  return (e: DragEvent) => {
    e.preventDefault()

    const uuid = e.dataTransfer.getData('uuid')
    const matchedObj = componentsList.find((obj) => obj.id === uuid)

    if (!matchedObj) {
      console.error('Matched object not found for UUID:', uuid)
      return
    }
    const { w = 3, h = 4 } =
      WIDTHS_AND_HEIGHTS_OF_EDITOR_COMPONENTS.find((obj) => obj.id === uuid) || {}

    const layoutLastElement = layout.at(-1)
    const newLayoutElement = {
      w,
      h,
      x: layoutLastElement ? layoutLastElement.x + 1 : 0,
      y: layoutLastElement ? Math.ceil(layoutLastElement.y / 12) : 0,
      i: dashboardComponents.length.toString(),
      ...DEFAULT_LAYOUT_PROPERTIES
    }

    setLayout((prev: any) => {
      const updatedLayout = [...prev, newLayoutElement]
      return updatedLayout
    })

    setDashboardComponents((prev) => [...prev, matchedObj])
    localStorage.setItem(
      'dashboardComponents',
      JSON.stringify([...dashboardComponents, matchedObj])
    )
    setSelectedEditItem(dashboardComponents.length)
    setInspectorOpen(true)
  }
}
