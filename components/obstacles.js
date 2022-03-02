import React from "react";
import { View } from "react-native";
import pipe from "../assets/pipe.jpeg";

const Obstacles = ({
  obstaclesLeft,
  obstacleWidth,
  obstacleHeight,
  gap,
  randomBottom,
}) => {
  return (
    <>
      <img src={pipe} style={{
            position: "absolute",
            backgroundColor: "red",
            width: obstacleWidth,
            height: obstacleHeight,
            left: obstaclesLeft,
            bottom: randomBottom + obstacleHeight + gap,
            transform: 'scaleY(-1)'
          }}>
      </img>
      <img src={pipe}
        style={{
          position: "absolute",
          backgroundColor: "grey",
          width: obstacleWidth,
          height: obstacleHeight,
          left: obstaclesLeft,
          bottom: randomBottom,
        }}
      />
    </>
  );
};

export default Obstacles;
