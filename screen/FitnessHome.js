import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Fitness from '../utils/Fitness';
import { useNavigation } from "@react-navigation/native"

export default function FitnessHome() {
    const Navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Indicateur d’humeur</Text>
      <Text style={styles.subTitle}>
        Comment vous sentez-vous en ce moment?
      </Text>
      <FlatList
            data={Fitness}
            renderItem={(itemData) => {
              const fitness= itemData.item;
              return (
                <TouchableOpacity key={itemData.index} style={styles.button} onPress={()=> Navigation.navigate('fitness', fitness)}>
                    <Text style={styles.titleFitness}>{fitness.title}</Text>
                </TouchableOpacity>
              );
            }}
          />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25,
        alignItems: "center",
        backgroundColor: "#4472C4",
        paddingBottom: 20
      },
    title:{
        color:'white',
        fontWeight: 'bold',
        marginVertical: 30,
        fontSize: 17,
        letterSpacing: 1
    },
    subTitle:{
        paddingVertical: 25,
        paddingHorizontal: 15,
        backgroundColor:'#A6A6A6',
        fontSize: 15
    },
    button:{
        marginTop: 50,
        paddingVertical: 20,
        width: 315,
        backgroundColor:'black',
        display: 'flex',
        alignItems: "center",
        borderRadius: 250
    },
    titleFitness:{
        color:'white',
        fontSize: 15
    }
})