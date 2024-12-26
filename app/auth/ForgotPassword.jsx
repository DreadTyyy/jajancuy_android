import { useState } from "react";
import { useRouter } from "expo-router";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { forgotPassword } from "../src/utils/api";

export default function ForgotPassword() {
  const [email, onChangeEmail] = useState("");
  const route = useRouter();

  const handleSubmitButton = async () => {
    if (email === "" || !email.includes("@")) {
      Alert.alert("Email is required!");
    }
    const { error } = await forgotPassword({ email });
    if (!error) {
      Alert.alert("Success");
    }
  };

  return (
    <View>
      <View style={style.wrapperTitle}>
        <Text style={style.title}>Forgot Password?</Text>
        <Text style={style.subTitle}>
          No worries, we'll send you the reset instructions
        </Text>
      </View>
      <View style={style.container}>
        <View style={{ marginBotton: 8 }}>
          <Text style={style.label}>Email</Text>
          <TextInput
            id="email"
            style={style.input}
            value={email}
            inputMode="email"
            onChangeText={onChangeEmail}
            placeholder="Enter your email"
          />
        </View>
        <TouchableOpacity
          style={style.submitButton}
          onPress={handleSubmitButton}>
          <Text style={style.textSubmit}>Kirim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => route.push("/auth/Login")}
          style={style.blankButton}>
          <Text style={{ textAlign: "center" }}>Back to login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 20,
  },
  wrapperTitle: {
    paddingHorizontal: 20,
    paddingBottom: 32,
    display: "flex",
    justifyContent: "flex-end",
    height: 240,
    backgroundColor: "#FF680D",
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  subTitle: {
    opacity: 0.9,
    color: "#FFFFFF",
  },
  label: {
    paddingBottom: 8,
    fontSize: 18,
    color: "#222B23",
  },
  input: {
    paddingHorizontal: 16,
    height: 56,
    fontWeight: 500,
    fontSize: 18,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,0.3)",
    borderRadius: 12,
  },
  submitButton: {
    marginTop: 16,
    padding: 16,
    backgroundColor: "#FF680D",
    borderRadius: 12,
  },
  textSubmit: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: 500,
    fontSize: 18,
  },
  blankButton: {
    marginTop: 16,
    padding: 16,
    borderRadius: 12,
  },
});
