import { useContext } from "react";
import { View, Text } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function HomePage() {
  const { userToken } = useContext(AuthContext);
  return (
    <View>
      <Text>HomePage</Text>
      <Text>User: {userToken}</Text>
    </View>
  );
}
