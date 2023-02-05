import React, { Component } from 'react';
import axios from 'axios';
import RazorpayCheckout from 'react-native-razorpay';
import { useState } from 'react';
import { Alert,SafeAreaView,View,Text,StyleSheet,Dimensions,TextInput,Button } from 'react-native';

const {width,height} = Dimensions.get('screen');

const Payment = ({Navigation}) => {

    const [amount,setAmount] = useState("");
    const [personName,setPersonName] = useState("");
    const [orderId,setOrderId] = useState("");
    const [paymentId,setPaymentId] = useState("");
    const [paymentSignature,setPaymentSignature] = useState("");
    const [paymentStatus,setPaymentStatus] = useState("");
    const [loading,setLoading] = useState(false);

    const onCheckout = () => {
        setLoading(true);
        console.log("payment generating for amount : " + amount);
        let data = {"amount" : amount,"personName" : personName,"orderId":orderId,"paymentId":paymentId,"paymentSignature":paymentSignature,"paymentStatus":paymentStatus};
        console.log(JSON.stringify(data));
        axios.post("https://spring-rest-api-prayer-service-8v.azuremicroservices.io/api/v1/create_order",JSON.stringify(data),
        {
          headers : {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
          }
        }).then((response) => {
          console.log(response.data);
          if(response.data.status == 'created')
          {
              console.log("Entered in status created"); 
              let options = {
                  key : "rzp_test_RMPvGIU1Rz6Hho",
                  amount : response.data.amount,
                  currency : response.data.currency,
                  name : "Jerusalem Mandiram,Gurazala",
                  description : "Donating to Jerusalem Temple, Gurazala",
                  order_id : response.data.id,
                  image : 'https://c1.wallpaperflare.com/preview/351/83/679/sparrow-animal-portrait-bird-close.jpg',
                  handler : function(response) {
                      console.log("response.razorpay_payment_id " + response.razorpay_payment_id);
                      console.log("response.razorpay_order_id " + response.razorpay_order_id);
                      console.log("response.razorpay_signature " + response.razorpay_signature);
                      console.log('payment successfull');
                      alert("!Congratulations Payment got success Thanks Lord beleive on me");
                      // let data = {"paymentId":response.razorpay_payment_id,"paymentSignature":response.razorpay_signature,"paymentStatus":"Success"};
                      //console.log("data : " + data);
                      console.log("response.razorpay_order_id : " + response.razorpay_order_id);
                      axios.get("https://spring-rest-api-prayer-service-8v.azuremicroservices.io/api/v1/getOrders" + '/' + response.razorpay_order_id, {
                      headers : {
                                'Accept': 'application/json, text/plain, */*',
                                'Content-Type': 'application/json'
                                }
                                })
                        .then((res) => {
                         console.log("succesful response for getOrderId Detail column")
                         data = {"paymentId":response.razorpay_payment_id,"paymentSignature":response.razorpay_signature,"paymentStatus":"Success"};
                         axios.put("http://192.168.43.76:8080/api/v1/updatePayment" + '/' + response.razorpay_order_id,JSON.stringify(data),{headers : {
                           'Accept': 'application/json, text/plain, */*',
                           'Content-Type': 'application/json'
                           }})
                          .then((res) => {
                              console.log("updation of payment status done!!")
                          }).catch((error) => {
                              console.log(console.error);
                          })
                         }).catch((error) => {
                           console.log(console.error);
                         })
                      },
                  prefill: {
                      "name": "",
                      "email": "",
                      "contact": ""
                  },
                  notes: {
                      "address": "Gurazala"
                  },
                  theme: {
                      "color": "#3399cc"
                  }
  
              };
          
           console.log("Came above rzp1");
           console.log("razorpay payment id : " + response.razorpay_payment_id)
              RazorpayCheckout.open(options).then((data) => {
                // handle success
                Alert.alert(`Success: ${data.razorpay_payment_id}`);
      
              }).catch((error) => {
                // handle failure
                Alert.alert(`Error: ${error.code} | ${error.description}`);
              });
            console.log("Came below rzp1");
  
            rzp1.on("Payment Failed ", function(response) {
  
                  console.log(response.error.code);
                  console.log(response.error.description);
                  console.log(response.error.source);
                  console.log(response.error.step);
                  console.log(response.error.reason);
                  console.log(response.error.metadata.order_id);
                  console.log(response.error.metadata.razorpay_payment_id);
              })
          }
      }).catch((error) => {
          console.log(console.error);
          alert("something went wrong!!");
      })
  
      }

      return (
        <SafeAreaView style={styles.constainer}>
        <Text style={{color:'red',fontSize:30,fontWeight:'bold'}}>
        Contribution!
        </Text>
        <Text>
      {'\n'}
      </Text>
        <Text style={styles.lable}>
        Contributor Name : 
        </Text>
        <TextInput
        placeholder='Enter your name here'
        style={styles.input}
        onChangeText={text => setPersonName(text)
        }
      />
      <Text>
      {'\n'}
      </Text>
       <Text style={styles.lable}>
        Donating Amount : 
        </Text>
        <TextInput
        placeholder='Enter amount value'
        style={styles.input}
        onChangeText={amount => setAmount(amount)
        }
      />
      <Text>
      {'\n'}
      </Text>
      {
        !loading && (<Button title='Donate' onPress={onCheckout} style={styles.button} />)
      }
      {
        loading && (<Button title='Donate' onPress={onCheckout} style={styles.button} disabled />)
      }

      <Text>
      {'\n'}
      </Text>
      <Button title='Cancel' onPress={() => console.log(user)} style={styles.button} />
      <Text>
      {'\n'}
      </Text>
      {
      !loading && (<Text style={{color:'red',fontSize:20,fontWeight:'bold'}}>
       Donating to Jerusalem Manidaram Gurazala, palnadu Dist
      </Text>)
      }
       {
      loading && (<Text style={{color:'red',fontSize:20,fontWeight:'bold'}}>
       Thank you :)
      </Text>)
      }
       
    </SafeAreaView>
)


}   // end of payment

export default Payment;

const styles = StyleSheet.create(
    {
        constainer : {
            marginLeft : 20,
            marginTop: 20,
            paddingTop:50,
            height:width+200,
            width:width-30,
            backgroundColor: "transparent"

        },

        lable : {
            
              fontSize : 20,
              fontWeight : 'bold',

        },
        input : {
            width:width-50,
            borderColor : 'blue',
            borderWidth:1,
            borderRadius : 10,
            padding : 10,
            paddingBottom: 20,
            backgroundColor: 'white',
            fontWeight:'bold',
            fontSize:20,
            color:'blue'
            
        },
        button: {
            width:width+150
          },
    }
)