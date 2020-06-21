import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FinancesProvider } from "./src/contexts/FinancesContext";

export default function App() {
  return (
    <FinancesProvider>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
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
