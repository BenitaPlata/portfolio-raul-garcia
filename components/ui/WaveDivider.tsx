interface WaveDividerProps {
  fill: string
  flip?: boolean
  className?: string
}

export default function WaveDivider({ fill, flip = false, className = '' }: WaveDividerProps) {
  const path = flip
    ? 'M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z'
    : 'M0,40 C480,0 960,80 1440,40 L1440,80 L0,80 Z'

  return (
    <div className={`absolute bottom-0 left-0 right-0 leading-none ${className}`}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-16 sm:h-20 block"
        aria-hidden="true"
      >
        <path d={path} fill={fill} />
      </svg>
    </div>
  )
}
