// CreditCard.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function CreditCard() {
  const navigation = useNavigation();

  const handleCardPress = () => {

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
    borderColor: '#cccccc',
    borderWidth: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1, 
    shadowRadius: 5,
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
