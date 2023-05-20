import React,{ useEffect, useRef, useState } from 'react'
import classes from './meetroom.module.scss';

function index() {

    const constraints = window.constraints = {audio: true,video: true};
    const [mediaStream,setMediaStream] = useState(null)
    const [cameraStatus,setCameraStatus] = useState(false);
    const [micStatus,setMicStatus] = useState(false);
    const userVideo = useRef(null);
    const handleSucces = (stream) => {
        console.log("success",stream)
    }

    const handleError = (err) => {
        alert(err)
    }

    const handleInitialCall = async () => {
        try{
            const stream =  await navigator.mediaDevices.getUserMedia(constraints);
            setMediaStream(stream);
            let video = userVideo.current;
            video.srcObject = stream;
            video.play();
            handleSucces(stream);
            return null;
        }catch(error){
            handleError(error);
        }
    }

    const unmute = () => {
        if (mediaStream) {
            const audioTrack = mediaStream.getAudioTracks()[0];
            audioTrack.enabled = true;
          }  
          setMicStatus(true)
    }

    const mute = () => {
        if (mediaStream) {
            const audioTrack = mediaStream.getAudioTracks()[0];
            audioTrack.enabled = false;
          }
          setMicStatus(false)
    }

    const playCamera = () => {
        if (mediaStream) {
            const videoTrack = mediaStream.getVideoTracks()[0];
            videoTrack.enabled = true;
          }
          setCameraStatus(true);
    }
    const stopCamera = () => {
        if (mediaStream) {
            const videoTrack = mediaStream.getVideoTracks()[0];
            videoTrack.enabled = false;
          }
          setCameraStatus(false)
    }

      useEffect(() => {
        handleInitialCall()
      },[]) 

  return (
    <div className={classes.roomContainer}>
        <div className={classes.screenSide}>
            <div className={classes.screenHeader}>
                <div className={classes.mainScreen} id="mainScreen">
                    {/* <span>S</span> */}
                    <video ref={userVideo} height="200" width={200}/>
                    <div className={classes.actionButtons}>
                        <button onClick={playCamera} className={cameraStatus && classes.active}>start camera</button>
                        <button onClick={stopCamera}>Stop camera</button>
                        <button onClick={mute}>Mute</button>
                        <button onClick={unmute} className={micStatus && classes.active}>UnMute</button>
                        
                    </div>
                </div>
                <div className={classes.othersScreen}>
                    <div><span>A</span></div>
                    <div><span>B</span></div>
                    <div><span>C</span></div>
                    <div><span>D</span></div>
                </div>
            </div>
            <div className={classes.chatSide}>
               <div className={classes.chatHeader}>
                    <h2>Chat</h2>
                    <span>x</span>
               </div>
               <div className={classes.chatBody}>
                    
               </div>
               <div className={classes.chatFooter}>
                    <input type="text" placeholder="Type Somthing..." />
               </div>
            </div>            
        </div>
        <div className={classes.screenFooter}>
            <div className={classes.volumeBtn}>
                <div>
                    <span>icon</span>
                    <p>Volume</p>
                </div>
            </div>
            <div className={classes.otherBtn}>
                <div>
                    <span>icon</span>
                    <p>Participant</p>
                </div>
                <div>
                    <span>icon</span>
                    <p>Chat</p>
                </div>
                <div>
                    <span>icon</span>
                    <p>Jamboard</p>
                </div>
                <div>
                    <span>icon</span>
                    <p>Screen Share</p>
                </div>
                <div>
                    <span>icon</span>
                    <p>display</p>
                </div>

            </div>
            <div className={classes.moreBtn}>
                <div>
                    <span>icon</span>
                    <p>More</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default index