import React from "react";
import { View, Text, TextInput } from "react-native";

import { styles } from "./styles";

const GasPrice = ({ text, color, handleGasPrice }) => {
  return (
    <View style={styles.gasContainer}>
      <View style={[styles.gasTitleContainer, { backgroundColor: color }]}>
        <Text style={styles.gasTitle}>{text}</Text>
      </View>

      <TextInput
        style={styles.priceText}
        placeholder="0,00"
        maxLength={4}
        keyboardType="numeric"
        onChangeText={(price) => {
          handleGasPrice(price);
        }}
      />
    </View>
  );
};

export default GasPrice;
