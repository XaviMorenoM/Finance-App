import React, { useContext } from "react";
import FinancesContext from "./contexts/FinancesContext";
import { Text } from "react-native";

export default () => {
  const { state } = useContext(FinancesContext);
  return <Text>{JSON.stringify(state)}</Text>;
};
