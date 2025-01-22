import { componentsList } from '@/data/editor/components'
interface Propss {
  i: string
  w: number
  h: number
  x: number
  y: number
}
const NainContainer = () => {
  let layout: any[] = []
  let dashboardComponents: any[] = []

  try {
    layout = JSON.parse(localStorage.getItem('layout') || '[]')
    dashboardComponents = JSON.parse(localStorage.getItem('dashboardComponents') || '[]')
  } catch (error) {
    console.error('Invalid JSON in localStorage for "layout":', error)
    layout = [] // Fallback to empty array
    dashboardComponents = [] // Fallback to empty array
  }

  return (
    <div className="grid grid-cols-12 gap-4 p-3">
      {layout.map((item: Propss, key: number) => {
        return (
          <div style={{ gridColumn: `span ${item.w} / span ${item.w}` }} className="" key={item.i}>
            {componentsList.find((obj) => obj.id === dashboardComponents[key].id)?.element}
          </div>
        )
      })}
    </div>
  )
}

export default NainContainer
