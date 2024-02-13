import { Container } from "react-bootstrap";
import Game from "../components/Game";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const GamePage = () => {
  const { userNickname } = useContext(AuthContext);

  return (
    <Container className="d-flex flex-column justify-content-center mt-3">
      <h4 className="align-self-center">Bienvenue {userNickname}</h4>
      <Game />
    </Container>
  );
};

export default GamePage;
