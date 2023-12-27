// Saldo.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Saldo = ({ showSaldo, onToggleSaldo }) => {
  return (
    <View style={styles.saldoContainer}>
      <TouchableOpacity onPress={onToggleSaldo}>
        <View style={styles.saldoContent}>
          <Text style={styles.saldoLabelText}>Saldo</Text>
          <View style={styles.saldoValue}>
            {showSaldo && <Text style={styles.saldoText}>R$ 0,00 </Text>}
          </View>
          <Icon
            name={showSaldo ? 'eye' : 'eye-slash'}
            size={20}
            color="#fff"
            onPress={onToggleSaldo}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  saldoContainer: {
    backgroundColor: '#9b59b6',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    marginBottom: 10,
    alignItems: 'center',
    width: '50%',

  },
  saldoContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  saldoLabelText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  saldoValue: {
    marginLeft: 10,
  },
  saldoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Saldo;
