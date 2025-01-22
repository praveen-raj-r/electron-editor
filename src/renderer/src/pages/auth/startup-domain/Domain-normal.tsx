import mircobinLogo from '@/assets/microbin-full-white.svg'
import bgImage from '@/assets/three-dashboard.png'
import Particles from '@/components/ui/particles'
import DomainForm from '@/forms/auth/startup-domain/DomainForm'

import { FC } from 'react'

const Domain: FC = () => {
  return (
    <div className="container relative max-h-screen h-screen lg:grid max-w-full lg:grid-cols-2 lg:px-0">
      <LeftBox />
      <RightBox />
      <Particles
        size={1}
        className="absolute inset-0"
        quantity={100}
        ease={10}
        staticity={10}
        color="#ffffff"
        refresh
      />
      s
    </div>
  )
}
const LeftBox: FC = () => {
  return (
    <div className="relative md:max-h-screen overflow-hidden flex-col bg-[#262626] p-10 text-white dark:border-r hidden lg:flex">
      <div>
        <div className="relative z-20 flex items-center gap-2 font-medium">
          <img src={mircobinLogo} />
        </div>
        <div className="relative z-20 my-3 2xl:my-10">
          <h1 className="text-2xl text-center gradient-title 2xl:text-4xl lg:text-left 2xl:mb-10 mb-4">
            Fleet | Site | Cloud IoT Telemetry Dashboard Builder
          </h1>

          <p className="mb-2 text-xl text-center text-gray-200 lg:text-left">
            Looking for a way to enhance the safety and efficiency of your industrial site? Fleet /
            Site Cloud IoT Dashboard Builder
          </p>
        </div>
        <div className="relative">
          <img className="rounded-[15px] h-10 md:h-auto" src={bgImage} />
        </div>
      </div>
    </div>
  )
}

const RightBox: FC = () => {
  return (
    <div className="lg:p-8 max-h-screen h-screen flex items-center justify-center bg-black">
      <div className="w-[calc(100%-50px)] min-[450px]:w-[400px] sm:w-[500px] text-center space-y-4 text-white">
        <div className="flex items-center justify-center mb-4">
          <img src={mircobinLogo} alt="logo" />
        </div>
        <h1 className="text-3xl font-semibold tracking-tight lg:hidden gradient-title">
          Fleet | Site | Cloud IoT Telemetry Dashboard Builder
        </h1>

        <p className="text-2xl lg:text-xl pb-1 font-medium">Welcome back ! Enter your domain</p>
        <p className="text-lg pb-1 font-medium">Connect to Microbin with:</p>
        <DomainForm />
      </div>
    </div>
  )
}
export default Domain
