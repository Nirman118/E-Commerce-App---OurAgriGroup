import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { Card, Title, Paragraph, Badge } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon1 from 'react-native-vector-icons/Ionicons'
const list = require('../assets/fruits.json')
import AsyncStorage from '@react-native-async-storage/async-storage';
import { updateProductList, addcart, removecart, clearCart, myOrders } from '@store/actions/products'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import firestore from '@react-native-firebase/firestore';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { useScrollToTop } from '@react-navigation/native';


class FarmerProd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: list.sample,
      user: '',
      qty: 0,
      datas: "",
      veg: ""
    };
  }


  async componentDidMount() {
    console.log("props", list.qty)
    this.props.updateProductList(this.state.data)
    let r = await AsyncStorage.getItem("Login")

    if (r) {
      let res = JSON.parse(r)
      console.log("user", res)
      this.setState({ user: res })
    };

    const product = this.props.route.params.veg;
    this.setState({ datas: product })
    console.log("doubchka", this.state.datas)
  }




  async addItemToCart(index, item) {
    let cart = this.state.datas.filter((i) => i.isAdd)
    if (cart.length > 0) {
      cart.map((i) => {
        if (i.id == item.id) {
          Toast.show("Item already in your cart")
        }
      })
    }
    setTimeout(async () => {
      let products = [...this.state.datas]
      products.map((i) => {
        if (i.id == item.id) {
          i.isAdd = true,
            i.cartprice = i.rate
        }
      })
      //products[index].isAdd = true
      this.props.updateProductList(products)
      this.props.addcart(item)
      let uniq = {}
      let filter = cart.filter(obj => !uniq[obj.id] && (uniq[obj.id] = true))
      this.props.clearCart(filter)
      console.log("1", filter)
      console.log("1", cart)
      // this.props.navigation.navigate('Cart', { data: item })
      await AsyncStorage.setItem('MyCarts', JSON.stringify(filter))
    })
  }
  async getCounter(id) {


    let products = [...this.state.datas]
    products.map((i) => {
      if (i.id == id) {
        i.count = i.count + 1
        this.props.updateProductList(products)
        console.log("check", i.id)
        // cart.map((i,key) => {
        //   if(i.id == products[index].id){
        //     console.log("cnt",i.id)
        //     i.count = i.count + 1
        //   }
        // })
        // this.props.clearCart(cart)
      }
    })
    let filter = products.filter((i) => i.isAdd)
    await AsyncStorage.setItem('MyCarts', JSON.stringify(filter))
  }
  async getDecrement(id) {
    let products = [...this.state.datas]
    products.map((i) => {
      if (i.id == id) {
        if (i.count > 1) {
          i.count = i.count - 1
          this.props.updateProductList(products)
        }
        else if (i.count == 1) {
          i.count = i.count
          i.cartprice = i.rate
          i.isAdd = false
          this.props.updateProductList(products)
          this.props.removecart(id)
        }
      }
    })
    let filter = products.filter((i) => i.isAdd)
    await AsyncStorage.setItem('MyCarts', JSON.stringify(filter))
  }
  render() {


    const profile = this.state.user
    console.log(profile)
    const renderItem = ({ item, index }) => {
      const inc = () => {
        this.setState({ qty: this.state.qty + 1 })
      }
      const dec = () => {
        this.setState({ qty: this.state.qty - 1 })
      }
      return (
        <View style={{
          height: hp("23%"),
          width: wp("40%"),
          marginTop: 20,
          borderRadius: 10,
          marginStart: "7%"
        }}>
          <Card
            style={{
              borderRadius: 30, justifyContent: "center", height: hp("23%"), width: wp("40%")
            }} >
            <Card.Cover style={styles.img} source={{ uri: item.url }}></Card.Cover>
            <Card.Content style={{ height: 100, }}>
              <Text style={styles.desc}>{item.name}</Text>
              {item.isAdd ? <View style={{ justifyContent: "space-between", }}>
                <View style={{ flexDirection: "row", }}>
                  <Text >₹</Text>
                  <Text >{item.rate}/kg</Text>
                </View>
                <View style={{ flexDirection: "row", margin: 10 }}>
                  <TouchableOpacity onPress={() => this.getDecrement(item.id)} style={{ height: 30, width: 30, borderRadius: 15, borderWidth: 1, borderColor: 'green', justifyContent: "center", alignItems: "center" }}>
                    <Icon name="minus" size={23} color="green"></Icon>
                  </TouchableOpacity>
                  <Text style={{ fontWeight: "bold", marginLeft: 25, fontSize: 18 }}>{item.count}</Text>
                  <TouchableOpacity onPress={() => this.getCounter(item.id)} style={{ height: 30, width: 30, borderRadius: 15, borderWidth: 1, borderColor: 'green', justifyContent: "center", alignItems: "center", marginLeft: 20, }}>
                    <Icon name="plus" size={23} color="green" />
                  </TouchableOpacity>
                </View>
              </View> : null}
              {item.isAdd ? null : <TouchableOpacity style={{ top: 10, height: hp("3%"), width: wp("20%"), borderWidth: 1, borderRadius: 10, justifyContent: "center", alignItems: "center", left: "15%", backgroundColor: "black" }}
                onPress={() => this.addItemToCart(index, item)}>
                <View>
                  <Text style={{ fontWeight: "bold", color: "white" }}>Add to Cart</Text>
                </View>
              </TouchableOpacity>}
            </Card.Content>
          </Card>
        </View>)
    }
    let cart = this.props.productList.AllProductList.filter((i) => i.isAdd)

    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/formFarmer.png')} style={styles.bg} >
          <View style={{ flexDirection: "row", justifyContent: 'center', marginTop: 10, marginBottom: 15 }}>
            <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon1 name="menu-outline" size={35} color="black" style={{ marginStart: "20%", marginTop: "20%" }}></Icon1>

              {/* {this.state.user && this.state.user.user.photo ?
              <Image source={{ uri: this.state.user.user.photo }} style={styles.screen2_homeIcon} />
              :
              <Image source={require("../assets/user.png")} style={styles.screen2_homeIcon} />
            } */}
            </TouchableOpacity>
            <View style={styles.screen2_component11_rectangle1}  >
              <Icon1 name="search" size={28} style={{ top: 5 }}></Icon1>
              <TextInput style={{ height: hp("100%"), width: wp("85%"), top: -31, borderBottomRightRadius: 30, borderTopRightRadius: 30, }} color="black"></TextInput>
            </View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Bag')}>
              <Icon name="cart" style={{ height: 50, width: 50, right: 20, top: "20%" }} size={40} >
              </Icon>
              {cart && cart.length > 0 ? <Badge style={{ right: 20, top: "-50%" }}>{cart.length}</Badge> : null}
            </TouchableOpacity>
          </View>
          <ScrollView style={{ height: hp("200%"), }}>
            <FlatList
              data={this.state.datas}
              keyExtractor={item => item.description}
              renderItem={renderItem}
              horizontal={false}
              numColumns={2}

            />
          </ScrollView>
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
)(FarmerProd)


const styles = StyleSheet.create({
  "container": {
    "height": hp("100%"),
    "justifyContent": "center"
  },
  "bg": {
    "height": hp("100%"),
    "width": wp("100%")
  },
  "desc": {
    "color": "black",
    "fontWeight": "bold",
    "fontSize": 18,
    "textAlign": "center"
  },
  "img": {
    "height": hp("10%"),
    "width": wp("35%"),
    "margin": 10
  },
  "screen2_iconMaterialArrowback": {
    "left": 20,
    "top": 10
  },
  "screen2_homeIcon": {
    "opacity": 1,
    "borderTopLeftRadius": 43,
    "borderTopRightRadius": 43,
    "borderBottomLeftRadius": 43,
    "borderBottomRightRadius": 43,
    "width": 52,
    "height": 52,
    "left": "60%",
    "top": 10,
    "bottom": 10
  },
  "screen2_component11_rectangle1": {
    "opacity": 1,
    "backgroundColor": "white",
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
    "width": wp("50%"),
    "height": hp("5%"),
    "top": 15,
    'left': "-50%"
  },
})
