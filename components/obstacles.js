import React from "react";
import { View } from 'react-native';

const Obstacles = ({obstaclesLeft, obstacleWidth, obstacleHeight, gap, randomBottom}) => {
  return (
    <>
    <View style={{
      position: 'absolute',
      backgroundColor: 'grey',
      width: obstacleWidth,
      height: obstacleHeight,
      left: obstaclesLeft,
      bottom: randomBottom + obstacleHeight + gap,
    }} />
    <View style={{
      position: 'absolute',
      backgroundColor: 'grey',
      width: obstacleWidth,
      height: obstacleHeight,
      left: obstaclesLeft,
      bottom: randomBottom,
    }} />
    </>
  )
}

export default Obstacles
