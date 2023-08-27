import { useState } from "react";
import { Button, StyleSheet, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [isModalHidden, setIsModalHidden] = useState(true);

  const deleteGoalHandler = (id) => {
    setGoalList((goals) => {
      return goals.filter((goal) => goal.id !== id);
    });
  };

  const handleShowModal = () => {
    setIsModalHidden(!isModalHidden);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.addButton}>
          <Button
            onPress={handleShowModal}
            title="Add New Goal"
            color="#5e0acc"
          />
        </View>
        <GoalInput
          isModalHidden={isModalHidden}
          setIsModalHidden={setIsModalHidden}
          setGoalList={setGoalList}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goalList}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  itemData={itemData}
                  id={itemData.item.id}
                  deleteItemHandler={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
          <Button title="Clear list" onPress={() => setGoalList([])} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flex: 1,
  },

  addButton: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    padding: 10,
  },

  goalsContainer: {
    flex: 4,
    marginTop: 20,
  },
});
