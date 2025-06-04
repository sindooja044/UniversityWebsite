import React from 'react'
import './VideoPlayer.css'
import v1 from '../../assets/v1.mp4'
const VideoPlayer = () => {
  return (
    <div className='video-player hide'>
      <video src={v1} autoPlay muted controls/>
    </div>
  )
}

export default VideoPlayer
