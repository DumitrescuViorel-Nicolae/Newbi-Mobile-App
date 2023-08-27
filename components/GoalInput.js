import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

const GoalInput = ({ setGoalList, isModalHidden, setIsModalHidden }) => {
  const [goal, setGoal] = useState();

  const inputHandler = (enteredText) => {
    setGoal(enteredText);
  };

  const addGoalHandler = () => {
    setGoalList((goalList) => [
      ...goalList,
      { text: goal, id: Math.random().toString() },
    ]);
    setGoal("");
    setIsModalHidden(!isModalHidden);
  };

  return (
    <Modal visible={!isModalHidden} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.imageStyling}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          onChangeText={inputHandler}
          style={styles.textInput}
          placeholder="Goal"
          value={goal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              onPress={() => setIsModalHidden(!isModalHidden)}
              title="Cancel"
              color={"#f31282"}
            />
          </View>
          <View style={styles.button}>
            <Button
              color={"#5e0acc"}
              onPress={addGoalHandler}
              title="Add goal"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#311b6b",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    borderRadius: 6,
    backgroundColor: "#e4d0ff",
    color: "#120438",
    fontWeight: "bold",
    width: "100%",
    padding: 12,
  },

  buttonContainer: {
    flexDirection: "row",
  },

  button: {
    width: "35%",
    marginHorizontal: 8,
    marginVertical: 12,
  },

  imageStyling: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
