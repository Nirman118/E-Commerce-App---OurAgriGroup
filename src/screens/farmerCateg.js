import React, { Component , useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon1 from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage';

import firestore from '@react-native-firebase/firestore';

export default class FarmerCateg extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      data:"",
      fruits:"",
      vegetables:"",
      grains:"",
      pulses:"",
      milk:"",
      eggmeat:"",
      spices:"",
      oilseeds:"",
      plantation:""

    };
    console.log("to check")
    this.ref= firestore().collection('fruits')
    this.ref1= firestore().collection('vegetables')

    this.getFruits = this.getFruits.bind(this)
    this.getVegetables= this.getVegetables.bind(this)
    this.getGrains= this.getGrains.bind(this)
    this.getPulses= this.getPulses.bind(this)
    this.getMilk= this.getMilk.bind(this)
    this.getEggmeat= this.getEggmeat.bind(this)
    this.getSpices= this.getSpices.bind(this)
    this.getOilseds= this.getOilseds.bind(this)
    this.getPlantation= this.getPlantation.bind(this)



  }

  async componentDidMount() {

    async function  onGetData() {
      let r = await AsyncStorage.getItem("Login")
      if(r){
      var result = JSON.parse(r)
      this.state({data:result})

      }
    }    
  onGetData()
  const getDBdata = () => {
    this.ref.onSnapshot(this.getFruits)
    this.ref1.onSnapshot(this.getVegetables)
  }
getDBdata()
  }
    
  async getFruits(querySnapshot){
    const fruits = [];
    if(querySnapshot){
      querySnapshot.forEach(async(doc) => {
        const{ name, amount, img, rate, id, count, qty} = doc.data();
        fruits.push({
          name: name,
          amount: amount,
          url: img,
          rate:rate,
          id: id,
          count: count,
          qty: qty
        })
      })
    }
    this.setState({fruits:fruits})
    console.log("data  db5",this.state.fruits)
  }
  async getVegetables(querySnapshot){
    const vegetables = [];
    if(querySnapshot){
      querySnapshot.forEach(async(doc) => {
        const{ name, amount, img, rate, id, count, qty} = doc.data();
        vegetables.push({
          name: name,
          amount: amount,
          url: img,
          rate:rate,
          id: id,
          count: count,
          qty: qty
        })
      })
    }
    this.setState({vegetables:vegetables})
    console.log("data  db1897979",this.state.vegetables)
  }
  async getGrains(querySnapshot){
    const grains = [];
    if(querySnapshot){
      querySnapshot.forEach(async(doc) => {
        const{ name, amount, img, rate, id, count, qty} = doc.data();
        fruits.push({
          name: name,
          amount: amount,
          url: img,
          rate:rate,
          id: id,
          count: count,
          qty: qty
        })
      })
    }
    this.setState({grains:grains})
    console.log("data  db5",this.state.grains)
  }
  async getPulses(querySnapshot){
    const pulses = [];
    if(querySnapshot){
      querySnapshot.forEach(async(doc) => {
        const{ name, amount, img, rate, id, count, qty} = doc.data();
        pulses.push({
          name: name,
          amount: amount,
          url: img,
          rate:rate,
          id: id,
          count: count,
          qty: qty
        })
      })
    }
    this.setState({pulses:pulses})
  }
  async getEggmeat(querySnapshot){
    const eggmeat = [];
    if(querySnapshot){
      querySnapshot.forEach(async(doc) => {
        const{ name, amount, img, rate, id, count, qty} = doc.data();
        eggmeat.push({
          name: name,
          amount: amount,
          url: img,
          rate:rate,
          id: id,
          count: count,
          qty: qty
        })
      })
    }
    this.setState({eggmeat:eggmeat})
  }
  async getSpices(querySnapshot){
    const spices = [];
    if(querySnapshot){
      querySnapshot.forEach(async(doc) => {
        const{ name, amount, img, rate, id, count, qty} = doc.data();
        spices.push({
          name: name,
          amount: amount,
          url: img,
          rate:rate,
          id: id,
          count: count,
          qty: qty
        })
      })
    }
    this.setState({spices:spices})
  }
  async getPlantation(querySnapshot){
    const plantation = [];
    if(querySnapshot){
      querySnapshot.forEach(async(doc) => {
        const{ name, amount, img, rate, id, count, qty} = doc.data();
        plantation.push({
          name: name,
          amount: amount,
          url: img,
          rate:rate,
          id: id,
          count: count,
          qty: qty
        })
      })
    }
    this.setState({plantation:plantation})
  }
  async getMilk(querySnapshot){
    const milk = [];
    if(querySnapshot){
      querySnapshot.forEach(async(doc) => {
        const{ name, amount, img, rate, id, count, qty} = doc.data();
        milk.push({
          name: name,
          amount: amount,
          url: img,
          rate:rate,
          id: id,
          count: count,
          qty: qty
        })
      })
    }
    this.setState({milk:milk})
  }
  async getOilseds(querySnapshot){
    const oilseeds = [];
    if(querySnapshot){
      querySnapshot.forEach(async(doc) => {
        const{ name, amount, img, rate, id, count, qty} = doc.data();
        oilseeds.push({
          name: name,
          amount: amount,
          url: img,
          rate:rate,
          id: id,
          count: count,
          qty: qty
        })
      })
    }
    this.setState({oilseeds:oilseeds})

  }
  render() {
  

    return (
      <View>
        <ImageBackground source={require('../assets/screen3Catagories.png')} style={styles.screen2} >
            <Text style={{textAlign:"center", fontSize:30,fontWeight:"bold"}}>Categories</Text>
          <View style={{ height: 500, width: 500 }}>
            <TouchableOpacity style={styles.screen2_rectangle2}  onPress={()=> this.props.navigation.navigate('FarmerProd', {veg: this.state.vegetables})}>
              <Text style={styles.screen2_farmer}>Vegetables</Text>
              <Image source={require("../assets/pikpngcomvegitablesPng2506029.png")} style={{ height: 110, width: 100, left: 80, top: -10 }}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.screen2_rectangle3} onPress={()=> this.props.navigation.navigate('FarmerProd', {veg: this.state.fruits})}>
              <Text style={styles.screen2_retailer}>Fruits</Text>
              <Image source={require("../assets/pikpngcomfruitsPng968573.png")} style={{ height: 65, width: 120, left: 80, top: -10 }}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.screen2_rectangle4} onPress={()=> this.props.navigation.navigate('FarmerProd', {veg: this.state.grains})}>
              <Text style={styles.screen2_customer}>Wheat and Grains</Text>
              <Image source={require("../assets/pikpngcomgrainPng2387857.png")} style={{ height: 65, width: 120, left: 90, top: -12 }}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.screen2_rectangle5} onPress={()=> this.props.navigation.navigate('FarmerProd', {veg: this.state.pulses})}>
              <Text style={styles.screen2_logisticsProvider}>Pulses </Text>
              <Image source={require("../assets/pexelsCottonbro6805059.png")} style={{ height: 70, width: 120, left: 80, }}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.screen2_rectangle6} onPress={()=> this.props.navigation.navigate('FarmerProd'), {veg: this.state.milk}}>
              <Text style={styles.screen2_expertAdvice}>Milk and Dairy Products</Text>
              <Image source={require("../assets/pikpngcommilkPng535422.png")} style={{ height: 75, width: 80, left: 90, top: -4 }}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.screen2_rectangle7} onPress={()=> this.props.navigation.navigate('FarmerProd', {veg: this.state.eggmeat})}>
              <Text style={styles.screen2_agriculturalLabourer}>Egg and meat</Text>
              <Image source={require("../assets/eggsInBasket2.png")} style={{ height: 70, width: 100, left: 90, }}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.screen2_rectangle8} onPress={()=> this.props.navigation.navigate('FarmerProd' , {veg: this.state.spices})}>
              <Text style={styles.screen2_agriculturalLabourer}>Spices</Text>
              <Image source={require("../assets/eggsInBasket2.png")} style={{ height: 70, width: 100, left: 90, }}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.screen2_rectangle9} onPress={()=> this.props.navigation.navigate('FarmerProd', {veg: this.state.oilseeds})}>
              <Text style={styles.screen2_agriculturalLabourer}>Oilseeds</Text>
              <Image source={require("../assets/eggsInBasket2.png")} style={{ height: 70, width: 100, left: 90, }}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.screen2_rectangle10} onPress={()=> this.props.navigation.navigate('ProductList', {veg: this.state.plantation})}>
              <Text style={styles.screen2_agriculturalLabourer}>Plantation</Text>
              <Image source={require("../assets/eggsInBasket2.png")} style={{ height: 70, width: 100, left: 90, }}></Image>
            </TouchableOpacity>
            
          </View>
        </ImageBackground>
      </View>
    );
  }
}


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
    "width": 200,
    "height": 40,
    "left": "100%",
    "top": 15,
  },
  "screen2_rectangle2": {
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
    "borderRadius": 50,
    "width": 310,
    "height": 70,
    "left": 50,
    "top": "10%",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "screen2_rectangle3": {
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
    "borderRadius": 50,
    "width": 310,
    "height": 70,
    "left": 50,
    "top": "27%",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "screen2_rectangle4": {
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
    "borderRadius": 50,
    "width": 310,
    "height": 70,
    "left": 50,
    "top": "44%",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "screen2_rectangle5": {
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
    "borderRadius": 50,
    "width": 310,
    "height": 70,
    "left": 50,
    "top": "61%",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "screen2_rectangle6": {
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
    "borderRadius": 50,
    "width": 310,
    "height": 70,
    "left": 50,
    "top": "78%",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "screen2_rectangle7": {
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
    "borderRadius": 50,
    "width": 310,
    "height": 70,
    "left": 50,
    "top": "95%",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "screen2_rectangle8": {
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
    "borderRadius": 50,
    "width": 310,
    "height": 70,
    "left": 50,
    "top": "112%",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "screen2_rectangle9": {
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
    "borderRadius": 50,
    "width": 310,
    "height": 70,
    "left": 50,
    "top": "129%",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "screen2_rectangle10": {
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
    "borderRadius": 50,
    "width": 310,
    "height": 70,
    "left": 50,
    "top": "146%",
    "justifyContent": "center",
    "alignItems": "center"
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
    "fontSize": 20,
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
    "fontSize": 24,
    "fontWeight": "bold",
    "fontStyle": "normal",
    "fontFamily": "Myanmar Text",
    "textAlign": "left",
    "width": "100%",
    "height": "100%",
    "top": 15,
    "left": 40

  },
  "screen2_customer": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
    "fontSize": 24,
    "fontWeight": "bold",
    "fontStyle": "normal",
    "fontFamily": "Myanmar Text",
    "textAlign": "left",
    "width": "100%",
    "height": "100%",
    "top": 15,
    "left": 20
  },
  "screen2_agriculturalLabourer": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
    "fontSize": 24,
    "fontWeight": "bold",
    "fontStyle": "normal",
    "fontFamily": "Myanmar Text",
    "textAlign": "left",
    "width": "100%",
    "height": "100%",
    "top": 15,
    "left": 40
  },
  "screen2_logisticsProvider": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
    "fontSize": 24,
    "fontWeight": "bold",
    "fontStyle": "normal",
    "fontFamily": "Myanmar Text",
    "textAlign": "left",
    "width": "100%",
    "height": "100%",
    "top": 15,
    "left": 40
  },
  "screen2_expertAdvice": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
    "fontSize": 21,
    "fontWeight": "bold",
    "fontStyle": "normal",
    "fontFamily": "Myanmar Text",
    "textAlign": "left",
    "width": "100%",
    "height": "100%",
    "top": 15,
    "left": 3
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
    "top": 15
  },
  "screen2_retailer": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
    "fontSize": 24,
    "fontWeight": "bold",
    "fontStyle": "normal",
    "fontFamily": "Myanmar Text",
    "textAlign": "left",
    "width": "100%",
    "height": "100%",
    "top": 15,
    "left": 40
  },
  "screen2_homeIcon": {
    "opacity": 1,
    "borderTopLeftRadius": 43,
    "borderTopRightRadius": 43,
    "borderBottomLeftRadius": 43,
    "borderBottomRightRadius": 43,
    "width": 52,
    "height": 52,
    "left": "83%",
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