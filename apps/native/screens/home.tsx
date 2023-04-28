import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {useAuthentication} from "../hooks/useAuthentication";
import {Button, Icon} from "react-native-elements";

export const Home = () => {
  const {user} = useAuthentication();
  const [prompt, setPrompt] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80} // added this line
    >
      <View style={styles.welcomeContainer}>
        <Text>Welcome {user?.email}!</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Send a message."
            placeholderTextColor={"white"}
            style={styles.control}
            value={prompt}
            onChangeText={(text) => setPrompt(text)}
          />
          <Icon style={styles.button} name="send" size={16} color="blue" />
        </View>
        <Text style={styles.disclaimer}>
          ChatGPT may produce inaccurate information about people, places, or
          facts. ChatGPT Mar 23 Version
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  welcomeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    justifyContent: "flex-end",
    backgroundColor: "green",
    padding: 14,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
  },
  button: {
    backgroundColor: "white",
    justifyContent: "center",
    flex: 1,
    padding: 10,
  },
  control: {
    backgroundColor: "red",
    color: "white",
    padding: 10,
    flex: 9,
  },
  disclaimer: {
    backgroundColor: "yellow",
    marginTop: 4,
    marginBottom: 10,
    padding: 0,
  },
});
