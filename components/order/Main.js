import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { saveAs } from "file-saver";
import { homeURL } from '../../config';
import { firebaseClient } from '../../firebase/firebaseClient';
import VideoPlayerController from '../../components/VideoPlayerController'
import { toast } from 'react-toastify';

export default function Main() {
  const router = useRouter();
  const { orderId } = router.query;

  const videoRef = useRef(null)
  const overlayRef = useRef(null)
  const progressRef = useRef(null)
  const [active, setActive] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [progressCurrent, setProgressCurrent] = useState(0)

  const [order, setOrder] = useState();

  useEffect(() => {
    firebaseClient
      .firestore()
      .collection('orders')
      .doc(orderId)
      .get()
      .then(doc => {
        setOrder(doc.data());
      })
      .catch(err => console.log(err))
  }, [router.query])

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

  const downloadVideo = () => {
    toast.info("You're downloading a video file..")
    axios({
      url: order.videoURL,
      method: "GET",
      responseType: "blob"
    }).then(response => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      var blob = new Blob([response.data], {
        type: "video/mp4"
      });
      console.log(url)
      saveAs(blob, order.title + ".mp4")
    });
  };

  const shareURL = encodeURI(homeURL + router.asPath);

  return (
    <main className="orderPage">
      {order &&
        <div className="container">
          <h1 className="title">{`Hi, ${order.to}!`}
            <img src="/images/icons/in-love.svg" alt="" />
          </h1>
          <p className="description">
            {`This is your present from ${order.from ? order.from : ''}. Check out this personal music video recorded by Russell Swallow and enjoy!`}
          </p>
          <div className="video-container">
            <div className="video overlay" onClick={videoHandler}>
              <div ref={overlayRef} className={`video_overlay ${active ? 'active' : ''}`}>
                <button className="video_overlay-button">
                  <div className="ellipse">
                    <div className="triangle">
                      <div className="triangle__content" />
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
                poster={order.orderImage}
                onPause={() => setActive(true)}
                onPlay={() => setActive(false)}
                onTimeUpdate={progressAction}
                onDurationChange={(event) => {
                  setDuration(event.target.duration)
                }}
              >
                <source src={order.videoURL} type="video/mp4" />
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
          </div>
          <div className="information">
            <div className="artist">
              <p>Created by</p>
              <h4>{order.title}</h4>
            </div>
            <div className="share-social">
              <p>Share on social media:</p>
              <div className="icons">
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareURL}`} target="_blank" className="facebook">
                  <svg width="58" height="59" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M29 0C12.9862 0 0 12.9862 0 29C0 45.0138 12.9862 58 29 58C45.0138 58 58 45.0138 58 29C58 12.9862 45.0138 0 29 0Z"
                      fill="#4C2249" />
                    <path
                      d="M34.75 29.4688V23.8438C34.75 22.2913 35.982 21.0312 37.5 21.0312H40.25V14H34.75C30.1932 14 26.5 17.7772 26.5 22.4375V29.4688H21V36.5H26.5V59H34.75V36.5H40.25L43 29.4688H34.75Z"
                      fill="#F8F7F8" />
                  </svg>
                </a>
                <a href={`https://twitter.com/intent/tweet/?text=&url=${shareURL}`} target="_blank" className="twitter">
                  <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29 0C12.9862 0 0 12.9862 0 29C0 45.0138 12.9862 58 29 58C45.0138 58 58 45.0138 58 29C58 12.9862 45.0138 0 29 0ZM42.2411 22.6111C42.2539 22.8965 42.2601 23.1833 42.2601 23.4713C42.2601 32.267 35.565 42.4097 23.3213 42.4101H23.3218H23.3213C19.5623 42.4101 16.0643 41.3083 13.1185 39.4201C13.6393 39.4816 14.1694 39.5121 14.7062 39.5121C17.825 39.5121 20.6951 38.4484 22.9735 36.6629C20.0596 36.6089 17.6028 34.6844 16.755 32.0396C17.1608 32.1174 17.5781 32.1599 18.006 32.1599C18.6135 32.1599 19.2021 32.0781 19.7614 31.9254C16.7156 31.3156 14.4212 28.6239 14.4212 25.4007C14.4212 25.3706 14.4212 25.3436 14.4221 25.3157C15.3191 25.8144 16.3448 26.1144 17.4369 26.1481C15.6496 24.9555 14.4748 22.9169 14.4748 20.6075C14.4748 19.3879 14.8044 18.2454 15.3762 17.2617C18.6587 21.2894 23.5643 23.9382 29.0965 24.2165C28.9823 23.7289 28.9234 23.2209 28.9234 22.6987C28.9234 19.0242 31.9046 16.043 35.5805 16.043C37.4952 16.043 39.2245 16.8524 40.4392 18.1462C41.9557 17.8471 43.3796 17.2931 44.666 16.5307C44.1682 18.0843 43.1133 19.3879 41.7388 20.2123C43.0854 20.0512 44.3686 19.6941 45.5612 19.164C44.6704 20.499 43.5407 21.6717 42.2411 22.6111Z" fill="#4C2249" />
                  </svg>
                </a>
                <a href={`https://reddit.com/submit/?url=${shareURL}`} target="_blank" className="raddit">
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.5597 22.8004C19.7981 23.562 18.1663 23.8339 17.0034 23.8339C15.8371 23.8339 14.2086 23.562 13.447 22.8004C13.2667 22.6201 12.9778 22.6201 12.7977 22.8004C12.6175 22.9807 12.6175 23.2697 12.7977 23.4497C14.0047 24.6567 16.3235 24.7519 17.0034 24.7519C17.6833 24.7519 19.9987 24.6567 21.2093 23.4497C21.3859 23.2694 21.3859 22.9804 21.2093 22.8004C21.029 22.6201 20.74 22.6201 20.5597 22.8004Z" fill="#4C2249" />
                    <path d="M14.875 18.7714C14.875 17.7956 14.0794 17 13.1036 17C12.128 17 11.3321 17.7956 11.3321 18.7714C11.3321 19.747 12.128 20.5429 13.1036 20.5429C14.0794 20.5429 14.875 19.7473 14.875 18.7714Z" fill="#4C2249" />
                    <path d="M17 0C7.61259 0 0 7.61259 0 17C0 26.3874 7.61259 34 17 34C26.3874 34 34 26.3874 34 17C34 7.61259 26.3874 0 17 0ZM26.8634 19.2677C26.9008 19.5125 26.9212 19.7608 26.9212 20.0124C26.9212 23.8271 22.4809 26.9179 17.0034 26.9179C11.5259 26.9179 7.08549 23.8271 7.08549 20.0124C7.08549 19.7574 7.10599 19.5058 7.14334 19.2609C6.2798 18.8734 5.67799 18.0065 5.67799 17C5.67799 15.6332 6.78641 14.5214 8.15656 14.5214C8.82295 14.5214 9.42476 14.7832 9.87015 15.2117C11.5905 13.9707 13.9707 13.1783 16.6192 13.1103C16.6192 13.0763 17.8568 7.18069 17.8568 7.18069C17.8807 7.06526 17.9486 6.96643 18.0472 6.9021C18.1458 6.83751 18.2648 6.81702 18.3805 6.84088L22.5013 7.71791C22.7903 7.13322 23.3851 6.72856 24.0821 6.72856C25.0614 6.72856 25.8536 7.52077 25.8536 8.5C25.8536 9.47923 25.0614 10.2714 24.0821 10.2714C23.1335 10.2714 22.3652 9.52333 22.3211 8.58508L18.6319 7.79962L17.5032 13.1139C20.1042 13.2055 22.4401 13.9943 24.1332 15.2184C24.5786 14.7868 25.1838 14.5214 25.8536 14.5214C27.224 14.5214 28.3321 15.6299 28.3321 17C28.3321 18.0132 27.7236 18.8801 26.8634 19.2677Z" fill="#4C2249" />
                    <path d="M20.8964 17C19.9206 17 19.125 17.7956 19.125 18.7714C19.125 19.747 19.9206 20.5429 20.8964 20.5429C21.872 20.5429 22.6679 19.747 22.6679 18.7714C22.6679 17.7956 21.8723 17 20.8964 17Z" fill="#4C2249" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="download">
              <p>Download</p>
              <button className="download-link" onClick={downloadVideo}>{`mp4(${order.videoSize ? order.videoSize : ''})`}</button>
            </div>
          </div>
        </div>
      }
    </main>
  )
}