import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ itemData, deleteItemHandler, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "gray" }}
        onPress={deleteItemHandler.bind(this, id)}
        style={({ pressed }) => (pressed ? styles.pressedItem : null)}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },

  pressedItem: {
    opacity: 0.5,
  },

  goalText: {
    color: "white",
    padding: 8,
  },
});
