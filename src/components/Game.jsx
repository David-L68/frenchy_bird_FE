import { useEffect, useState } from "react";
import "./Game.css";

const BIRD_HEIGHT = 30;
const BIRD_WIDTH = 50;
const WALL_HEIGHT = 600;
const WALL_WIDTH = 400;
const GRAVITY = 1;
const JUMP_STRENGTH = 15;
const OBJ_WIDTH = 52;
const OBJ_GAP = 200;
const OBJ_SPEED = 8;

function Game() {
  const [isStart, setIsStart] = useState(false);
  const [birdPos, setBirdPos] = useState(WALL_HEIGHT / 2 - BIRD_HEIGHT / 2);
  const [birdSpeed, setBirdSpeed] = useState(0);
  const [objHeight, setObjHeight] = useState(0);
  const [objPos, setObjPos] = useState(WALL_WIDTH);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const jump = () => {
      if (isStart) setBirdSpeed(-JUMP_STRENGTH);
      else startGame();
    };

    const handleClick = () => {
      jump();
    };

    window.addEventListener("keydown", handleClick);
    window.addEventListener("touchstart", handleClick);
    return () => {
      window.removeEventListener("keydown", handleClick);
      window.removeEventListener("touchstart", handleClick);
    };
  }, [isStart]);

  useEffect(() => {
    let birdInterval;

    const updateBird = () => {
      if (isStart) {
        const newBirdSpeed = birdSpeed + GRAVITY;
        setBirdSpeed(newBirdSpeed);
        const newBirdPos = birdPos + newBirdSpeed;
        setBirdPos(newBirdPos);

        const birdLeft = WALL_WIDTH * 0.2;
        const birdRight = birdLeft + BIRD_WIDTH;
        const birdTop = newBirdPos;
        const birdBottom = newBirdPos + BIRD_HEIGHT;

        if (
          birdTop < 0 ||
          birdBottom > WALL_HEIGHT ||
          (objPos < birdRight &&
            objPos + OBJ_WIDTH > birdLeft &&
            (birdTop < objHeight || birdBottom > objHeight + OBJ_GAP))
        ) {
          endGame();
        }
      }
    };

    birdInterval = setInterval(updateBird, 24);
    return () => {
      clearInterval(birdInterval);
    };
  }, [isStart, birdPos, birdSpeed, objHeight, objPos]);

  useEffect(() => {
    let objInterval;

    const updateObject = () => {
      if (isStart) {
        setObjPos((objPos) => objPos - OBJ_SPEED);

        if (objPos + OBJ_WIDTH < 0) {
          setObjPos(WALL_WIDTH);
          setObjHeight(Math.floor(Math.random() * (WALL_HEIGHT - OBJ_GAP)));
          setScore((score) => score + 1);
        }
      }
    };

    objInterval = setInterval(updateObject, 24);
    return () => {
      clearInterval(objInterval);
    };
  }, [isStart, objPos]);

  const startGame = () => {
    setIsStart(true);
    setBirdPos(WALL_HEIGHT / 2 - BIRD_HEIGHT / 2);
    setBirdSpeed(0);
    setObjPos(WALL_WIDTH);
    setScore(0);
    setIsGameOver(false);
  };

  const endGame = () => {
    setIsStart(false);
    setBirdSpeed(0);
    setBirdPos(WALL_HEIGHT / 2 - BIRD_HEIGHT / 2);
    setObjPos(WALL_WIDTH + 10);
    setObjHeight(Math.floor(Math.random() * (WALL_HEIGHT - OBJ_GAP)));
    setIsGameOver(true);
  };

  return (
    <div className="home">
      <div className={`background ${isStart ? "start" : ""}`}>
        <span className="score">{score}</span>
        {!isStart && isGameOver ? (
          <div className="gameover">Game Over ! Score: {score}</div>
        ) : !isStart ? (
          <div className="startboard">Press any button to Start</div>
        ) : null}

        <div className="bird" style={{ top: birdPos + "px" }} />
        <div
          className="obj top"
          style={{
            top: 0,
            height: objHeight + "px",
            left: objPos + "px",
          }}
        />
        <div
          className="obj bottom"
          style={{
            top: objHeight + OBJ_GAP + "px",
            height: WALL_HEIGHT - objHeight - OBJ_GAP + "px",
            left: objPos + "px",
          }}
        />
      </div>
    </div>
  );
}

export default Game;
