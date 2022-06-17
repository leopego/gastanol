import React from "react";
import { View, Text } from "react-native";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";

const GasResult = ({ gas, economy, backgroundColor }) => {
  return (
    <View style={[styles.Container, { backgroundColor: backgroundColor }]}>
      <View style={styles.contentContainer}>
        <FontAwesome5 name="gas-pump" size={24} color="#FFF" />
        <Text style={styles.contentText}>Abasteça com </Text>
        <Text
          style={[
            styles.contentText,
            styles.contentTextHighlight,
            { marginLeft: 0 },
          ]}
        >
          {gas}
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <FontAwesome5 name="money-check-alt" size={20} color="#FFF" />
        <Text style={[styles.contentText, styles.contentTextHighlight]}>
          {economy}%
        </Text>
        <Text style={[styles.contentText, { marginLeft: 0 }]}>
          {" "}
          de economia
        </Text>
      </View>
    </View>
  );
};

export default GasResult;
