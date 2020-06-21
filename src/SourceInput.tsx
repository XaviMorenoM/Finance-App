import React, { useContext, useState } from "react";
import { View } from "react-native";
import TextInput from "./components/TextInput";
import FinancesContext from "./contexts/FinancesContext";
import Button from "./components/Button";

export default () => {
  const [sourceName, setSourceName] = useState("");
  const { addSource } = useContext(FinancesContext);
  return (
    <View>
      <TextInput value={sourceName} onChangeText={setSourceName} />
      <Button
        onPress={() => addSource(sourceName)}
        title="Add source"
        color="primary"
      />
    </View>
  );
};
