import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import {
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ToDoType = {
  id: number;
  title: string;
  isDne: boolean;
};

export default function Index() {
  const todoData = [
    {
      id: 1,
      title: "TODO 1",
      isDne: false,
    },
    {
      id: 2,
      title: "TODO 2",
      isDne: true,
    },
    {
      id: 3,
      title: "TODO 3",
      isDne: false,
    },
    {
      id: 4,
      title: "TODO 4",
      isDne: false,
    },
    {
      id: 5,
      title: "TODO 5",
      isDne: false,
    },
  ];
  const [todos, setTodo] = useState<ToDoType[]>(todoData);
  const [todoText, setTodoText] = useState<string>("");

  const addTodo = async() => {
    try{
    const newTodo = {
      id: Math.random(),
      title: todoText,
      isDne: false
    };
    todos.push(newTodo);
    setTodo(todos);
    await AsyncStorage.setItem('my-todo', JSON.stringify(todos));
    setTodoText('');
    Keyboard.dismiss();
  } catch (error){
    console.log(error)
  }
}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            alert("Clicked");
          }}
        >
          <Ionicons name="menu" size={24} color={"black"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            alert("Profile Clicked");
          }}
        >
          <Image
            source={require("../assets/images/Woman.jpg")}
            style={styles.img}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.search}>
        <Ionicons name="search" size={20} color={"black"} />
        <TextInput
          placeholder="Search"
          style={styles.bar}
          clearButtonMode="always"
        ></TextInput>
      </View>

      <FlatList
        data={[...todos].reverse()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TodoItem todo={item} />}
      />
      <KeyboardAvoidingView
        style={styles.footer}
        behavior="padding"
        keyboardVerticalOffset={10}
      >
        <TextInput
          placeholder="Add New ToDo"
          value={todoText}
          onChangeText={(text) => setTodoText(text)}
          style={styles.newTodoInput}
          autoCorrect={false}
        />
        <TouchableOpacity onPress={() => addTodo()} style={styles.addBtn}>
          <Ionicons name="add" size={30} color={"white"} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const TodoItem = ({ todo }: { todo: ToDoType }) => (
  <View style={styles.todoContainer}>
    <Checkbox value={todo.isDne} />
    <Text
      style={[
        styles.todoText,
        todo.isDne && { textDecorationLine: "line-through" },
      ]}
    >
      {todo.title}
    </Text>
    <TouchableOpacity
      onPress={() => {
        alert("Deleted " + todo.id);
      }}
    >
      <Ionicons name="trash" size={20} color={"red"} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "f5f5f5",
  },
  header: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  search: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    gap: 20,
  },
  bar: {
    flex: 1,
    fontSize: 16,
    color: "black",
    // backgroundColor: "blue"
  },
  todoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginVertical: 5,
    backgroundColor: "white",
  },
  todoText: {
    color: "black",
    fontSize: 16,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  newTodoInput: {
    flex: 1,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    color: "black",
  },
  addBtn: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 10,
  },
});
