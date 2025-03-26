import Background from "../../components/Background/Background";
import NavBar from "../../components/NavBar/NavBar";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./About.css";
import igPhoto from "../../assets/Instagram_logo_2022.svg";
import ttPhoto from "../../assets/41b3zsiq4pL.png";

interface AboutProps {
  instagram: string;
  tiktok: string;
}

function About({
  instagram,
  tiktok,
}: AboutProps) {
  return (
    <>
      <Background />
      <NavBar fullLeft="Kyrma Games" lnk="Games" About="About" />
      <Container className="about-container d-flex align-items-center justify-content-center vh-100">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-lg p-4 border-0 rounded bg-dark text-neon text-center">
              <Card.Body>
                <h2 className="text-glow">Welcome to Kyrma Games</h2>
                <p className="gaming-text">
                  Hey there! 👋 I'm a passionate game developer and the creator
                  behind Kyrma Games. Ever since I can remember, I’ve been
                  fascinated by video games—not just playing them, but
                  understanding how they’re made and what makes them fun. That
                  passion led me to start coding and designing my own games,
                  turning ideas into interactive experiences. 🚀
                </p>
                <p className="gaming-text">
                  At Kyrma Games, my goal is to craft unique and exciting games
                  that spark imagination and bring players together. Whether
                  it's a small indie project or a bigger adventure, I’m always
                  learning, experimenting, and pushing my creativity to new
                  heights. ✨
                </p>
                <p className="gaming-text">
                  I love connecting with other gamers and devs, so feel free to
                  reach out! Let’s create something awesome together. 🎨🎮
                </p>
                <br />
                <br />
                <p>
                  <a
                    className="gaming-link stop-text-neon"
                    href={instagram}
                    target="_blank"
                  >
                    <img src={igPhoto} alt="ig Link" width={20} height={20} />
                  </a>{" "}
                  {" "}
                  <a
                    style={{ marginLeft: "50px" }}
                    className="gaming-link stop-text-neon"
                    href={tiktok}
                    target="_blank"
                  >
                    <img src={ttPhoto} alt="tiktok Link" width={20} height={20} />
                  </a>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
