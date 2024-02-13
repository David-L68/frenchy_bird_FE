import { Container } from "react-bootstrap";
import Game from "../components/Game";

const GamePage = () => {
  return (
    <Container className="d-flex flex-column justify-content-center">
      <h4 className="align-self-center">Frenchy Bird</h4>
      <Game />
    </Container>
  );
};

export default GamePage;
