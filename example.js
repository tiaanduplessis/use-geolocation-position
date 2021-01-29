import React from 'react'

import { useCurrentPosition, useWatchPosition } from 'use-geolocation'

export default function App () {
  const currentPosition = useCurrentPosition({
    // Default config
    maximumAge: Infinity,
    timeout: 0,
    enableHighAccuracy: true
  })
  const watchedPosition = useWatchPosition({
    // Default config
    maximumAge: Infinity,
    timeout: 0,
    enableHighAccuracy: true
  })

  return (
    <div className='App'>
      <p>{JSON.stringify(currentPosition, null, 2)}</p>
      <p>{JSON.stringify(watchedPosition, null, 2)}</p>
    </div>
  )
}
