import React from 'react';
import { View } from 'react-native';

// here we are building a bird component with a view
const Bird = ({birdBottom, birdLeft}) => {
  const birdWidth = 50;
  const birdHeight = 60
    return (
      <View style={{
        position: 'absolute',
        backgroundColor: 'pink',
        // backgroundImage: `url('https://ih1.redbubble.net/image.2437782524.8200/st,small,507x507-pad,600x600,f8f8f8.jpg')`,
        width: birdWidth,
        height: 60,
        bottom: birdBottom - (birdHeight/2),
        left: birdLeft - (birdWidth/2)
      }} />
    )
}


export default Bird
