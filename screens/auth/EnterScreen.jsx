import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function EnterScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <View style={style.containerTitle}>
        <Text style={style.title}>Jajancuy</Text>
        <Text style={style.subTittle}>
          Temukan pedagang keliling terdekat dan nikmati jajanan favoritmu!
        </Text>
      </View>
      <View style={style.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={style.button}>
          <Text style={style.textButton}>Masuk</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={style.button}>
          <Text style={style.textButton}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
  },
  containerTitle: {
    paddingHorizontal: 20,
    paddingBottom: 32,
    display: "flex",
    justifyContent: "flex-end",
    height: 420,
    backgroundColor: "#FF680D",
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#FFFFFF",
    textAlign: "center",
  },
  subTittle: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
  },
  button: {
    marginTop: 16,
    padding: 16,
    backgroundColor: "#FF680D",
    borderRadius: 12,
  },
  textButton: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: 500,
    fontSize: 18,
  },
});
