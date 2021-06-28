import React, {useEffect, useRef, useState} from "react";
import Aos from "aos";
import VideoPlayerController from "../VideoPlayerController";

export default function Example() {
    const videoRef = useRef(null)
    const overlayRef = useRef(null)
    const progressRef = useRef(null)
    const [active, setActive] = useState(true)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [progressCurrent, setProgressCurrent] = useState(0)

    const videoHandler = () => {
        console.log("video handler")
        setActive(prevState => !prevState)
        if (active) {
            videoRef.current.play()
        } else {
            videoRef.current.pause()
        }
    }

    const progressAction = () => {
        setProgressCurrent((100 * videoRef.current.currentTime) / videoRef.current.duration)
        setCurrentTime(videoRef.current.currentTime)
    }

    const rewindHandler = () => {
        videoRef.current.pause()
        setProgressCurrent(100 * event.offsetX / progressRef.current.offsetWidth)
        setCurrentTime(videoRef.current.duration * (event.offsetX / progressRef.current.offsetWidth))
        videoRef.current.currentTime = videoRef.current.duration * (event.offsetX / progressRef.current.offsetWidth)
        videoRef.current.play()
    }

    useEffect(() => {
        Aos.init()
        videoRef.current.pause()
        videoRef.current.muted = false
        setDuration(videoRef.current.duration)
    }, [])
    
    return (
        <section className="main-example">
            <h3
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="main-example__title"
            >Check Out A CACHY Performance In Action:</h3>
            <div className="main-example__video-container overlay" onClick={videoHandler}>
                <div ref={overlayRef} className={`main-example__video-container_overlay ${active ? 'active' : ''}`}>
                    <button className="main-example__video-container_overlay-button">
                        <div className="ellipse">
                            <div className="triangle">
                                <div className="triangle__content"/>
                            </div>
                        </div>
                    </button>
                </div>
                <video
                    ref={videoRef}
                    preload={'false'}
                    muted
                    playsInline
                    webkit-playsinline={'true'}
                    poster={'/images/main-cover.png'}
                    onPause={() => setActive(true)}
                    onPlay={() => setActive(false)}
                    onTimeUpdate={progressAction}
                    className="main-example__video-container_video"
                    onDurationChange={(event) => {
                        setDuration(event.target.duration)
                    }}
                >
                    <source src="https://analibl.sg-host.com/files2/pressureb.mp4" type="video/mp4"/>
                </video>
            </div>
            <VideoPlayerController
                video={videoRef}
                progress={progressRef}
                active={active}
                setActive={setActive}
                progressAction={progressAction}
                rewindHandler={rewindHandler}
                currentTime={currentTime}
                progressCurrent={progressCurrent}
                duration={duration}
            />
        </section>
    )
}
