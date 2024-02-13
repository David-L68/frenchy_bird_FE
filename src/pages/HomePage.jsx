import { Container, Image } from "react-bootstrap";
import "./Home.css";
import birdyImage from "../assets/birdy.jpg";

const HomePage = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center mt-4">
      <h2> Bienvenue, welcome to Frenchy Bird</h2>
      <h5> The game that will make you fly, the french way</h5>
      <Container className="imgCont">
        <Image width="400px" src={birdyImage} className="" />
      </Container>
    </Container>
  );
};

export default HomePage;
