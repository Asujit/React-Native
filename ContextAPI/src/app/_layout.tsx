import { Stack } from "expo-router";
import { CountContext } from "@/Context/Count";

export default function RootLayout() {
  return (
    <CountContext.Provider value={0}>
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="index" />
      <Stack.Screen name="Screens" />
    </Stack>
    </CountContext.Provider>
  );
}
