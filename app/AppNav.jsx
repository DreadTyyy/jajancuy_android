import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { View, ActivityIndicator } from "react-native";
import EnterScreen from "./auth";
import HomePage from "./main/HomePage";

export default function AppNav() {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    <View>
      <ActivityIndicator size="large" />
    </View>;
  }

  return <View>{userToken ? <HomePage /> : <EnterScreen />}</View>;
}
