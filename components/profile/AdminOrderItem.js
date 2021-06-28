import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';
import { firebaseClient } from '../../firebase/firebaseClient';
import FileUploader from "react-firebase-file-uploader";

export default function OrderItem({ order, tabs }) {
  const firestore = firebaseClient.firestore();
  const storage = firebaseClient.storage();
  const statusSelectRef = useRef();

  const [state, setState] = useState({
    orderStatus: '',
    showDetail: false,
    isUploading: false,
    progress: 0,
    videoURL: ''
  });

  useEffect(() => {
    setState({ ...state, orderStatus: order.status, videoURL: order.videoURL });
  }, [])

  const changeStatus = () => {
    if (statusSelectRef.current.value === 'finished' && !state.videoURL) {
      toast.warn("Upload a video");
      return
    }

    firestore.collection('orders')
      .doc(order.orderId)
      .update({ status: statusSelectRef.current.value })
      .then(() => {
        setState({ ...state, orderStatus: statusSelectRef.current.value })
        toast.success('Successfully changed!')
      })
      .catch(err => console.log(err))
  }

  const handleUploadStart = () => {
    toast.info("Upload starting...")
    setState({ ...state, isUploading: true, progress: 0 })
  }

  const handleUploadError = (error) => {

    console.log(error, 'upload error')
    setState({ ...state, isUploading: false })
  }

  const handleUploadSuccess = async (filename) => {
    try {
      const videoURL = await storage
        .ref("videos")
        .child(filename)
        .getDownloadURL()

      const metadata = await storage.ref("videos").child(filename).getMetadata();

      let size = ''

      if (metadata.size > 1048576) {
        size = (metadata.size / 1048576).toFixed(2) + 'Mb';
      } else {
        size = (metadata.size / 1024).toFixed(2) + 'Kb';
      }

      await firestore.collection('orders').doc(order.orderId).update({ videoURL, videoSize: size })

      setState({ ...state, progress: 100, isUploading: false, videoURL });
      toast.success("Video uploaded successfuly!")
    } catch (error) {
      setState({ ...state, progress: 0, isUploading: false });
      console.log(error)
    }
  }

  const handleProgress = progress => {
    setState({ ...state, progress: progress, isUploading: true })
  }

  return (
    <>
      {
        tabs.includes(state.orderStatus) ?
          <div className="order-item">
            {
              state.videoURL && state.orderStatus === 'finished' ?
                <Link href={{ pathname: '/order', query: { orderId: order.orderId } }}>
                  <a>
                    <div className="order-image">
                      <img src={order.orderImage} alt="" />
                      <div className="play-icon">
                        <svg width="106" height="107" viewBox="0 0 106 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M103.647 53.9141C103.647 82.406 80.8026 105.475 52.6564 105.475C24.5103 105.475 1.66565 82.406 1.66565 53.9141C1.66565 25.4222 24.5103 2.35275 52.6564 2.35275C80.8026 2.35275 103.647 25.4222 103.647 53.9141Z"
                            stroke="white" strokeWidth="3" />
                          <path d="M39.8408 31.9509L76.7631 53.9141L39.8408 75.8773L39.8408 31.9509Z" stroke="white" strokeWidth="3" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </Link>
                :
                <div className="order-image">
                  <img src={order.orderImage} alt="" />
                </div>
            }
            <div className="userinfo">
              <div className="creator">
                <p>Creator:</p>
                <h4 className="artist-name">
                  {order.title}
                </h4>
              </div>
              <div className="useremail">
                <p>For:</p>
                <h4 className="artist-name">
                  {order.customerEmail}
                </h4>
              </div>
            </div>
            <div className="actions">
              <select name="" id="" defaultValue={order.status} ref={statusSelectRef}>
                <option value="placed">Order Placed</option>
                <option value="accepted">Order Accepted</option>
                <option value="pending">Order is prepareing</option>
                <option value="finished">Order is ready</option>
              </select>
              <button onClick={changeStatus}>Change Status</button>
            </div>
            <div className={`details ${state.showDetail ? 'opened' : ''}`}>
              <div className="buttons">
                <button className="toggle-order" onClick={() => setState({ ...state, showDetail: !state.showDetail })}>
                  See order details
          </button>
                <label htmlFor={order.orderId} className="upload">
                  {
                    state.isUploading ?
                      'Uploading... ' + state.progress + '%'
                      :
                      state.videoURL ? 'Video Uploaded' : 'Upload video'
                  }
                  <FileUploader
                    accept="video/*"
                    id={order.orderId}
                    filename={file => order.title.toLowerCase().split(' ').join('-') + '-' + new Date().getTime()}
                    storageRef={firebase.storage().ref("videos")}
                    onUploadStart={handleUploadStart}
                    onUploadError={handleUploadError}
                    onUploadSuccess={handleUploadSuccess}
                    onProgress={handleProgress}
                  />
                </label>
              </div>
              <div className="detail-content">
                <div className="row">
                  <span className="left">Who is this for:</span>
                  <span className="right">{order.forwhom}</span>
                </div>
                <div className="row">
                  <span className="left">From</span>
                  <span className="right">{order.from}</span>
                </div>
                <div className="row">
                  <span className="left">To</span>
                  <span className="right">{order.to}</span>
                </div>
                <div className="row">
                  <span className="left">Occation</span>
                  <span className="right">{order.occasion}</span>
                </div>
                <div className="row">
                  <span className="left">Instruction</span>
                  <span className="right">{order.instructions}</span>
                </div>
                <div className="row">
                  <span className="left">Date</span>
                  <span className="right">{moment.unix(order.createdAt._seconds).format("MM/DD/YYYY")}</span>
                </div>
              </div>
            </div>
          </div>
          :
          null
      }
    </>
  )
}