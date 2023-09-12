import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity, Image } from "react-native";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  console.log(dimension);
  return (
    <TouchableOpacity styles={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(50)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
