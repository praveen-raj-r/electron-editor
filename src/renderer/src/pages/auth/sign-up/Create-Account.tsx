import microbin from '@/assets/microbin-full-white.svg'
import threeDashboard from '@/assets/three-dashboard.png'
import CreateAccountForm from '@/forms/auth/sign-up/CreateAccount-Form'


const CreateAccount = () => {
  return (
    <div className="h-full grid lg:grid-cols-2">
      <LeftBox />
      <RightBox />
    </div>
  )
}

function LeftBox() {
  return (
    <div className=" hidden lg:flex justify-center items-center p-10 bg-[#006cea]">
      <div>
        <div className="relative z-20 flex items-center gap-2 font-medium">
          <img src={microbin} />
        </div>
        <div className="relative z-20 my-3 2xl:my-10">
          <h1  className="text-4xl text-center gradient-title-white 2xl:text-4xl lg:text-left 2xl:mb-10 mb-4">
            Fleet | Site | Cloud IoT Telemetry Dashboard Builder
          </h1>

          <p className="mb-2 text-xl text-center text-gray-200 lg:text-left">
            Are you looking to elevate the safety and efficiency of your industrial site? Discover
            the power of our Fleet/Site Cloud IoT Dashboard Builder
          </p>
        </div>
        <div className="relative">
          <img className="rounded-[15px] h-10 md:h-auto" src={threeDashboard} />
        </div>
      </div>
    </div>
  )
}

function RightBox() {
  return (
    <div className="border flex justify-center items-center">
      <div className="w-[calc(100%-50px)] min-[450px]:w-[400px] sm:w-[500px] text-center sm:space-y-4 text-white">
        <div className="flex items-center justify-center mb-4">
          <img src={microbin} alt="logo" />
        </div>
        <h1 className="text-xl sm:text-3xl font-semibold tracking-tight lg:hidden gradient-title">
          Fleet | Site | Cloud IoT Telemetry Dashboard Builder
        </h1>

        <p className="text-lg sm:text-2xl lg:text-xl pb-1 font-medium">
          Welcome. Let's embark on an adventure
        </p>
        <p className="sm:text-lg pb-1 font-medium">
          {' '}
          Join us on a journey to innovate, inspire, and achieve greatness together.
        </p>
        <CreateAccountForm />
      </div>
    </div>
  )
}

export default CreateAccount
