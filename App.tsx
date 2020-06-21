import React from "react";
import { StyleSheet, View } from "react-native";
import { FinancesProvider } from "./src/contexts/FinancesContext";
import SourceInput from "./src/SourceInput";
import Finances from "./src/Finances";

export default function App() {
  return (
    <FinancesProvider>
      <View style={styles.container}>
        <Finances />
        <SourceInput />
      </View>
    </FinancesProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
