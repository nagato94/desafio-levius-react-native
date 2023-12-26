import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faCreditCard, faMoneyBill, faChartBar } from '@fortawesome/free-solid-svg-icons';

export default function FooterCards(props) {
  
  const iconMap = {
    home: faHome,
    card: faCreditCard,
    pix: faMoneyBill,
    investments: faChartBar,
  };

  const { iconName = 'home' } = props;

  return (
    <View style={styles.footerCard}>
      <FontAwesomeIcon icon={iconMap[iconName]} size={20} color="#8e44ad" />
      <Text style={styles.footerText}>{props.children}</Text>
    </View>
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
