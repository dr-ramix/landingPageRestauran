import React from 'react';
import{ BsFillPlayFill, BsPauseFill } from "react-icons/bs"
import './Intro.css';
import { meal } from '../../constants';
import { useState } from 'react';



const Intro = () => {

  /*The useRef Hook allows you to persist values between renders.

  It can be used to store a mutable value that does not cause a re-render when updated.

  It can be used to access a DOM element directly. 

  useRef() only returns one item. It returns an Object called current.
  
  In React, we can add a ref attribute to an element to access it directly in the DOM.*/


  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = React.useRef();

  const handleVideo = () => {
    setPlayVideo((prevplayVideo) => !prevplayVideo)

    //The HTMLMediaElement.pause() method will pause playback of the media,
    //if the media is already in a paused state this method will have no effect.
    
    if(playVideo) {
      vidRef.current.pause()
    } else {
      vidRef.current.play()
    }
  }

  return(
    <div className='app__video'>
    <video
     src={meal}
     ref={vidRef}
     type="video/mp4"
     loop
     controls={false}
     muted
      />
      <div className='app__video-overlay flex__center'>
        <div
         className='app__video-overlay_circle flex__center'
         onClick={handleVideo}
         >

          {
            playVideo 
           ?  <BsPauseFill color="#fff" fontSize={30} />
           : <BsFillPlayFill color="#fff" fontSize={30} /> 
           }

         </div>
      </div>
  </div>
  )
};

export default Intro;
