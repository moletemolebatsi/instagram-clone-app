import { View, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import SignedOutApp from "./SignedOutApp";

const AppNav = () => {
  
  return (
    <View style={styles.container}>
      <SignedOutApp />
    </View>
  );
};

export default AppNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
