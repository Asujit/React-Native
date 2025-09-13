import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Text, View, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

export default function CounterScreen() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setCount((c) => c + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <SafeAreaView>
    <Text>{count}</Text>

    <View>
      <Text></Text>
      <Link href={"/account"}>
        <Text>Take me to the Account page</Text>
      </Link>

      <Link href={"/explore"}>
        <Text>Take me to the explore page</Text>
      </Link>

    </View>
    </SafeAreaView>
  );
}
