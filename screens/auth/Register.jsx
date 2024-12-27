import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Alert,
} from "react-native";
import { register } from "../../utils/api";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
  const [firstName, onChangeFirstName] = useState("");
  const [lastName, onChangeLastName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [password2, onChangePassword2] = useState("");
  const navigation = useNavigation();

  const onRegister = async () => {
    // Validation form
    if (firstName === "" || lastName === "") {
      Alert.alert("First name or last name is required");
      return;
    }
    if (email === "" || !email.includes("@")) {
      Alert.alert("Email is required");
      return;
    }
    if (password === "") {
      Alert.alert("Password is required");
      return;
    }
    if (password !== "" && password !== password2) {
      Alert.alert("Password and confirmation password must match");
      return;
    }
    const { error, message } = await register({
      firstName,
      lastName,
      email,
      password,
      password2,
    });
    Alert.alert(message);
    if (!error) {
      navigation.navigate("Login");
    }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView contentContainerStyle={style.content}>
          <View style={style.wrapperTitle}>
            <Text
              style={{ color: "#FFFFFF", paddingTop: 24 }}
              onPress={() => navigation.navigate("Home")}>
              Back to Home Screen
            </Text>
            <Text style={style.title}>Register</Text>
          </View>
          <View style={style.container}>
            <View style={{ marginBottom: 16 }}>
              <Text style={style.label}>First Name</Text>
              <TextInput
                id="first-name"
                style={style.input}
                value={firstName}
                inputMode="text"
                onChangeText={onChangeFirstName}
                placeholder="Enter your first name"
              />
            </View>
            <View style={{ marginBottom: 8 }}>
              <Text style={style.label}>Last Name</Text>
              <TextInput
                id="last-name"
                style={style.input}
                value={lastName}
                onChangeText={onChangeLastName}
                inputMode="text"
                placeholder="Enter your last name"
              />
            </View>
            <View style={{ marginBottom: 8 }}>
              <Text style={style.label}>Email</Text>
              <TextInput
                id="email"
                style={style.input}
                value={email}
                onChangeText={onChangeEmail}
                inputMode="email"
                placeholder="Enter your email"
              />
            </View>
            <View style={{ marginBottom: 8 }}>
              <Text style={style.label}>Password</Text>
              <TextInput
                id="password"
                style={style.input}
                value={password}
                secureTextEntry
                autoCapitalize="none"
                onChangeText={onChangePassword}
                placeholder="Enter your password"
              />
            </View>
            <View style={{ marginBottom: 8 }}>
              <Text style={style.label}>Confirm Password</Text>
              <TextInput
                id="password2"
                style={style.input}
                value={password2}
                autoCapitalize="none"
                secureTextEntry
                onChangeText={onChangePassword2}
                placeholder="Enter confirm password"
              />
            </View>
            <TouchableOpacity style={style.submitButton} onPress={onRegister}>
              <Text style={style.textSubmit}>Register</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  content: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
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
});
