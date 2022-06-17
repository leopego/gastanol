import { useState, useEffect } from "react";

import { View, Text, Keyboard, TouchableWithoutFeedback } from "react-native";

import GasPrice from "../../components/GasPrice";

import { styles } from "./styles";
import { theme, handleGasolineIsWorth } from "../../utils";
import GasResult from "../../components/GasResult";

const DismissKeyboard = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
};

const HomeScreen = () => {
  const [gasolinePrice, setGasolinePrice] = useState();
  const [etanolPrice, setEtanolPrice] = useState();

  const handleResult = () => {
    if (gasolinePrice && etanolPrice) {
      if (handleGasolineIsWorth(gasolinePrice, etanolPrice)) {
        const r = (10 / etanolPrice.replace(",", ".")) * 0.7;
        const r2 = 10 / gasolinePrice.replace(",", ".");
        const result = (100 - (r * 100) / r2).toFixed(1);

        return (
          <GasResult
            gas="Gasolina"
            economy={result}
            backgroundColor={theme.colors.orange}
          />
        );
      }

      const r = (10 / etanolPrice.replace(",", ".")) * 0.7;
      const r2 = 10 / gasolinePrice.replace(",", ".");
      const result = (100 - (r2 * 100) / r).toFixed(1);

      return (
        <GasResult
          gas="Etanol"
          economy={result}
          backgroundColor={theme.colors.green}
        />
      );
    }
  };

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Text style={styles.title}>
          {`Digite o preço dos combustiveis abaixo para \nsaber com qual abastecer`}
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

        {gasolinePrice && etanolPrice ? (
          handleResult()
        ) : (
          <View style={styles.awaitResultContainer}>
            <Text style={styles.resultDefaultText}>Aguardando Valores</Text>
          </View>
        )}

        <Text style={[styles.title, { marginTop: 20 }]}>
          {`Os calculos são baseados em uma \n porcentagem de 70% do etanol \nem relação à gasolina.`}
        </Text>
      </View>
    </DismissKeyboard>
  );
};

export default HomeScreen;
