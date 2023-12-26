// Home.js
import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native'; // Adicionei ScrollView
import Card from '../components/Cards';
import FooterCards from '../components/Footer';
import logo from '../../assets/logo.png';
import CreditCard from '../components/CreditCard';
import banner from '../../assets/banner.jpg';
import Saldo from '../components/Saldo';

export default function HomeScreen() {
  const [showSaldo, setShowSaldo] = useState(true);

  const toggleSaldoVisibility = () => {
    setShowSaldo(!showSaldo);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#E5D4FF' }}>
    <ScrollView contentContainerStyle={styles.container} >
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.textHeader}>Future Bank</Text>
      </View>
      <View style={styles.banner}>
        <Image source={banner} style={styles.bannerImage}></Image>
      </View>
      <View style={styles.content}>
        <View style={styles.saldoAreaPixContainer}>
          <View style={styles.pixCard}>
            <Text style={styles.textPix}>Área Pix</Text>
          </View>
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
        <FooterCards iconName="card">Cartão</FooterCards>
        <FooterCards iconName="pix">Pix</FooterCards>
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

    saldo: {
      backgroundColor: '#ccc',
      borderRadius: 10,
      marginRight: 10,
      marginBottom: 10,
      alignItems: 'center',
      marginVertical: 20,
      width: '50%',
    },
    saldoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    saldoValue: {
      marginLeft: 10,
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
    cards: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    content: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 20,
      width: '100%',
      height: 250,
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
      width: '100%', // Pode ajustar conforme necessário
      height: '100%', // Pode ajustar conforme necessário
      resizeMode: 'cover',
      borderRadius: 10, // ou 'contain' dependendo da preferência
    },

    footer: {
      width: '100%',
      height: 50,
      backgroundColor: '#8e44ad', // Cor roxa escura para o rodapé
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingHorizontal: 10,
      marginTop: 70,
    },
  });
