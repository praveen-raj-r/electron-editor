import { FancySwitch } from '@omit/react-fancy-switch'
import { SetStateAction, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const SettingsNavTabs = ({ settings }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  // Options for navigation tabs
  const options = useMemo(() => settings, [])

  // Get the default selected option based on the current URL
  const defaultOption = useMemo(() => {
    return options.find((option: { url: string }) => option.url === pathname)?.key || options[0].key
  }, [pathname, options])

  const [selectedOption, setSelectedOption] = useState(defaultOption)

  // Handle tab change
  const onTabChange = (key: SetStateAction<string>) => {
    setSelectedOption(key)
    const selectedPath = options.find(
      (option: { key: SetStateAction<string> }) => option.key === key
    )?.url
    if (selectedPath) navigate(selectedPath)
  }

  return (
    <FancySwitch
      options={options}
      labelKey="label"
      valueKey="key"
      value={selectedOption}
      onChange={onTabChange}
      className="flex flex-col p-2 gap-2"
      highlighterClassName="bg-primary rounded-[0.5rem]"
      radioClassName="relative mx-2 flex h-9 cursor-pointer items-center justify-start rounded-[0.5rem] px-3.5 text-sm font-medium transition-colors focus:outline-none dark:data-[checked]:text-black data-[checked]:text-white"
      highlighterIncludeMargin={true}
    />
  )
}

export default SettingsNavTabs
