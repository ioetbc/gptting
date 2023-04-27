import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {getAuth, signOut} from "firebase/auth";
import {useAuthentication} from "../hooks/useAuthentication";
import {Button} from "react-native-elements";

const auth = getAuth();

export default function HomeScreen() {
  const {user} = useAuthentication();

  return (
    <View style={styles.container}>
      <Text>Welcome {user?.email}!</Text>

      <Button
        title="Sign Out"
        style={styles.button}
        onPress={() => signOut(auth)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 10,
  },
});
