import {useState} from "react";
import {Pause, PlayArrow, VolumeOff, VolumeUp, Fullscreen} from '@material-ui/icons';

export default function VideoPlayerController(
    {
        video, progress, active,
        setActive, progressAction, currentTime,
        rewindHandler, progressCurrent, duration
    }) {
    const [volume, setVolume] = useState(100)
    const [muted, setMuted] = useState(false)
    const getTime = (value) => {
        value = Math.round(Number(value))
        const hours = Math.floor(value / 60 / 60);
        const minutes = Math.floor(value / 60) - (hours * 60);
        const seconds = value % 60;
        if (hours < 1) {
            return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
        }
        return `${hours}:${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
    }
    
    const playHandler = () => {
        video.current.play()
        setActive(false)
    }

    const pauseHandler = () => {
        video.current.pause()
        setActive(true)
    }

    const volumeHandler = (event) => {
        setVolume(() => {
            const newVolume = Number(event.target.value)
            video.current.volume = newVolume / 100
            if (newVolume === 0) {
                setMuted(true)
            } else {
                setMuted(false)
            }
            return newVolume
        })
    }
    const muteHandler = () => {
        setMuted(prev => !prev)
        video.current.volume = Number(muted)
        setVolume(muted ? 100 : 0)
    }
    const fullscreenHandler = () => {
        if (video.current.requestFullscreen) {
            video.current.requestFullscreen();
        } else if (video.current.webkitRequestFullscreen) { /* Safari */
            video.current.webkitRequestFullscreen();
        } else if (video.current.msRequestFullscreen) { /* IE11 */
            video.current.msRequestFullscreen();
        }
    }
    return (
        <div className={'videoplayer'}>
            <div className={'videoplayer__body'}>
                <div className={'videoplayer__left-container'}>
                    {active ?
                        <button onClick={playHandler} className={`videoplayer__play button`}><PlayArrow
                            style={{color: '#fff'}}/></button> :
                        <button onClick={pauseHandler} className={'videoplayer__pause button'}><Pause
                            style={{color: '#fff'}}/></button>
                    }
                    <p className={'videoplayer__time'}>
                        {duration ? (
                            `${getTime(currentTime.toFixed(3))} / ${getTime(duration.toFixed(3))}`
                        ) : ''}
                    </p>
                </div>
                <div className={'videoplayer__right-container'}>
                    <button onClick={muteHandler} className={'videoplayer__sound button'}>
                        {muted ? <VolumeOff style={{color: '#fff'}}/> : <VolumeUp style={{color: '#fff'}}/>}
                    </button>
                    <input
                        type="range"
                        value={volume}
                        onChange={volumeHandler}
                        min={0}
                        max={100}
                        className={'videoplayer__volume'}
                    />
                    <button
                        onClick={fullscreenHandler}
                        className={'videoplayer__fullscreen button'}
                    ><Fullscreen style={{color: '#fff'}}/>
                    </button>
                </div>
            </div>
            <div className={'videoplayer__progress'}>
                <progress
                    ref={progress}
                    max={100}
                    value={progressCurrent}
                    onChange={progressAction}
                    onClick={rewindHandler}
                    className={'videoplayer__progress_item'}
                />
            </div>
        </div>
    )
}