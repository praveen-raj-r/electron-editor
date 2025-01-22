import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import SignUpOTPForm from './SignUpOtpForm'

// DialogComp component to show the account verification dialog with OTP form
function DialogComp({
  setLoading,
  email,
  showDialog,
  setShowDialog
}: {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  email: string
  showDialog: boolean
  setShowDialog: (show: boolean) => void
}) {
  return (
    <Dialog open={showDialog}>
      <DialogContent className="w-[calc(100%-25px)] sm:w-full [&>button]:hidden">
        <DialogHeader>
          <DialogTitle className="text-center sm:text-2xl mb-3">Account Verification</DialogTitle>
          {/* OTP form for account verification */}
          <SignUpOTPForm setLoading={setLoading} email={email} setShowDialog={setShowDialog} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default DialogComp
