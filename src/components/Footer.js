// FooterCards.js
import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faCreditCard, faMoneyBill, faChartBar } from '@fortawesome/free-solid-svg-icons';

export default function FooterCards({ iconName = 'home', onPress, children }) {

  const iconMap = {
    home: faHome,
    card: faCreditCard,
    pix: faMoneyBill,
    investments: faChartBar,
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.footerCard}>
      <FontAwesomeIcon icon={iconMap[iconName]} size={20} color="#8e44ad" />
      <Text style={styles.footerText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  footerCard: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  footerText: {
    color: "#8e44ad",
    fontSize: 8,
    textAlign: "center",
    fontWeight: "bold",
  },
});
