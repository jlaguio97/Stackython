import React from "react";
import { View } from "react-native";
import flappy from "../assets/flappy.png";

// here we are building a bird component with a view
const Bird = ({ birdBottom, birdLeft }) => {
  const birdWidth = 50;
  const birdHeight = 60;
  return (
    <View
      style={{
        position: "absolute",
        width: birdWidth,
        height: birdHeight,
        bottom: birdBottom - birdHeight / 2,
        left: birdLeft - birdWidth / 2,
      }}
    >
      <img src={flappy} ></img>
    </View>
  );
};

export default Bird;
