import microbinLogo from '@/assets/microbin-full-white.svg'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useMoveBack } from '@/hooks/use-move-back'
import { Loader } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGlobalState } from '@/context/global-state-context' // Global state management context

function Logout() {
  const avatar = 'https://github.com/shadcn.png'
  const name = 'Microbin'
  const { getValue } = useGlobalState() // Get global state values
  const [isLoggingOut, setIsLogginOut] = useState(false)
  const [isAllAccountsLoggingOut, setIsAllAccountsLogginOut] = useState(false)

  const navigate = useNavigate()
  const moveBack = useMoveBack()

  function logout() {
    setIsLogginOut(true)
    setTimeout(function () {
      navigate('/')
    }, 2000)
  }

  function logoutAllAccounts() {
    setIsAllAccountsLogginOut(true)
    setTimeout(function () {
      navigate('/')
    }, 2000)
  }

  return (
    <div className="h-full flex justify-center items-start bg-[#0f1014]">
      <div className="flex flex-col items-center justify-center gap-20 dark">
        <div className="flex w-[300px] flex-col items-center justify-center gap-4 mt-20">
          <img className="w-min h-min" src={microbinLogo} alt="Logo" />

          <h3 className="text-xl font-normal">Select account to sign out</h3>

          <Card className="flex items-center justify-between w-full gap-4 p-4 border border-white">
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8 rounded-lg">
                <AvatarImage src={avatar} alt={name} />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div>
                <h6 className="text-sm">Signed in as</h6>
                <h6 className="text-lg font-semibold">{getValue('domainName')}</h6>{' '}
              </div>
            </div>

            <Button
              disabled={isAllAccountsLoggingOut || isLoggingOut}
              onClick={logout}
              size="sm"
              variant="secondary"
              className="text-red-400"
            >
              {isLoggingOut ? (
                <>
                  <Loader className="animate-spin" />
                </>
              ) : (
                'Sign out'
              )}
            </Button>
          </Card>

          <Button
            disabled={isAllAccountsLoggingOut || isLoggingOut}
            onClick={logoutAllAccounts}
            variant="destructive"
            className="w-full"
          >
            {isAllAccountsLoggingOut ? (
              <>
                <Loader className="animate-spin" /> Signing out
              </>
            ) : (
              'Sign out from all accounts'
            )}
          </Button>

          <Button
            disabled={isAllAccountsLoggingOut || isLoggingOut}
            onClick={moveBack}
            variant="secondary"
            className="w-full"
          >
            Go back
          </Button>
        </div>
        <div className="flex justify-center flex-wrap gap-4 text-xs text-[#74b9ff]">
          <Links>Terms</Links>
          <Links>Privacy</Links>
          <Links>Docs</Links>
          <Links>Contact Microbin Support</Links>
          <Links>Manage cookies</Links>
          <Links>Do not share my personal information</Links>
        </div>
      </div>
    </div>
  )
}

function Links({ children }) {
  return (
    <Link to="" className="transition duration-200 hover:underline hover:text-blue-500">
      {children}
    </Link>
  )
}

export default Logout
