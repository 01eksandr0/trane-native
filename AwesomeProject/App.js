import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Page1 } from "./pages/Page1/Page1";
import { LoginScreen } from "./Screens/LoginScreen/LoginScreen";

export default function App() {
  const Tabs = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tabs.Screen name="Registration" component={Page1} />
        <Tabs.Screen name="Login" component={LoginScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
