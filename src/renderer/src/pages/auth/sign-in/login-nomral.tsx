import microbinLogo from '@/assets/microbin-full-white.svg'
import threeDashboard from '@/assets/three-dashboard.png'
import { useTheme } from '@/components/layout-components/theme-provider'
import { CardFooter } from '@/components/ui/card'
import Particles from '@/components/ui/particles'
import LoginForm from '@/forms/auth/sign-in/login-form'

import { FC } from 'react'

function Login() {
  const { setTheme } = useTheme()
  setTheme('dark')

  return (
    <div className=" relative h-full w-screen lg:grid lg:grid-cols-2 lg:px-0">
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
    </div>
  )
}
const LeftBox: FC = () => {
  return (
    <div className="relative md:max-h-screen overflow-hidden flex-col bg-[#262626] p-10 text-white dark:border-r hidden lg:flex">
      <div>
        <div className="relative z-20 flex items-center gap-2 font-medium">
          <img src={microbinLogo} />
        </div>
        <div className="relative z-20 my-3 2xl:my-10">
          <h1 className="text-2xl text-center gradient-title-white 2xl:text-6xl lg:text-left 2xl:mb-10 mb-4">
            Fleet | Site | Cloud IoT Telemetry Dashboard Builder
          </h1>

          <p className="mb-2 text-xl text-center text-gray-200 lg:text-left">
            Looking for a way to enhance the safety and efficiency of your industrial site? Fleet /
            Site Cloud IoT Dashboard Builder
          </p>
        </div>
        <div className="relative">
          <img className="rounded-[15px] h-10 md:h-auto" src={threeDashboard} />
        </div>
      </div>
    </div>
  )
}

const RightBox: FC = () => {
  return (
    <div className="lg:p-8 max-h-screen h-screen flex items-center justify-center bg-black">
      <div className="w-[calc(100%-50px)] min-[450px]:w-[400px] sm:w-[500px] space-y-4 text-white">
        <div className="flex items-center justify-center mb-4">
          <img src={microbinLogo} alt="logo" />
        </div>
        <h1 className="sm:text-3xl text-xl font-semibold tracking-tight lg:hidden gradient-title text-center">
          Fleet | Site | Cloud IoT Telemetry Dashboard Builder
        </h1>

        <p className="text-lg sm:text-2xl lg:text-xl pb-1 font-medium text-center">
          Welcome. Let’s get started.
        </p>
        <p className="text-sm sm:text-lg pb-1 font-medium text-center">
          Enter Login Credentails to access your account.
        </p>
        <LoginForm />
        <CardFooter className="p-0 flex justify-center !mt-0 ">
          <div className="p-4 text-[14px] flex items-center gap-2 pt-2">
            <p className="mb-1"> Secured by </p>
            <img className="h-[16px]" src={microbinLogo} />
          </div>
        </CardFooter>
      </div>
    </div>
  )
}
export default Login
