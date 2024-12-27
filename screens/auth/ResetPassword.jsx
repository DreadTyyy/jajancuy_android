import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

export default function ResetPassword() {
  const [password, onChangePassword] = useState("");
  const [password2, onChangePassword2] = useState("");
  const navigation = useNavigation();

  const handleSubmitButton = () => {
    return;
  };

  return (
    <View>
      <View style={style.wrapperTitle}>
        <Text style={style.title}>New Password</Text>
        <Text style={style.subTitle}>Set your new password</Text>
      </View>
      <View style={style.container}>
        <View style={{ marginBottom: 8 }}>
          <Text style={style.label}>Password</Text>
          <TextInput
            id="password"
            secureTextEntry
            autoCapitalize="none"
            style={style.input}
            value={password}
            onChangeText={onChangePassword}
            placeholder="Enter your password"
          />
        </View>
        <View style={{ marginBottom: 8 }}>
          <Text style={style.label}>Confirm password</Text>
          <TextInput
            id="password"
            secureTextEntry
            autoCapitalize="none"
            style={style.input}
            value={password2}
            onChangeText={onChangePassword2}
            placeholder="Enter your confirm password"
          />
        </View>
        <TouchableOpacity
          style={style.submitButton}
          onPress={handleSubmitButton}>
          <Text style={style.textSubmit}>Reset Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
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
