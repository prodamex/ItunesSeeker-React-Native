import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";

export default function noteEtoiles({ note, noteMax, setNote, disable }) {
  const tabNote = [];
  for (let i = 1; i <= noteMax; i++) {
    tabNote.push(i);
  }

  return (
    <View style={style.container}>
      {tabNote &&
        tabNote.map((item) => {
          if (disable) {
            return (
              <View style={style.img} key={item}
              >
                <MaterialCommunityIcons
                  name="star"
                  color={note <= item ? "black" : "yellow"}
                  size={54}
                />
              </View>
            );
          }
          return (
            <View style={style.img} key={item} >
              <TouchableOpacity onPress={() => setNote(item)}>
                <MaterialCommunityIcons
                  style
                  name="star"
                  color={note + 1 <= item ? "black" : "yellow"}
                  size={54}
                />
              </TouchableOpacity>
            </View>
          );
        })}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  img: {
    margin: 5,
  },
});