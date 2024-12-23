import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

export default function Login() {
  const [username, onChangeUsername] = useState("");
  const [password, onChangePassword] = useState("");

  const onSubmit = () => {
    if (username === "" || password === "") {
      alert("Username/password tidak boleh kosong!");
      return;
    }
    alert(`Username:${username}, Password: ${password}`);
  };

  return (
    <View>
      <View style={style.wrapperTitle}>
        <Text style={style.title}>Sign in to your Account</Text>
      </View>
      <View style={style.container}>
        <View style={{ marginBottom: 16 }}>
          <Text style={style.label}>Email</Text>
          <TextInput
            id="username"
            style={style.input}
            value={username}
            inputMode="email"
            onChangeText={onChangeUsername}
            placeholder="Jhon28"
          />
        </View>
        <View style={{ marginBottom: 8 }}>
          <Text style={style.label}>Password</Text>
          <TextInput
            id="password"
            style={style.input}
            value={password}
            onChangeText={onChangePassword}
            secureTextEntry
            placeholder="Your password"
          />
        </View>
        <Text style={style.forgotPassword}>Forgot password?</Text>
        <TouchableOpacity style={style.submitButton} onPress={onSubmit}>
          <Text style={style.textSubmit}>Login</Text>
        </TouchableOpacity>
        <View style={style.wrapperOptionalLogin}>
          <View style={style.line}></View>
          <Text style={{ textAlign: "center" }}>Or login with</Text>
          <View style={style.line}></View>
        </View>
        <TouchableOpacity
          style={style.buttonOptionalLogin}
          onPress={() => alert("SSO login")}>
          <Text style={style.textOptionalLogin}>Sign In with SSO</Text>
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
  forgotPassword: {
    fontSize: 16,
    fontWeight: 500,
    color: "#FF680D",
    textAlign: "right",
    textDecorationLine: "underline",
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
  wrapperOptionalLogin: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 32,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#000000",
    margin: 10,
  },
  buttonOptionalLogin: {
    padding: 16,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,0.3)",
    borderRadius: 12,
  },
  textOptionalLogin: {
    fontWeight: 500,
    fontSize: 18,
    textAlign: "center",
    color: "#5A5A5A",
  },
});
