export const theme = {
  colors: {
    orange: "#FF9F0A",
    green: "#32D74B",
  },
};

export const handleGasolineIsWorth = (gasoline, etanol) => {
  const nGasoline = gasoline.replace(",", ".");
  const nEtanol = etanol.replace(",", ".");

  if (nGasoline * 0.7 > nEtanol) {
    return false;
  }

  return true;
};
