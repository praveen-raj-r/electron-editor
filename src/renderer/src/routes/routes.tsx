// Import necessary components and pages
import AppLayout from '@/layouts/AppLayout' // Main layout for authenticated routes
import MainLayout from '@/layouts/MainLayout' // Basic layout for non-authenticated routes
import SettingsLayout from '@/layouts/SettingsLayout' // Layout for settings pages
import Domain from '@/pages/auth/startup-domain/Domain-normal' // Startup domain page for initial setup
import ForgotPassword from '@/pages/auth/forgot-password/ForgotPassword' // Forgot password page
import Login from '@/pages/auth/sign-in/login-nomral' // Login page for authentication
import Dashboard from '@/pages/dashboard/Dashboard' // Dashboard page for logged-in users
import PageNotFound from '@/pages/misc/PageNotFound' // Page not found route
import AccountSettings from '@/pages/settings/AccountSettings' // Account settings page
import NotificationSettings from '@/pages/settings/NotificationSettings' // Notification settings page
import ProfileSettings from '@/pages/settings/ProfileSettings' // Profile settings page
import ShiftSettings from '@/pages/settings/ShiftSettings' // Shift settings page
import Logout from '@/pages/auth/log-out/Logout' // Logout page for signing out users
import { createHashRouter } from 'react-router-dom' // React Router function to create routes
import CreateAccount from '@/pages/auth/sign-up/Create-Account' // Account creation page
import EditorLayout from '@/layouts/EditorLayout'
import PagePreview from '@/pages/preview/page-preview'
import Support from '@/pages/support/Support'
import Documentation from '@/pages/support/Documentation'
import CreateCustomer from '@/pages/customer/CreateCustomer'
import ConfigCustomer from '@/pages/customer/ConfigCustomer'
import ViewCustomer from '@/pages/customer/ViewCustomer'
import ViewFleet from '@/pages/fleet/ViewFleet'
import CreateFleet from '@/pages/fleet/CreateFleet'
import ConfigFleet from '@/pages/fleet/ConfigFleet'
import GeneralReport from '@/pages/report/GeneralReport'
import ConsolidatedReport from '@/pages/report/ConsolidatedReport'
import AlertReport from '@/pages/report/AlertReport'

// Define the routes and their respective components
const routes = createHashRouter([
  {
    element: <MainLayout />, // Main layout that wraps public pages
    children: [
      // { path: '/', element: <SplashScreen /> },
      { path: '/', element: <Domain /> },
      { path: '/login', element: <Login /> },
      { path: '/create-account', element: <CreateAccount /> },
      { path: '/reset-password', element: <ForgotPassword /> },
      { path: '/logout', element: <Logout /> },

      { path: '/editor', element: <EditorLayout /> },
      { path: '/preview-page', element: <PagePreview /> },

      // Protected routes with authenticated layout
      {
        element: <AppLayout />, // Authenticated layout that wraps dashboard and settings pages
        children: [
          { path: '/dashboard', element: <Dashboard /> }, // Main dashboard page
          { path: '/support', element: <Support /> },
          { path: '/document', element: <Documentation /> },
          { path: '/create-customer', element: <CreateCustomer /> },
          { path: '/config-customer', element: <ConfigCustomer /> },
          { path: '/view-customer', element: <ViewCustomer /> },
          { path: '/create-fleet', element: <CreateFleet /> },
          { path: '/config-fleet', element: <ConfigFleet /> },
          { path: '/view-fleet', element: <ViewFleet /> },
          { path: '/general-report', element: <GeneralReport /> },
          { path: '/consolidated-report', element: <ConsolidatedReport /> },
          { path: '/alert-report', element: <AlertReport /> },
          {
            element: <SettingsLayout />, // Layout for all settings pages
            children: [
              { path: '/app/settings/profile', element: <ProfileSettings /> },
              { path: '/app/settings/shift', element: <ShiftSettings /> },
              { path: '/app/settings/notification', element: <NotificationSettings /> },
              { path: '/app/settings/account', element: <AccountSettings /> }
            ]
          }
        ]
      },
      { path: '*', element: <PageNotFound /> } //* Wildcard route for page not found
    ]
  }
])

// Export routes for use in other parts of the application
export default routes
