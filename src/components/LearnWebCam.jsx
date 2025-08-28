import React, { useCallback, useRef, useState } from 'react'
import Webcam from 'react-webcam'

const LearnWebCam = () => {
    const [imgSrc,setImgSrc]=useState(null);
    const webcamRef=useRef(null);
    const Capture=useCallback(()=>{
        const abc=webcamRef.current.getScreenshot();
        setImgSrc(abc);
    },[webcamRef]);

    const Retake=()=>{
      setImgSrc(null);
    }
  return (
    <div>
        <h1>WebCam </h1>
        {/* {condtion ? ():()} */}
        {imgSrc ? (
          <img src={imgSrc}/>
          ):(
          <Webcam ref={webcamRef}/>
          )} 

        {imgSrc ? ( 
          <button type='button' onClick={Retake}>ReTake Photo</button>
          ):(
             <button type='button' onClick={Capture}>Take Photo</button>
          )}
        
       
        
        
    </div>
  )
}

export default LearnWebCam;