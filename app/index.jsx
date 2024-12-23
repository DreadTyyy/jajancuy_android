import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";

export default function HomePage() {
  return (
    <View>
      <View style={style.containerTitle}>
        <Text style={style.title}>Jajancuy</Text>
        <Text style={style.subTittle}>
          Temukan pedagang keliling terdekat dan nikmati jajanan favoritmu!
        </Text>
      </View>
      <View style={style.container}>
        <Link href="/login" style={style.button}>
          Masuk
        </Link>
        <Link href="/login" style={style.button}>
          Daftar
        </Link>
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
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: 500,
    fontSize: 18,
  },
});
