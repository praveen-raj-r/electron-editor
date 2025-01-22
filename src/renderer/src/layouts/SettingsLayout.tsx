import SettingsNavTabs from '@/components/app/settings-nav-tabs' // Import navigation tabs for settings
import { Separator } from '@/components/ui/separator' // Import separator to create separation between sections
import { Outlet, useLocation } from 'react-router-dom' // Import Outlet for nested routing and useLocation for current URL
import { FC } from 'react'

interface Setting {
  key: string
  label: string
  url: string
  desc: string
}

const settings: Setting[] = [
  {
    key: 'Profile',
    label: 'Profile',
    url: '/app/settings/profile',
    desc: 'Manage your Profile settings.'
  },
  {
    key: 'Shift',
    label: 'Shift',
    url: '/app/settings/shift',
    desc: 'Update your shift settings.'
  },
  {
    key: 'Notification',
    label: 'Notification',
    url: '/app/settings/notification',
    desc: 'Manage your notification settings.'
  },
  {
    key: 'Account',
    label: 'Account',
    url: '/app/settings/account',
    desc: 'Manage your account settings.'
  }
]

const SettingsLayout: FC = () => {
  const { pathname } = useLocation()

  // Find the current setting from the URL path
  const currentSetting = settings.find((setting) => setting.url === pathname)

  // If no setting is found for the current URL, fall back to default values
  const label = currentSetting ? currentSetting.label : 'Settings'
  const desc = currentSetting ? currentSetting.desc : 'Manage your account settings'

  return (
    <div className="flex h-full">
      {/* Sidebar with SettingsNavTabs */}
      <div className="border rounded-[10px] min-w-[200px] h-[calc(100vh-99px)] p-1 m-2">
        <SettingsNavTabs settings={settings} />
      </div>

      {/* Main content area */}
      <section className="m-4 w-full">
        {/* Title of the current settings page */}
        <h1 className="capitalize text-3xl">{label} - Settings</h1>

        {/* Description of the current settings page */}
        <h2 className="capitalize text-base mt-1">{desc}</h2>

        {/* Separator between the header and the content */}
        <Separator className="mt-5" />

        {/* Outlet for rendering nested routes */}
        <div>
          <Outlet /> {/* Nested content for selected settings */}
        </div>
      </section>
    </div>
  )
}

export default SettingsLayout
