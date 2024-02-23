import React from "react";
import "./style.css";
import imagesrc from "./imagesrc.jpeg";

function App() {
  return (
    <div style={{ border: "solid 1px black", maxWidth: "150vw" }}>
      <h1 className="title red">Nature</h1>

      <br />
      <img
        src={process.env.PUBLIC_URL + "/imagepublic.jpeg"}
        alt=""
        className="image-public"
      />
      <button className="button">voici l'image 1 </button>
      <br />
      <br />
      <img
        src={imagesrc}
        alt=""
        style={{ width: "475px", height: "250px" }}
        className="image-src"
      />
      <button className="button">voici l'image 2 </button>
      <br />
      <br />
      <div className="video-container">
        <div className="video-border"></div>
        <video width="1000" height="300" controls>
          <source
            src={process.env.PUBLIC_URL + "/myVideo.mp4"}
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}

export default App;
