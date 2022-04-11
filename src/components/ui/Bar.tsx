import classnames from 'classnames'

interface BarProps {
  fixed?: boolean
  backgroundClass?: string
  layoutClass?: string
  heightClass?: string
  paddingX?: string
  zIndexClass?: string
  className?: string
  children: JSX.Element|JSX.Element[]
}
export default function Bar ({
  fixed = false,
  className = '',
  zIndexClass = Bar.Z_DEFAULT,
  backgroundClass = Bar.BG_DEFAULT,
  heightClass = Bar.H_DEFAULT,
  layoutClass = 'flex justify-between items-center',
  paddingX = Bar.PX_DEFAULT,
  children
}: BarProps): JSX.Element {
  return (
    <div className={
      classnames(
        fixed ? 'fixed top-0 left-0' : '',
        zIndexClass,
        heightClass,
        layoutClass,
        backgroundClass,
        paddingX,
        className
      )
}
    >
      {children}
    </div>
  )
}
Bar.Z_DEFAULT = 'z-10'
Bar.Z_HIGH = 'z-30'
Bar.H_DEFAULT = 'h-12'
Bar.H_LG = 'h-16' /* Large screen */
Bar.BG_DEFAULT = 'bg-gray-50'
Bar.JUSTIFY_LEFT = 'flex no-wrap justify-start items-center max-w-screen-2xl'
Bar.JUSTIFY_BETWEEN = 'flex no-wrap justify-between items-center max-w-screen-2xl w-full'
Bar.PX_DEFAULT = 'px-4'
