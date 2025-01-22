/* eslint-disable react/prop-types */
import React from 'react'
import classNames from 'classnames'

interface ButtonProps {
  label?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'action'
  buttonName?: string // Button-specific name (e.g., for identification)
  color?: string // Custom background color
  disabled?: boolean
  loading?: boolean
  width?: string // Custom width
  height?: string // Custom height
}

const ActionButton: React.FC<ButtonProps> = ({
  label = 'Submit', // Default label
  onClick,
  buttonName,
  color = '#007bff', // Default to blue
  disabled = false,
  loading = false,
  width = '160px', // Default width
  height = '40px' // Default height
}) => {
  const textColor = '#ffffff' // White text for blue background

  const buttonClasses = classNames(
    'rounded-lg font-medium flex items-center justify-center transition-all duration-200',
    {
      'cursor-pointer hover:opacity-80': !disabled && !loading, // Add hover effect
      'cursor-not-allowed opacity-50': disabled || loading // Disabled styling
    }
  )

  return (
    <button
      className={buttonClasses}
      onClick={!disabled && !loading ? onClick : undefined}
      style={{
        backgroundColor: color, // Use custom color or default blue
        color: textColor, // White text
        border: 'none', // Remove borders
        width, // Custom width
        height // Custom height
      }}
      disabled={disabled || loading}
      aria-label={label || 'button'}
      data-button-name={buttonName}
    >
      {loading ? (
        <span
          className="loader border-2 border-white border-t-transparent rounded-full animate-spin"
          style={{
            width: `calc(${height} * 0.5)`, // Loader size relative to height
            height: `calc(${height} * 0.5)`
          }}
        />
      ) : (
        label
      )}
    </button>
  )
}

export default ActionButton
