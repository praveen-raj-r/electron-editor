import globeImage from '@/assets/earth-dark.jpg'
import useWindowDimensions from '@/hooks/use-window-dimensions'

import microbin from '@/assets/MB.svg'
import { useEffect, useRef } from 'react'
import Globe, { GlobeMethods } from 'react-globe.gl'

const markerSvg = `<img src='${microbin}'/>`

// Gen random data
const generateRandomData = (num: number) =>
  [...Array(num).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    size: 8 + Math.random() * 110,
    color: ['#182cc5', '#1f816c', '#928263'][Math.round(Math.random() * 2)]
  }))

const glData = generateRandomData(14)

const RoutedGlobeModel = () => {
  const globeEl = useRef<GlobeMethods | undefined>()
  const { width } = useWindowDimensions()
  const myData = [
    {
      startLat: 13.0827,
      startLng: 80.2707,
      endLat: 37.7749295,
      endLng: -122.4194155,
      color: ['#1EB0FF', '#0071E4'],
      stroke: 0.2,
      scale: 0.3,
      time: 3400
    },
    {
      startLat: 37.7749295,
      startLng: -122.4194155,
      endLat: 51.5073509,
      endLng: -0.1277583,
      color: ['#C49CFF', '#A384D6'],
      stroke: 0.2,
      scale: 0.3,
      time: 3400
    },
    {
      startLat: 40.712776,
      startLng: -74.005974,
      endLat: 35.689487,
      endLng: 139.691706,
      color: ['#FFB6C1', '#FF91A4'],
      stroke: 0.2,
      scale: 0.3,
      time: 3800
    },
    {
      startLat: 48.856614,
      startLng: 2.3522219,
      endLat: -33.8688197,
      endLng: 151.2092955,
      color: ['#D46A6A', '#B85858'],
      stroke: 0.2,
      scale: 0.3,
      time: 2800
    },
    {
      startLat: -34.6036844,
      startLng: -58.3815591,
      endLat: 1.352083,
      endLng: 103.819836,
      color: ['#1EB0FF', '#0071E4'],
      stroke: 0.2,
      scale: 0.3,
      time: 3400
    },
    {
      startLat: 55.755826,
      startLng: 37.6173,
      endLat: -34.6036844,
      endLng: -58.3815591,
      color: ['#1EB0FF', '#483D8B'],
      stroke: 0.2,
      scale: 0.3,
      time: 3200
    },
    {
      startLat: -1.2921,
      startLng: 36.8219,
      endLat: -33.9249,
      endLng: 18.4241,
      color: ['#D46A6A', '#483D8B'],
      stroke: 0.2,
      scale: 0.3,
      time: 2300
    }
  ]

  const gData = myData
    .map((e) => [
      {
        lat: e.startLat,
        lng: e.startLng,
        maxR: 1,
        propagationSpeed: 1 / 4,
        repeatPeriod: e.time * 1.5,
        ringcolor: e.color[0]
      },
      {
        lat: e.endLat,
        lng: e.endLng,
        maxR: 1,
        propagationSpeed: 1 / 4,
        repeatPeriod: e.time,
        ringcolor: e.color[1]
      }
    ])
    .flat()

  useEffect(() => {
    if (globeEl == undefined) {
      return
    }
    globeEl!.current!.controls().autoRotate = true
    globeEl!.current!.controls().autoRotateSpeed = 2
    globeEl!.current!.controls().enableZoom = false
    globeEl!.current!.controls().enablePan = false
    // globeEl!.current!.controls().minPolarAngle = 1.4;
    // globeEl!.current!.controls().maxPolarAngle = 1.4;
    globeEl!.current!.pointOfView({
      altitude: 1.8
    })
  }, [])
  interface Places {
    [key: string]: any
  }
  const places: Places[] = myData
    .map((e) => [
      {
        latitude: e.startLat,
        longitude: e.startLng,
        color: e.color[0]
      },
      {
        latitude: e.endLat,
        longitude: e.endLng,
        color: e.color[1]
      }
    ])
    .flat()

  return (
    <div className="">
      <Globe
        htmlElementsData={glData}
        htmlElement={(d: any) => {
          const el = document.createElement('div')
          el.innerHTML = markerSvg
          el.style.color = d.color
          el.style.width = `${d.size}px`

          el.style['pointer-events'] = 'auto'
          el.style.cursor = 'pointer'
          el.onclick = () => console.info(d)
          return el
        }}
        ref={globeEl}
        globeImageUrl={globeImage}
        arcsData={myData}
        arcColor={'color'}
        arcStroke={0.4}
        arcDashGap={1}
        arcDashInitialGap={1}
        arcDashLength={1}
        arcAltitudeAutoScale="scale"
        arcDashAnimateTime="time"
        backgroundColor="#00000000"
        height={width < 700 ? width - 50 : 600}
        width={width < 700 ? width - 50 : 600}
        atmosphereColor="#1EB0FF"
        ringsData={gData}
        ringColor={(d: any) => d.ringcolor}
        ringMaxRadius="maxR"
        ringPropagationSpeed="propagationSpeed"
        ringRepeatPeriod="repeatPeriod"
        labelsData={places}
        labelLat={(d: Places) => d.latitude}
        labelLng={(d: Places) => d.longitude}
        labelText={(_) => ''}
        labelSize={(_) => 2}
        labelDotRadius={(_) => 0.5}
        labelColor={(d: Places) => d.color}
        labelResolution={2}
      />
    </div>
  )
}
export default RoutedGlobeModel
