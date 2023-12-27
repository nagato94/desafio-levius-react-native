// Home.js
import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native'; // Adicionei ScrollView
import Card from '../components/Cards';
import FooterCards from '../components/Footer';
import logo from '../../assets/logo.png';
import CreditCard from '../components/CreditCard';
import banner from '../../assets/banner.jpg';
import Saldo from '../components/Saldo';

export default function HomeScreen({navigation}) {
  const [showSaldo, setShowSaldo] = useState(true);

  const toggleSaldoVisibility = () => {
    setShowSaldo(!showSaldo);
  };

  const handlePixNavigation = () => {
    navigation.navigate('Pix'); // Navega para a tela Pix
  };


  const handleCartaoNavigation = () => {
    navigation.navigate('DetalhesCartao'); // Navega para a tela DetalhesCartao
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#E5D4FF' }}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.textHeader}>Future Bank</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
      <View style={styles.banner}>
        <Image source={banner} style={styles.bannerImage}></Image>
      </View>
      <View style={styles.content}>
        <View style={styles.saldoAreaPixContainer}>
          <TouchableOpacity style={styles.pixCard} onPress={handlePixNavigation}>
            <Text style={styles.textPix}>Área Pix</Text>
          </TouchableOpacity>
          <CreditCard />
        </View>
        <View style={styles.cards}>
          <Card>Extrato</Card>
          <Card>Seguro</Card>
          <Card>Lojas Parceiras</Card>
          <Card>Cartão de Crédito</Card>
          <Card>Débito Automático</Card>
          <Card>Empréstimo</Card>
        </View>
        <Saldo showSaldo={showSaldo} onToggleSaldo={toggleSaldoVisibility} />
      </View>

      <View style={styles.footer}>
        <FooterCards iconName="home">Home</FooterCards>
        <FooterCards iconName="card" onPress={handleCartaoNavigation}>Cartão</FooterCards>
        <FooterCards iconName="pix" onPress={handlePixNavigation}>Pix</FooterCards>
        <FooterCards iconName="investments">Invest</FooterCards>
      </View>
    </ScrollView>
    </View>
  );
}


  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'space-between',
    },
    logo: {
      width: 50,
      height: 50,
      resizeMode: 'contain',
    },
    saldoAreaPixContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      marginBottom: 20,
    },


    textPix: {
      fontSize: 16,
      fontWeight: 'bold',
      justifyContent: 'center',
      color: '#fff',
    },
    pixCard: {
      width: 110,
      backgroundColor: '#9b59b6', // Cor roxa para o cartão Pix
      alignItems: 'center',
      padding: 20,
      borderRadius: 10,
      marginHorizontal: 10,
      marginTop: 12,
      shadowColor: "#000",
      borderColor: "#fff",
      borderWidth: 1,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,

    },
    cards: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginBottom: 50,
      marginTop: 10,
    },
    content: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',

    },
    header: {
      color: 'white',
      width: '100%',
      height: 50,
      backgroundColor: '#8e44ad', // Cor roxa escura para o cabeçalho
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingHorizontal: 10,
      marginVertical: 20,
    },
    textHeader: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    banner: {
      width: '100%',
      marginVertical: 10,
      height: 120,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,

    },
    bannerImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      borderRadius: 10,
    },

    footer: {
      width: '100%',
      height: 50,
      backgroundColor: '#8e44ad',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingHorizontal: 10,

    },
  });
