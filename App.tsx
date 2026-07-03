import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider, useAuth } from "./src/auth/AuthContext";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";

function AppContent() {
  const { user, loading, signOut } = useAuth();
  const [mode, setMode] = useState<"login" | "signup">("login");

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!user) {
    return (
      <View style={styles.authContainer}>
        {mode === "login" ? (
          <LoginScreen onSwitchToSignup={() => setMode("signup")} />
        ) : (
          <SignupScreen onSwitchToLogin={() => setMode("login")} />
        )}
      </View>
    );
  }

  return <HomeScreen user={user} onSignOut={signOut} />;
}

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaView style={styles.container}>
        <AppContent />
        <StatusBar style="auto" />
      </SafeAreaView>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  authContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
