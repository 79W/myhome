import reactLogo from "./assets/20250224163043.png";
import bjVideo from "./assets/bjv1.mp4";
import "./App.css";

function App() {
  return (
    <div className="content">
      <video
        className="content_video"
        src={bjVideo}
        autoPlay
        muted
        loop
      ></video>
      <div className="content_img">
        <img src={reactLogo} />
      </div>
      <div className="content_txt">qiao.ge</div>
    </div>
  );
}

export default App;
