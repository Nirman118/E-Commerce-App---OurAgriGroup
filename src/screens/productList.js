import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, ScrollView,ActivityIndicator, ImageBackground, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { Card, Title, Paragraph, Badge } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon1 from 'react-native-vector-icons/Ionicons'
const list = require('../assets/fruits.json')
import AsyncStorage from '@react-native-async-storage/async-storage';
import { updateProductList, addcart, removecart, clearCart, myOrders } from '@store/actions/products'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Modal from 'react-native-modalbox';
import messaging from '@react-native-firebase/messaging';
import Toast from 'react-native-simple-toast';


import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { useScrollToTop } from '@react-navigation/native';


class ProductList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: list.sample,
      isOpen: false,
      isLoad: false,
      index: '',
      item: '',
      user: '',
      newQty: 1,
      qty: 0,
      rate:0,
      datas: "",
      type: '',
      veg: "",
      search:'',
      value: '',
      bag: [],
      farmers: [],
      farmerList: []
    };
    this.ref = firestore().collection('farmer')
    this.getFarmerInfo = this.getFarmerInfo.bind(this)
  }


  async componentDidMount() {
    const user = auth().currentUser;
    console.log('userrrr', this.props.productList.AllProductList);
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log("fcmToken", fcmToken);
    }
    const type = this.props.route.params.type;
    this.setState({ datas: this.props.productList.AllProductList.filter((i) => i.type == type), isLoad: false }, () => {

    })
    this.ref.onSnapshot(this.getFarmerInfo)

    let types = await AsyncStorage.getItem("Type")
    this.setState({ type: JSON.parse(types) })
    let r = await AsyncStorage.getItem("Login")
    if (r) {
      let res = JSON.parse(r)
      console.log("user", res)
      this.setState({ user: res })
    };

  }

  async getFarmerInfo(querySnapshot) {
    const farmers = [];
    if (querySnapshot) {
      querySnapshot.forEach(async (doc) => {
        const { email, id, name, img, products, token } = doc.data();
        farmers.push({
          key: doc.id,
          name: name,
          id: id,
          email: email,
          img: img,
          token: token,
          products: products,
        })
      })
    }
    this.setState({ farmers: farmers })
    console.log("farmers", farmers)
  }
  onSelectFarmer() {

  }


  async addItemToCart(index, item, farmer) {
    let products = [...this.props.productList.AllProductList]
    products.map((i) => {
      if (i.id == item.id) {
        i.isAdd = true
        i.cartprice = i.rate
      }
    })
    //products[index].isAdd = true
    this.props.updateProductList(products)

    setTimeout(async () => {
      let cart = this.props.productList.AllProductList.filter((i) => i.isAdd)
      console.log("2", cart)

      if (cart.length > 0) {
        cart.map((i) => {
          if (i.id == item.id) {
           // Toast.show("Item already in your cart")
          }
        })
      }
      this.props.addcart(item)
      let uniq = {}
      let filter = cart.filter(obj => !uniq[obj.id] && (uniq[obj.id] = true))
      this.props.clearCart(filter)
      console.log("1", filter)
      // this.props.navigation.navigate('Cart', { data: item })
      await AsyncStorage.setItem('MyCarts', JSON.stringify(filter))
    })
    let fr = await AsyncStorage.getItem('SelectedFarmer')
    let array = []
    if (fr) {
      let data = JSON.parse(fr)
      if(farmer){
      if (data.length > 0) {
        data.map(async (v) => {
          if (v.key !== farmer.key) {
            let newData = [...data, farmer]
            console.log("fr", newData)
            await AsyncStorage.setItem('SelectedFarmer', JSON.stringify(newData))
          }
        })
      }
      else {
        array.push(farmer)
        await AsyncStorage.setItem('SelectedFarmer', JSON.stringify(array))
      }
    }
    }
    else {
      array.push(farmer)
      console.log("fr2", farmer)
      await AsyncStorage.setItem('SelectedFarmer', JSON.stringify(array))
      console.log("12", array)
    }
  }
  async getCounter(id) {
    let products = [...this.props.productList.AllProductList]
    products.map((i) => {
      if (i.id == id) {
        i.count = i.count + 1
        this.props.updateProductList(products)
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
  async onSearch () {
    console.log("filter", this.state.search)
    let filter = this.state.datas.filter(p => String(p.name).startsWith(this.state.search.toLocaleLowerCase()))
    console.log("filter", filter, this.state.search)
    if(this.state.search){
    this.setState({datas: filter})
    }
    else {
      const type = this.props.route.params.type;

      this.setState({datas: this.props.productList.AllProductList.filter((i) => i.type == type)})
    }

  }
  async getDecrement(id) {
    let products = [...this.props.productList.AllProductList]
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
  onUpdateProduct() {
    let ref = firestore().collection('farmer')
    ref.onSnapshot(this.getFarmers)

  }
  getFarmers = async querySnapshot => {
    let bag = await AsyncStorage.getItem('MyBags')
    const farmers = [];
    if (querySnapshot) {
      querySnapshot.forEach(async (doc) => {
        const { name, id, email, img, type, token } = doc.data();
        let r = await AsyncStorage.getItem("Login")
        if (r) {
          let res = JSON.parse(r)
          if (id == res.user.id) {
            const updateRef = firestore().collection('farmer').doc(doc.id);
            updateRef.set({
              key: doc.id,
              name: name,
              email: email,
              token: token,
              id: id,
              img: img,
              type: type,
              products: JSON.parse(bag)
            }).then(ref => {
              console.log("products added")
              //alert("Products added")
            })
            Toast.show('Products added');

          }
        }
      })
    }
    //this.setState({farmers:farmers})
  }
  render() {
    const profile = this.state.user
    const renderItem = ({ item, index }) => {
      const inc = () => {
        this.setState({ qty: this.state.qty + 1 })
      }
      const dec = () => {
        this.setState({ qty: this.state.qty - 1 })
      }
      return (
        <View style={{
          height: hp("25%"),
          width: wp("40%"),
          marginTop: 20,
          borderRadius: 10,
          marginStart: "7%"
        }}>
          <Card
            style={{
              borderRadius: 30, justifyContent: "center", height: hp("25%"), width: wp("40%")
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
                onPress={() => {
                  this.setState({ isOpen: true, index: index, item: item }, () => {
                    let farmers = this.state.farmers
                    let arr = []
                    farmers.map((i) => {
                      if (i.products && i.products.length > 0) {
                        let p = i.products.filter((ar) => ar.name == item.name)
                        console.log("0", p)

                        if (p.length > 0) {
                          p.map((x) => {
                            if (x.name == item.name) {
                              console.log("1")
                              let data = {
                                name: i.name,
                                token: i.token,
                                key: i.key,
                                id: i.id,
                                img: i.img,
                                email: i.email,
                                product: p
                              }
                              if (arr.length > 0) {
                                let res = [...arr, data]
                                this.setState({ farmerList: res })
                                // console.log("farm1",res )
                              }
                              else {
                                arr.push(data)
                                this.setState({ farmerList: arr })
                              }
                            }
                            else {
                              console.log("2")
                              this.setState({ isOpen: false})
                              this.addItemToCart(index, item)
                            }
                          })


                        }
                        else {
                          this.setState({ isOpen: false})
                          this.addItemToCart(index, item)
                        }
                      }
                    })
                  })
                  //this.addItemToCart(index, item)
                }}>
                <View>
                  <Text style={{ fontWeight: "bold", color: "white" }}>Add to Cart</Text>
                </View>
              </TouchableOpacity>}
            </Card.Content>
          </Card>
        </View>)
    }
    const renderItem1 = ({ item, index }) => {
      const inc = () => {
        this.setState({ qty: this.state.qty + 1 })
      }
      const dec = () => {
        this.setState({ qty: this.state.qty - 1 })
      }
      return (
        <View style={{
          width: wp("95%"),
          marginTop: 20,
          borderRadius: 10,
          margin: "3%"
        }}>
          <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: 'white', backgroundColor: "white", borderRadius: 5 }}>
            <Image source={{ uri: item.url }} style={styles.img} />
            <View style={{}}>
              <Text style={styles.desc}>{item.name}</Text>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Text>total quantity : </Text>
                <TextInput style={{ height: hp("5%"), borderWidth: 1, width: wp("10%"),color:"black" , fontSize:20}}
                 value={item.rate ? item.rate : this.state.rate.toString()}
                 onChangeText={(v) => {
                  this.setState({ rate: v })
                  let datas = [...this.state.datas]
                  datas.map((i) => {
                    if (i.id == item.id) {
                      i.newQty = Number(v)
                      i.qty = i.qty + Number(v)
                    }
                  })
                  this.setState({ datas })
                }}

                onEndEditing={() => {
                  const updateRef = firestore().collection('products').doc(item.key);
  
                  
                  updateRef.set(this.state.datas[index]).then(async () => {
                    console.log('document updated:')
                    let bag = await AsyncStorage.getItem('MyBags')
                    if (bag) {
                      let bags = JSON.parse(bag)
                      console.log("bag", bags)
                      let products = bags
                      console.log("products", products)


                      if (products.length > 0) {
                        products.map(async (i) => {
                          if (i.id == item.key) {
                            let newProduct = products.filter((v, i, a) => a.findIndex(t => (t.id !== item.key)) === i)
                            console.log('aaaa', newProduct)
                            let a = [...newProduct, this.state.datas[index]]
                            this.setState({ bag: a })
                            console.log('a', a)
                            await AsyncStorage.setItem('MyBags', JSON.stringify(a))
                          }
                          else {
                            let a = [...products, this.state.datas[index]]
                            this.setState({ bag: a })
                            console.log('b', a)
                            await AsyncStorage.setItem('MyBags', JSON.stringify(a))
                          }
                        })

                      }
                      else {
                        let a = []
                        a.push(this.state.datas[index])
                        this.setState({ bag: a })
                        await AsyncStorage.setItem('MyBags', JSON.stringify(a))
                      }
                    }
                    else {
                      let arr = [this.state.datas[index]]
                      await AsyncStorage.setItem('MyBags', JSON.stringify(arr))
                    }
                  })
                }}></TextInput>
              </View>
              <Text style={styles.desc}>rate/kg: {item.rate}</Text>

              <TextInput
                style={{ borderWidth: 1, borderColor: '#000', color: '#000', height: hp("5%") }}
                value={item.qty ? item.qty : this.state.value.toString()}
                keyboardType="number-pad"
                maxLength={5}
                placeholder="Your rate"
                placeholderTextColor="grey"
                onChangeText={(v) => {
                  this.setState({ value: v })
                  let datas = [...this.state.datas]
                  datas.map((i) => {
                    if (i.id == item.id) {
                      i.rate = Number(v)
                    }
                  })
                  this.setState({ datas })
                }}

                onEndEditing={() => {
                  const updateRef = firestore().collection('products').doc(item.key);
                  updateRef.set(this.state.datas[index]).then(async () => {
                    console.log('document updated:')
                    let bag = await AsyncStorage.getItem('MyBags')
                    if (bag) {
                      let bags = JSON.parse(bag)
                      console.log("bag", bags)
                      let products = bags
                      console.log("products", products)


                      if (products.length > 0) {
                        products.map(async (i) => {
                          if (i.id == item.key) {
                            let newProduct = products.filter((v, i, a) => a.findIndex(t => (t.id !== item.key)) === i)
                            console.log('aaaa', newProduct)
                            let a = [...newProduct, this.state.datas[index]]
                            this.setState({ bag: a })
                            console.log('a', a)
                            await AsyncStorage.setItem('MyBags', JSON.stringify(a))
                          }
                          else {
                            let a = [...products, this.state.datas[index]]
                            this.setState({ bag: a })
                            console.log('b', a)
                            await AsyncStorage.setItem('MyBags', JSON.stringify(a))
                          }
                        })

                      }
                      else {
                        let a = []
                        a.push(this.state.datas[index])
                        this.setState({ bag: a })
                        await AsyncStorage.setItem('MyBags', JSON.stringify(a))
                      }
                    }
                    else {
                      let arr = [this.state.datas[index]]
                      await AsyncStorage.setItem('MyBags', JSON.stringify(arr))
                    }
                  })
                }}
              //onEndEditing={() => this.onUpdate(index)}
              />
            </View>

          </View>

        </View>)
    }
    let cart = this.props.productList.AllProductList.filter((i) => i.isAdd)

    let arr = [];
    let a = this.state.farmerList
    console.log("farmerList1", this.state.farmerList,)
    a.map((i, index) => {
      if (arr.length > 0) {
        arr.map((x) => {
          if (i.key !== x.key) {
            let r = [...arr, i]
            arr.push(r)
          }
        })

      }
      else {
        arr.push(i)
      }
    })

    console.log("farmerList", this.state.farmerList,)

    if(this.state.isLoad){
      return <ActivityIndicator />
    }
    else {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/formFarmer.png')} style={styles.bg} >
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon1 name="menu-outline" size={35} color="black" style={{ marginStart: "10%", marginTop: "2%" }}></Icon1>
            </TouchableOpacity>
            <View>
            <TextInput style={{backgroundColor:"white", padding:10, borderRadius:10, width:220, marginTop:5, color:"black"}}
            placeholder="Search"
            placeholderTextColor="black"
            onChangeText={(v) => {
              this.setState({search: v}, () => {
                this.onSearch()
              })
              
            }}
             />
            </View>
            {this.state.type == "user" ? <TouchableOpacity onPress={() => this.props.navigation.navigate('Cart')}>
            <View style={{flexDirection:"row"}}>
              <Icon name="cart" style={{ height: 50, width: 50, marginStart: "35%", marginTop: "2%" }} size={40} > </Icon>
              <Badge style={{ position:"absolute",right:80, top: "4%" }} >{cart.length}</Badge>
              </View>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Bag')}>
            <View style={{flexDirection:"row"}}>
              <Icon name="cart" style={{ height: 50, width: 50, marginStart: "35%", marginTop: "2%" }} size={40} > </Icon>
              <Badge style={{ position:"absolute",right:80, top: "4%" }} >{cart.length}</Badge>
              </View>
            </TouchableOpacity>
    }
          </View>
          { this.state.datas.length == 0 ?
          <View style={{justifyContent:'center', alignItems:'center'}}>
          <Text>No Products found</Text>
          </View>
          :
          <ScrollView style={{ flex: 1 }}>
            {this.state.type == 'user' ?
              <FlatList
                key={'_'}
                data={this.state.datas}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                horizontal={false}
                numColumns={2}
              />
              :
              <FlatList
                key={'#'}
                data={this.state.datas}
                keyExtractor={item => item.id}
                renderItem={renderItem1}
              />
            }
          </ScrollView>}
          {this.state.type && this.state.type == 'user' ? null : <TouchableOpacity
            style={{ bottom: "5%", position: 'absolute', width: '96%', borderRadius: 10, padding: 10, justifyContent: 'center', backgroundColor: '#000', margin: 15, alignItems: 'center' }}
            onPress={() => this.onUpdateProduct()}>
            <Text style={{ color: '#fff' }}>Add to bag</Text>
          </TouchableOpacity>}
        </ImageBackground>
        <Modal isOpen={this.state.isOpen}
          // onClosed={this.state.onClose}
          backButtonClose={true}
          transparent={true}
          backdropOpacity={0.8}
          style={{ height: 650, padding: 10, zIndex: 11, elevation: 11 }}
          position={"bottom"}
          key={this.state.isOpen ? 1 : 2}
          backdropPressToClose={true}>
          <View>
            <Text style={[{ color: '#000' }]}>Please select the farmer</Text>
            <ScrollView>
              {this.state.farmerList.map((i) => {
                return <TouchableOpacity onPress={() => {
                  this.addItemToCart(this.state.index, this.state.item, i)
                  this.setState({ isOpen: false })
                }}
                  style={{ borderWidth: 1, borderColor: '#000', margin: 10, padding: 10 }}>
                  <Text>{i.name}</Text>
                  {i.product && i.product.length > 0 ? <View>
                    {i.product.map((b) => {
                      return <View>
                        <Text>{b.name}</Text>
                        <Text>{b.rate}</Text>
                        <Text>{b.qty}</Text>
                      </View>
                    })}
                  </View> : null}
                </TouchableOpacity>
              })}
            </ScrollView>
          </View>
        </Modal>

      </View>
    );
            }
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
)(ProductList)


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
