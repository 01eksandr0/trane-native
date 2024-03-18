import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Page1 } from "./pages/Page1/Page1";
import { PostsScreen } from "./Screens/PostsScreen/PostsScreen";
import { LoginScreen } from "./Screens/LoginScreen/LoginScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App() {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="Registration" component={Page1} />
      <Tabs.Screen name="Login" component={PostsScreen} />
    </Tabs.Navigator>
  );
}
