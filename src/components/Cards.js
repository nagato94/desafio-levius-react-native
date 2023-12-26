import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 90,
    height: 60,
    backgroundColor: "#9b59b6",
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    borderColor: "#fff", // Cor da borda
    borderWidth: 1, // Largura da borda
    shadowOffset: {
      width: 0,
      height: 2, // Altura da sombra
    },
    shadowOpacity: 0.25, // Opacidade da sombra
    shadowRadius: 3.84, // Raio da sombra
    elevation: 5, // Sombra no Android
  },
  cardText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
});
