// CreditCard.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function CreditCard() {
  const navigation = useNavigation();

  const handleCardPress = () => {
    // Navegar para a tela de detalhes do cartão de crédito
    navigation.navigate('DetalhesCartao');
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <LinearGradient colors={['#A62A6A', '#6A2597']} style={styles.creditCard}>
        <View style={styles.creditCardTop} />
        <Text style={styles.creditCardText}>Kaique Costa e Silva</Text>
        <Text style={styles.creditCardText}>4332 ***** ****</Text>
        <View style={styles.creditCardBottom} />
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  creditCard: {
    width: 200,
    backgroundColor: '#9b59b6',
    borderRadius: 10,
    padding: 30,
    marginRight: 10,
    alignItems: 'center',
    marginTop: 70,
    elevation: 5,
    borderColor: '#cccccc', // Cor da borda
    borderWidth: 3, // Largura da borda
    shadowColor: "#000", // Cor da sombra
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1, // Opacidade da sombra
    shadowRadius: 5, // Raio da sombra
  },
  creditCardTop: {
    backgroundColor: '#8e44ad',
    height: 20,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  creditCardBottom: {
    backgroundColor: '#bdc3c7',
    height: 20,
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    position: 'absolute',
    bottom: 4,
  },
  creditCardText: {
    color: '#fff',
  },
});
