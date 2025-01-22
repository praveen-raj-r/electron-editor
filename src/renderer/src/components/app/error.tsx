export function Error({ children, className = '' }) {
  return <div className={` ${className} text-red-500 pl-3 -mt-1 text-sm`}>{children}</div>
}
