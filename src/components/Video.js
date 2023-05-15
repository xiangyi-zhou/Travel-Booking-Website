import { useState } from "react";
import { BsPlayFill } from "react-icons/bs";
import "../App.css";
import classes from "../styles/Video.module.css";

function Video() {
  const [modal, setModal] = useState(false);
  const toggleVideo = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("activemodal");
  } else {
    document.body.classList.remove("activemodal");
  }

  return (
    <div>
      <div className={`${classes.videosec} ${classes.containerfluid}`}>
        <div className={classes.video}>
          <h1 className={classes.caption}>Watch the video</h1>
          <div onClick={toggleVideo} className={classes.ionicon}>
            <BsPlayFill />
          </div>
        </div>
      </div>
      {/* <button onClick={toggoleVideo} className={classes.btnmodal}></button> */}
      {modal && (
        <div onClick={toggleVideo} className={classes.overlay}>
          <div className={classes.modalcontent}>
            <h3>
              <iframe
                className={classes.iframe}
                width="760"
                height="400"
                src="https://www.youtube.com/embed/ganNmaRG_J8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </h3>

            <button onClick={toggleVideo} className={classes.closemodal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Video;
