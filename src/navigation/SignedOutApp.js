import LoginApp from "../screens/LoginApp";
import ForgotApp from "../screens/ForgotApp";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignupApp from "../screens/SignupApp";

const Stack = createNativeStackNavigator();

const SignedOutApp = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginApp} />
      <Stack.Screen
        name="Signup"
        component={SignupApp}
        options={{
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="Forgot"
        component={ForgotApp}
        options={{
          animation: "slide_from_right",
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default SignedOutApp;
