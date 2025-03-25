import otherImg from "../../assets/carl-raw-m3hn2Kn5Bns-unsplash.jpg";
import "./background.css";

export default function Background() {
  return (
    <>
      <div className="image-container">
        <img
          src={otherImg}
          alt="Background"
          className="background-image"
          draggable="false"
        />
      </div>
    </>
  );
}
