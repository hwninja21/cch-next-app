export default function ChainsmokersVideo({ flowplayerurl }) {
    return (
        <>
            <div className="mainCards-chainsmokers__video-main">
                <div
                    className="flowplayer-embed-container"
                    style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", maxWidth: "100%" }}
                >
                    <iframe
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: 15 }}
                        allowFullScreen
                        src={flowplayerurl}
                        title="0"
                        byline="0"
                        portrait="0"
                        width="640"
                        height="360"
                        frameBorder="0"
                        allow="autoplay"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </>
    )
}