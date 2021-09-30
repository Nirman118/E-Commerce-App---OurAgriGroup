import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import RazorpayCheckout from 'react-native-razorpay';
import Toast from 'react-native-simple-toast';
import { updateProductList, addcart, removecart, clearCart, myOrders } from '@store/actions/products'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Payment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
    this.getFarmers = this.getFarmers.bind(this)
  }

  async componentDidMount(){
  //this.onPaymentSuccess()
  let r =  await AsyncStorage.getItem('MyCarts')
  console.log("2", r)
}
 
  async onPaymentSuccess(id){
   let r =  await AsyncStorage.getItem('MyCarts') 
   console.log("2", r)
   if(r){
     let res = JSON.parse(r)
     res.map((i) => {
        return i.orederId = id
     })
     res.map((i) => {
      return i.address = this.props.route.params.data
   })
     console.log("3", res)
     let order = await AsyncStorage.getItem('MyOrders')
     if(order){
       let a = res.concat(JSON.parse(order))
       await AsyncStorage.setItem('MyOrders', JSON.stringify(a))
       console.log("4", a)

     }
     else {
      await AsyncStorage.setItem('MyOrders', JSON.stringify(res))
     }
    res.forEach(element => {
    firestore()
    .collection('orders')
    .add(element)
    .then(async () => {
      console.log('products added!')
      let ref = firestore().collection('farmer')
      ref.onSnapshot(this.getFarmers)
  
     
    })
    .catch((e) => {
      console.log("errr", e)
    })
    });
   }
  }
  getFarmers = async querySnapshot => {
    let bag = await AsyncStorage.getItem('MyCarts')
    let orders = JSON.parse(bag)
    let SelectedFarmer = await AsyncStorage.getItem('SelectedFarmer')
    let sFr = SelectedFarmer ? JSON.parse(SelectedFarmer) : ''
    console.log("crt", SelectedFarmer, sFr)
    const farmers = [];
    let order = []
    if(querySnapshot){
      querySnapshot.forEach(async(doc) => {
        const{ name,  id, email, img, type, token, products, key} = doc.data();
        let r = await AsyncStorage.getItem("Login")
        if(sFr && sFr.length > 0 && sFr[0] !== null){
        sFr.map((i) => {
          if(key == i.key){
            console.log("test", i, orders)
            orders.map((j) => {
              i.product.map((k) => {
                if(j.name == k.name){
                  console.log("here", j.name, k.name, order)

                  if(order.length > 0){
                    order.map((s) => {
                      if(s.name !== j.name){
                        order = [...order, j]
                      }
                    })
                  }
                  else {
                    order.push(j)
                  }
                  console.log("order", order, i, type)
                  const updateRef = firestore().collection('farmer').doc(i.key);
                  updateRef.set({
                    key: i.key,
                    name: i.name,
                    email:i.email,
                    token: i.token ? i.token : '',
                    id:i.id,
                    img:  '',
                    type: type,
                    product: i.product,
                    orders: order
                  })
                  .then(async ref => {
                 //  Toast.show('Successfully ordered');
                   console.log("Successfully added")
                   setTimeout(async () => {
                    await AsyncStorage.removeItem('MyCarts')
                    await AsyncStorage.removeItem('SelectedFarmer')
                    let product = [...this.props.productList.AllProductList]
                    product.map((i) => {
                      products.map((j) => {
                      if (i.id == j.id) {
                        i.isAdd = false,
                          i.cartprice = i.rate
                      }
                    })
                    })
                    //products[index].isAdd = true
                    this.props.updateProductList(product)
                  })
                   this.props.navigation.navigate('Track')
                   //alert("Products added")
                  }).catch((e) => {
                    console.log(e)
                  })
                }
              })
             
            })
            
        }
        })
      }
      else {
        setTimeout(async () => {
          await AsyncStorage.removeItem('MyCarts')
          await AsyncStorage.removeItem('SelectedFarmer')
          let product = [...this.props.productList.AllProductList]
          product.map((i) => {
            products.map((j) => {
            if (i.id == j.id) {
              i.isAdd = false
                i.cartprice = i.rate
            }
          })
          })
          //products[index].isAdd = true
          this.props.updateProductList(product)
        })
         this.props.navigation.navigate('Track')
      }
       
      })  
    }
    //this.setState({farmers:farmers})
  }
  render() {
const Payments = () =>  {
               
  var options = {
    description: 'Agri payment',
    image: '',
    currency: 'INR',
    // key: 'rzp_test_ySPGY2Ip4wE0uU', // Your api key
    key: 'rzp_test_2CParzYhlc7NOV',
    // amount: parseInt(this.state.fee),
    amount: this.props.route.params.total * 100,
     //amount: 100,
    name: 'OurAgri',
    prefill: {
      email: 'teammachine04@gmail.com',
      contact: '+4917662068640',
      name: 'OurAgri',
     // method: 'netbanking',
    },
    theme: { color: '#ff6347' }
  }

  RazorpayCheckout.open(options).then((data) => {
    // handle success
    alert(`Success: ${data.razorpay_payment_id}`);
    this.onPaymentSuccess(data.razorpay_payment_id)
    this.props.navigation.navigate("Track")

  }).catch((error) => {
    // handle failure
    console.log("err", error)
    //alert(`Error: ${error.code} | ${error.description}`);
  });
}
// const done = () => {
//   alert('Your Order is placed! ')
//   this.props.navigation.navigate('Track')
// }


    return (
      <View>
        <ImageBackground source={require('../assets/screen2.png')} style={styles.screen2} >
          <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
            <Icon name="arrow-left" style={styles.screen2_iconMaterialArrowback} size={30}></Icon>
          </TouchableOpacity>
          <View style={styles.screen2_component11_rectangle1}>
            <Text style={styles.screen2_component21_loginAs}>pay Using</Text>
          </View>
          <View style={{ height: 500, width: "100%", justifyContent:"center",alignItems:"center", marginTop:100 }}>
              <TouchableOpacity style={styles.screen2_rectangle2}
              onPress={() =>Payments()}>
                <Text style={styles.screen2_farmer}>Google Pay</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.screen2_rectangle3} onPress={() =>Payments()}>
                <Text style={styles.screen2_retailer}>BHMI</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.screen2_rectangle4}  onPress={() =>Payments()}>
                <Text style={styles.screen2_customer}>PAYTM</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.screen2_rectangle5} onPress={() =>Payments()}>
                <Text style={styles.screen2_logisticsProvider}>Debit/credit card</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.screen2_rectangle6} onPress={() =>Payments()}>
                <Text style={styles.screen2_expertAdvice}>PhonePe</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity style={styles.screen2_rectangle7} onPress={()=> done()}>
                <Text style={styles.screen2_agriculturalLabourer}>COD</Text>
              </TouchableOpacity> */}
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = (state, props) => ({
  productList: state.products,
  Cart: state.products,
  auth: state.auth
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateProductList, addcart, removecart, clearCart, myOrders
  }, dispatch)
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Payment)


