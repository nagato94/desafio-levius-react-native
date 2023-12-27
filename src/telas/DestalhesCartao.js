import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Card = ({ title, children }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    {children}
  </View>
);

export default function DetalhesCartaoScreen({ navigation }) {
  const handleVoltarPress = () => {
    navigation.goBack();
  };

  const faturas = [
    { descricao: 'Compra em Loja XYZ', valor: 300.0 },
    { descricao: 'Compra Online ABC', valor: 150.0 },
    { descricao: 'Compra Online XXX', valor: 150.0 },
    { descricao: 'Compra Online XXX', valor: 150.0 },
    { descricao: 'Compra Online XXX', valor: 150.0 },
    { descricao: 'Compra Online XXX', valor: 150.0 },
    { descricao: 'Compra Online XXX', valor: 150.0 },
    
    { mes: 'Janeiro 2023', valor: 1200.0 },
    { mes: 'Fevereiro 2023', valor: 1500.0 }
  ];

  const totalFaturas = faturas.reduce((total, item) => total + item.valor, 0);

  return (
    <View style={{ flex: 1, backgroundColor: '#E5D4FF' }}>
      <TouchableOpacity onPress={handleVoltarPress} style={styles.botaoVoltar}>
        <FontAwesomeIcon icon={faArrowLeft} color="#fff" size={20} />
        <Text style={styles.textoBotaoVoltar}>Voltar para a página inicial</Text>
      </TouchableOpacity>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.cardTitle}>Seu Cartão de Crédito</Text>
          <View style={styles.creditCard}>
            <View style={styles.creditCardTop} />
            <Text style={styles.creditCardText}>Kaique Costa e Silva</Text>
            <Text style={styles.creditCardText}>4332 ***** ****</Text>
            <View style={styles.creditCardBottom} />
          </View>

          <Card title="Informações de Compras">
            {faturas
              .filter((item) => !item.mes)
              .map((compra, index) => (
                <View key={index} style={styles.faturaItemContainer}>
                  <Text style={styles.faturaItemMes}>{compra.descricao} - R$ {compra.valor.toFixed(2)}</Text>
                </View>
              ))}
          </Card>

          <Card title="Faturas">
            {faturas
              .filter((item) => item.mes)
              .map((fatura, index) => (
                <View key={index} style={styles.faturaItemContainer}>
                  <Text style={styles.faturaItemMes}>{fatura.mes} - R$ {fatura.valor.toFixed(2)}</Text>
                </View>
              ))}
            <View style={styles.faturaTotalContainer}>
              <Text style={styles.faturaTotalText}>Total:</Text>
              <Text style={styles.faturaTotalValor}>R$ {totalFaturas.toFixed(2)}</Text>
            </View>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
}

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
  creditCard: {
    width: '100%',
    backgroundColor: '#9b59b6',
    borderRadius: 10,
    padding: 35,
    justifyContent: 'center',
    elevation: 5,
    borderColor: '#cccccc',
    borderWidth: 3,
    shadowColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    marginBottom: 20,
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
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#8e44ad',
  },
  faturaItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  faturaItemMes: {
    fontSize: 16,
  },
  faturaTotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  faturaTotalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  faturaTotalValor: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8e44ad',
  },
});
