import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useInView } from 'react-intersection-observer'

const Video = ({ url, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [ref, inView] = useInView({
    threshold: 0.25
  })

  useEffect(() => {
    if (inView) {
      setIsLoaded(true)

      if (isLoaded) {
        console.log('play')
        setIsPlaying(true)
      }
    } else if (!inView && isLoaded) {
      console.log('pause')
      setIsPlaying(false)
    }
  }, [inView])

  return (
    <div ref={ref} {...props}>
      {inView || isLoaded ? (
        <ReactPlayer
          width="100%"
          height="100%"
          url={url}
          controls
          playing={isPlaying}
          muted
          loop
        />
      ) : null}
    </div>
  )
}

export default Video
