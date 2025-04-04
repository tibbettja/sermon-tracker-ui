import * as React from 'react'

const useContainerDimensions = (contextRef: React.RefObject<HTMLDivElement | null>) => {
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 })

  React.useEffect(() => {
    const getDimensions = () => ({
      width: contextRef?.current?.offsetWidth || 0,
      height: contextRef?.current?.offsetHeight || 0
    })

    const handleResize = () => {
      setDimensions(getDimensions())
    }

    if (contextRef?.current) {
      setDimensions(getDimensions())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [contextRef])

  return dimensions
}

export { useContainerDimensions }