const styles = StyleSheet.create({
  "screen2": {
    "opacity": 1,
    "position": "relative",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": "100%",
    "height": "100%",
    "left": 0,
    "top": 0
  },
  "screen2_iconMaterialArrowback": {
    "left": 20,
    "top": 10
  },
  "screen2_component11": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 339,
    "height": 63,
    "left": 46,
    "top": 106
  },
  "screen2_component11_rectangle1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(240, 236, 215, 1)",
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 21,
    "borderTopRightRadius": 21,
    "borderBottomLeftRadius": 21,
    "borderBottomRightRadius": 21,
    "width": 339,
    "height": 50,
    "left": "9%",
    "top": 50,
    "justifyContent":"center",
    "alignItems":"center"
  },
  "screen2_rectangle2": {
    "opacity": 0.6,
    "position": "absolute",
    "backgroundColor": "rgba(240, 236, 215, 1)",
    "borderTopLeftRadius": 21,
    "borderTopRightRadius": 21,
    "borderBottomLeftRadius": 21,
    "borderBottomRightRadius": 21,
    "width": 243,
    "height": 41,
    "top": 70
  },
  "screen2_rectangle3": {
    "opacity": 0.6,
    "position": "absolute",
    "backgroundColor": "rgba(240, 236, 215, 1)",
    "borderTopLeftRadius": 21,
    "borderTopRightRadius": 21,
    "borderBottomLeftRadius": 21,
    "borderBottomRightRadius": 21,
    "width": 243,
    "height": 41,
    "top": 130
  },
  "screen2_rectangle4": {
    "opacity": 0.6,
    "position": "absolute",
    "backgroundColor": "rgba(240, 236, 215, 1)",
    "borderTopLeftRadius": 21,
    "borderTopRightRadius": 21,
    "borderBottomLeftRadius": 21,
    "borderBottomRightRadius": 21,
    "width": 243,
    "height": 41,
    "top": 190
  },
  "screen2_rectangle5": {
    "opacity": 0.6,
    "position": "absolute",
    "backgroundColor": "rgba(240, 236, 215, 1)",
    "borderTopLeftRadius": 21,
    "borderTopRightRadius": 21,
    "borderBottomLeftRadius": 21,
    "borderBottomRightRadius": 21,
    "width": 243,
    "height": 41,
        "top": 250
  },
  "screen2_rectangle6": {
    "opacity": 0.6,
    "position": "absolute",
    "backgroundColor": "rgba(240, 236, 215, 1)",
    "borderTopLeftRadius": 21,
    "borderTopRightRadius": 21,
    "borderBottomLeftRadius": 21,
    "borderBottomRightRadius": 21,
    "width": 243,
    "height": 43,
    "top": 310
  },
  "screen2_rectangle7": {
    "opacity": 0.6,
    "position": "absolute",
    "backgroundColor": "rgba(240, 236, 215, 1)",
    "borderTopLeftRadius": 21,
    "borderTopRightRadius": 21,
    "borderBottomLeftRadius": 21,
    "borderBottomRightRadius": 21,
    "width": 243,
    "height": 43,
    "top": 370
  },
  "screen2_rectangle8": {
    "opacity": 0.6,
    "position": "absolute",
    "backgroundColor": "rgba(240, 236, 215, 1)",
    "borderTopLeftRadius": 21,
    "borderTopRightRadius": 21,
    "borderBottomLeftRadius": 21,
    "borderBottomRightRadius": 21,
    "width": 290,
    "height": 43,
    "top": 480
  },
  "screen2_component21": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 127,
    "height": 30,
    "left": 146,
    "top": 126
  },
  "screen2_component21_loginAs": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
    "fontSize": 24,
    "fontWeight": "bold",
    "fontStyle": "normal",
    "fontFamily": "Myanmar Text",
    "textAlign": "center",
    "width": 127,
    "height": "100%",
  },
  "screen2_farmer": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
    "fontSize": 20,
    "fontWeight": "bold",
    "fontStyle": "normal",
    "fontFamily": "Myanmar Text",
    "textAlign": "center",
    "width": "100%",
    "height": "100%",
    "top": "10%"
  },
  "screen2_customer": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
    "fontSize": 20,
    "fontWeight": "bold",
    "fontStyle": "normal",
    "fontFamily": "Myanmar Text",
    "textAlign": "center",
    "width": "100%",
    "height": "100%",
    "top": "10%"
  },
  "screen2_agriculturalLabourer": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
    "fontSize": 20,
    "fontWeight": "bold",
    "fontStyle": "normal",
    "fontFamily": "Myanmar Text",
    "textAlign": "center",
    "width": "100%",
    "height": "100%",
    "top": "10%"
  },
  "screen2_logisticsProvider": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
    "fontSize": 20,
    "fontWeight": "bold",
    "fontStyle": "normal",
    "fontFamily": "Myanmar Text",
    "textAlign": "center",
    "width": "100%",
    "height": "100%",
    "top": "10%"
  },
  "screen2_expertAdvice": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
    "fontSize": 20,
    "fontWeight": "bold",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "center",
    "width": "100%",
    "height": "100%",
    "top": "10%"
  },
  "screen2_rectangle28": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 21,
    "borderTopRightRadius": 21,
    "borderBottomLeftRadius": 21,
    "borderBottomRightRadius": 21,
    "width": 243,
    "height": 41,
    "left": 85,
    "top": 336
  },
  "screen2_retailer": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
    "fontSize": 20,
    "fontWeight": "bold",
    "fontStyle": "normal",
    "fontFamily": "Myanmar Text",
    "textAlign": "center",
    "width": "100%",
    "height": "100%",
    "top": "10%"
  },
  "screen2_homeIcon": {
    "opacity": 1,
    "borderTopLeftRadius": 43,
    "borderTopRightRadius": 43,
    "borderBottomLeftRadius": 43,
    "borderBottomRightRadius": 43,
    "width": 52,
    "height": 52,
    "left": "43%",
    "top": 10,
    "bottom": 10
  },
  "screen2_pexelsPixabay40514": {
    "opacity": 0.18000000715255737,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 562,
    "height": 421,
    "left": -75,
    "top": 252
  },
  "screen2_pexelsFelixMittermeier95807697422322": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 340,
    "height": 491,
    "left": 36,
    "top": 230
  },
  "screen2_pexelsFelixMittermeier95807697422322_pexelsFelixMittermeier958076": {
    "opacity": 0.14000000059604645,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 61,
    "borderTopRightRadius": 61,
    "borderBottomLeftRadius": 61,
    "borderBottomRightRadius": 61,
    "width": 340,
    "height": 491,
    "left": -1,
    "top": -1
  }
});