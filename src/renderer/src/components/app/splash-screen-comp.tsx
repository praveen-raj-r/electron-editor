import { useState } from 'react'
import { motion } from 'framer-motion'
import * as LucideIcon from 'lucide-react'
import { ChevronRight } from 'lucide-react'

import heroBtn from '@/assets/hero-btn.png'
import heroTabsBtn from '@/assets/hero-tabs-btn.png'
import microbinLogo from '@/assets/macrobinlogo.png'
import fleetImage from '@/assets/three-dashboard.png'
import siteImage from '@/assets/site.png'
import SOMImage from '@/assets/som.png'
import SBCImage from '@/assets/sbc.png'

// Component for tab content
const CardContent = ({ image, title }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="w-full"
  >
    <div className="flex flex-col gap-5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#1d1d1d] flex flex-col gap-3 p-3 shadow-2xl rounded-[15px]"
      >
        <img
          src={image}
          alt="Dashboard"
          className="h-32 w-full rounded-md object-cover"
          onError={(e) => (e.currentTarget.src = 'fallback-image-path')}
        />
        <div className="p-1">
          <h1 className="text-lg">{title}</h1>
          <p className="text-[12px] text-[#999696]">Custom IoT Dashboard Builder</p>
        </div>
      </motion.div>
    </div>
  </motion.div>
)

// Tabs data array
const tabs = [
  {
    name: 'DaaS Fleet',
    icon: 'Image',
    content: <CardContent image={fleetImage} title="Fleet Monitoring System" />
  },
  {
    name: 'DaaS Site',
    icon: 'Image',
    content: <CardContent image={siteImage} title="Site Monitoring System" />
  },
  {
    name: 'Black Gold',
    icon: 'Board',
    content: <CardContent image={SOMImage} title="mbXSoM - BlackGold" />
  },
  {
    name: 'Black Hole',
    icon: 'Board',
    content: <CardContent image={SBCImage} title="mbXSBC - BlackHole" />
  },
  {
    name: 'More',
    icon: 'About',
    content: <CardContent image={fleetImage} title="More Monitoring System" />
  }
]

const SplashScreenComp = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].name)

  return (
    <div className="w-full flex border rounded-[10px] border-[#353535] z-10 overflow-hidden">
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}
        className="w-80 rounded-s-[10px] bg-[#000000] border-r border-[#252525]"
      >
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </motion.div>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.3 }}
        className="p-10 w-full rounded-e-[10px] bg-[#131313] flex justify-center items-center h-[470px]"
      >
        {tabs.find((tab) => tab.name === activeTab)?.content}
      </motion.div>
    </div>
  )
}

const Sidebar = ({ activeTab, setActiveTab }) => (
  <div className="px-5 pt-[5%] flex flex-col gap-6">
    <Logo />
    <ul className="flex flex-col gap-1 list-none">
      {tabs.map((tab, index) => (
        <SidebarItem
          key={`sidebar-item-${index}`}
          name={tab.name}
          icon={tab.icon}
          active={activeTab === tab.name}
          onClick={setActiveTab}
        />
      ))}
    </ul>
  </div>
)

const Logo = () => (
  <div className="w-full flex justify-center items-center py-2">
    <motion.img
      src={microbinLogo}
      alt="Microbin Logo"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      onError={(e) => (e.currentTarget.src = 'fallback-logo-path')}
    />
  </div>
)

const SidebarItem = ({ name, icon, active, onClick }) => {
  const IconComponent = LucideIcon[icon] || LucideIcon.AlertCircle

  return (
    <motion.li
      onClick={() => onClick(name)}
      className={`p-[3%] rounded-lg cursor-pointer`}
      style={{ backgroundImage: active ? `url(${heroTabsBtn})` : '' }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex justify-between">
        <div className="flex gap-3">
          <div
            style={{ backgroundImage: `url(${heroBtn})` }}
            className="flex justify-center items-center size-6 rounded-[30%] bg-cover z-10 p-1"
          >
            <IconComponent />
          </div>
          <p className={`${active ? 'text-white' : 'text-gray-400'}`}>{name}</p>
        </div>
        <div className="flex justify-center items-center">
          <ChevronRight size={14} />
        </div>
      </div>
    </motion.li>
  )
}

export default SplashScreenComp
