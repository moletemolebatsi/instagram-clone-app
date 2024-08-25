import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import AppNav from './src/navigation/AppNav';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
        <AppNav />
        <StatusBar style="light" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
