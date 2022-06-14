import { useState, useEffect } from "react";

import {
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "./styles";

const DismissKeyboard = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
};

const HomeScreen = () => {
  const [gasolinePrice, setGasolinePrice] = useState(0);
  const [etanolPrice, setEtanolPrice] = useState(0);

  useEffect(() => {
    console.log("Etanol: ", etanolPrice);
    console.log("Gasolina", gasolinePrice);
  }, [gasolinePrice, etanolPrice]);

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Text style={styles.title}>
          {`Digite o valor dos combustiveis abaixo para \nsaber com qual abastecer`}
        </Text>

        <View style={styles.pricesContainer}>
          <View style={styles.gasContainer}>
            <View style={styles.gasTitleContainer}>
              <Text style={styles.gasTitle}>Gasolina</Text>
            </View>

            <TextInput
              style={styles.priceText}
              placeholder="0,00"
              maxLength={4}
              keyboardType="numeric"
              onChangeText={(price) => {
                setGasolinePrice(price);
              }}
            />
          </View>

          <View style={styles.separator} />
          <View style={styles.gasContainer}>
            <View
              style={[styles.gasTitleContainer, { backgroundColor: "#32D74B" }]}
            >
              <Text style={styles.gasTitle}>Etanol</Text>
            </View>

            <TextInput
              style={styles.priceText}
              placeholder="0,00"
              maxLength={4}
              keyboardType="numeric"
              onChangeText={(price) => {
                setEtanolPrice(price);
              }}
            />
          </View>
        </View>
      </View>
    </DismissKeyboard>
  );
};

export default HomeScreen;
