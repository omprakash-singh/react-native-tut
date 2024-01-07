import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import Task from "./components/Task";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);
  console.log(task);
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.heading}>
          <Text style={styles.headingText}>Today Todo's</Text>
        </View>
        {task.map((value, index) => {
          return (
            <View key={index}>
              <Task task={value.task} />
            </View>
          );
        })}
      </View>

      <View style={styles.taskInputView}>
        <View style={styles.inputView}>
          <TextInput
            value={input}
            onChangeText={(e) => {
              setInput(e);
              console.log(e);
            }}
            style={styles.taskInput}
            placeholder="Enter Task"
          />
        </View>
        <View>
          <Pressable
            onPress={() => {
              setTask((prev) => {
                return [
                  ...prev,
                  {
                    id: task.length + 1,
                    isComplete: false,
                    task: input,
                  },
                ];
              });
            }}
            style={styles.taskAddButton}
          >
            <Text style={styles.taskButtonText}>Add Task</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },

  heading: {
    marginTop: 100,
    marginLeft: 20,
    marginBottom: 30,
  },
  headingText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  taskInputView: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputView: {
    width: 100,
  },
  taskInput: {
    padding: 14,
    backgroundColor: "#fff",
    borderRadius: 10,
    fontSize: 16,
    width: 405,
  },
  taskAddButton: {
    marginRight: 10,
    backgroundColor: "#fff",
    padding: 10,
  },
  taskButtonText: {
    fontWeight: "bold",
  },
});
