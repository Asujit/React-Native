import { Text, View, StyleSheet, Pressable, Dimensions } from "react-native";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.push('/Screens/Home')} style={styles.btn}>
        <Text>Go to Home</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "cyan",
    width: width * 0.5,
    alignItems: "center",
    padding: "5%",
    borderRadius: 10,
  },
});
