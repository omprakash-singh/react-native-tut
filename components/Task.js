import { Text, StyleSheet, View } from "react-native";

const Task = (props) => {
  return (
    <>
      <View style={styles.taskView}>
        <Text style={styles.taskText}>{props.task}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  taskView: {
    padding: 20,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
  },
  taskText: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Task;
