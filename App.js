import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Platform,
  Text,
  View,
} from "react-native";

// const isAndroid = Platform.OS === "android";

console.log(StatusBar.currentHeight);

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{ padding: 16, backgroundColor: "green" }}>
          <Text>Search</Text>
        </View>
        <View style={{ flex: 1, padding: 16, backgroundColor: "blue" }}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    // paddingTop: 40,
  },
});
