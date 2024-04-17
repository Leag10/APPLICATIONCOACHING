import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

const { width, height } = Dimensions.get("window");

export default function Fitness({ navigation, route }) {
  const params = route.params || {};
  const { title, image } = params;
  useEffect(() => {
    navigation.setOptions({
      headerTitle: title,
      headerTitleAlign: "center",
      headerTitleStyle: {
        color: "white",
      },
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#FFC000",
      },
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <FlatList
            data={image}
            renderItem={(itemData) => {
              return (
                <View style={styles.imageContainer}>
                    <Image source={itemData.item} style={styles.image}/>
                </View>
              );
            }}
          />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4472C4",
  },
  image:{
    objectFit: "cover",
    width:'100%',
    height: "100%"
  },
  imageContainer:{
    width: width,
    height: height/3.3
  }
});
