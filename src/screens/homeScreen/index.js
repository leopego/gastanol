import { useState, useEffect } from "react";

import { View, Text, Keyboard, TouchableWithoutFeedback } from "react-native";

import GasPrice from "../../components/GasPrice";

import { styles } from "./styles";
import { theme } from "../../utils";

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

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Text style={styles.title}>
          {`Digite o valor dos combustiveis abaixo para \nsaber com qual abastecer`}
        </Text>

        <View style={styles.pricesContainer}>
          <GasPrice
            text="Gasolina"
            color={theme.colors.orange}
            handleGasPrice={setGasolinePrice}
          />

          <View style={styles.separator} />

          <GasPrice
            text="Etanol"
            color={theme.colors.green}
            handleGasPrice={setEtanolPrice}
          />
        </View>
      </View>
    </DismissKeyboard>
  );
};

export default HomeScreen;
