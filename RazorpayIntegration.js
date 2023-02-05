import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NativeModules,
  NativeEventEmitter,
  Alert
} from 'react-native';
import { Card } from 'react-native-paper';

import RazorpayCheckout from 'react-native-razorpay';

class RazorpayIntegration extends Component {

  render() {
    return (
      <View style={styles.container}>
      <TouchableHighlight onPress={() => {
        var options = {
          description: 'Credits towards consultation',
          image: 'https://i.imgur.com/3g7nmJC.png',
          currency: 'INR',
          key: 'rzp_test_RMPvGIU1Rz6Hho',
          amount: '5000',
          external: {
            wallets: ['paytm']
          },
          name: 'foo',
          prefill: {
            email: 'akshay@razorpay.com',
            contact: '8955806560',
            name: 'Akshay Bhalotia'
          },
          theme: {color: '#F37254'}
        }

        Alert.alert
        RazorpayCheckout.open(options).then((data) => {
          // handle success
          alert(`Success: ${data.razorpay_payment_id}`);

        }).catch((error) => {
          // handle failure
          alert(`Error: ${error.code} | ${error.description}`);
        });
        RazorpayCheckout.onExternalWalletSelection(data => {
          alert(`External Wallet Selected: ${data.external_wallet} `);
        });
      }}>
      <Text style = {styles.text}>PAY</Text>
      </TouchableHighlight>
      </View>
    );
  }

}
export default RazorpayIntegration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
