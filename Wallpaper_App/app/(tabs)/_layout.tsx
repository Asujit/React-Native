import { Tabs } from "expo-router";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: "blue", headerShown: false}}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => <FontAwesome name="home" size={24} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: () => (
            <MaterialIcons name="travel-explore" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: () => (
            <MaterialIcons name="account-circle" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
