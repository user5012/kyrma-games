import NavBar from "../../components/NavBar/NavBar";
import "./Home.css";
import otherImg from "../../assets/carl-raw-m3hn2Kn5Bns-unsplash.jpg";

function Home() {
  return (
    <>
      <NavBar fullLeft="Kyrma Games" lnk="Games" About="About" />
      <div className="welcome-container">
        <div className="welcome-content text-center">
          <h1 className="display-4 fw-bold">Welcome to Kyrma Games</h1>
          <p className="lead">
            Here we create the best mobile games for you to enjoy.
          </p>
        </div>
        <div className="image-container">
          <img src={otherImg} alt="Background" className="background-image" />
        </div>
      </div>
    </>
  );
}

export default Home;
