// PixScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faCopy, faQrcode, faKey, faStickyNote } from '@fortawesome/free-solid-svg-icons';

const Card = ({ title, children }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    {children}
  </View>
);

export default function PixScreen({ navigation }) {
  const handleVoltarPress = () => {
    navigation.goBack();
  };

  // Aqui você pode adicionar as informações que deseja exibir na tela Pix
  const pixTypes = [
    { type: 'Pix Copia e Cola', icon: faCopy },
    { type: 'Pix QRCode', icon: faQrcode },
    { type: 'Pix por Chave', icon: faKey },
    { type: 'Pix por NFC', icon: faStickyNote },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#E5D4FF' }}>
      <TouchableOpacity onPress={handleVoltarPress} style={styles.botaoVoltar}>
        <FontAwesomeIcon icon={faArrowLeft} color="#fff" size={20} />
        <Text style={styles.textoBotaoVoltar}>Voltar para a página inicial</Text>
      </TouchableOpacity>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.cardTitle}>Sua Área Pix</Text>

          {pixTypes.map((pix, index) => (
            <Card key={index} title={pix.type}>
              <FontAwesomeIcon icon={pix.icon} size={50} />
            </Card>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

// Aqui você pode usar os mesmos estilos que usou em DetalhesCartaoScreen
const styles = StyleSheet.create({
  botaoVoltar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8e44ad',
    marginTop: 20,
    padding: 10,
    height: 50,
  },
  textoBotaoVoltar: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  scrollContainer: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    width: '80%',
    marginTop: 40,
    marginLeft: 40,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8e44ad',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
