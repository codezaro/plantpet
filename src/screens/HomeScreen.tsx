import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { User } from "../auth/AuthContext";

type Props = {
  user: User;
  onSignOut: () => void;
};

export default function HomeScreen({ user, onSignOut }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, {user.email}!</Text>
      <Text style={styles.subtitle}>You are now signed in.</Text>
      <View style={styles.buttonWrapper}>
        <Button title="Sign Out" onPress={onSignOut} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 400,
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 24,
    textAlign: "center",
  },
  buttonWrapper: {
    width: "100%",
  },
});
