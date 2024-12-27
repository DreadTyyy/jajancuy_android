import { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AuthContext } from "../../context/AuthContext";

export default function HomePage() {
  const { userToken, onLogout } = useContext(AuthContext);

  return (
    <View>
      <Text>HomePage</Text>
      <Text>User: {userToken}</Text>
      <TouchableOpacity onPress={() => onLogout()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
