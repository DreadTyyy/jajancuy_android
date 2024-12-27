import { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const { onLogin } = useContext(AuthContext);
  const navigation = useNavigation();

  const context = useContext(AuthContext);

  console.log("AuthContext:", context);

  const handleSubmitLogin = async () => {
    // Validation form
    if (email === "" || !email.includes("@")) {
      Alert.alert("Email is required");
      return;
    }
    if (password === "") {
      Alert.alert("Password is required");
      return;
    }
    const { error, message } = await onLogin({ email, password });
    if (error) {
      Alert.alert(message);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}>
      <View style={style.wrapperTitle}>
        <Text
          style={{ color: "#FFFFFF", paddingTop: 24 }}
          onPress={() => navigation.navigate("Home")}>
          Back to Home Screen
        </Text>
        <Text style={style.title}>Sign in to your Account</Text>
      </View>
      <View style={style.container}>
        <View style={{ marginBottom: 16 }}>
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
        <View style={{ marginBottom: 8 }}>
          <Text style={style.label}>Password</Text>
          <TextInput
            id="password"
            style={style.input}
            value={password}
            onChangeText={onChangePassword}
            secureTextEntry
            autoCapitalize="none"
            placeholder="Enter your password"
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={style.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.submitButton}
          onPress={handleSubmitLogin}>
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
    </SafeAreaView>
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
    justifyContent: "space-between",
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
    textAlign: "right",
    fontSize: 16,
    fontWeight: 500,
    color: "#FF680D",
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
