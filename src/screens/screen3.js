import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class Screen3 extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }




  render() {

    return (
      <View>
        <ImageBackground source={require('../assets/screen2.png')} style={styles.screen2} >
          <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
            <Icon name="arrow-left" style={styles.screen2_iconMaterialArrowback} size={30}></Icon>
          </TouchableOpacity>
          <Image source={require("../assets/homeIcon.png")} style={styles.screen2_homeIcon} />
          <View style={styles.screen2_component11_rectangle1}>
            <Text style={styles.screen2_component21_loginAs}>Login As</Text>
          </View>
          <View style={{ height: 500, width: 500 }}>
            <ImageBackground source={require('../assets/pexelsFelixMittermeier958076.png')} style={{ height: 500, width: 340, top: 150,left:40 }}>
              <TouchableOpacity style={styles.screen2_rectangle2} onPress={()=> this.props.navigation.navigate('FormFarmer')}>
                <Text style={styles.screen2_farmer}>Farmer</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.screen2_rectangle3} onPress={()=> this.props.navigation.navigate('FormRetailer')}>
                <Text style={styles.screen2_retailer}>Retailer</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.screen2_rectangle4} onPress={()=> this.props.navigation.navigate('Screen1')}>
                <Text style={styles.screen2_customer}>Customer</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.screen2_rectangle5} onPress={()=> this.props.navigation.navigate('FormLogistics')}>
                <Text style={styles.screen2_logisticsProvider}>Logistics provider</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.screen2_rectangle6} onPress={()=> this.props.navigation.navigate('FormTechExp')}>
                <Text style={styles.screen2_expertAdvice}>Expert Advice</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.screen2_rectangle7} onPress={()=> this.props.navigation.navigate('FormAgriLabourer')}>
                <Text style={styles.screen2_agriculturalLabourer}>Agricultural Laobourer</Text>
              </TouchableOpacity>
            </ImageBackground>
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
    "position": "absolute",
    "backgroundColor": "rgba(240, 236, 215, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
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
    "height": 63,
    "left": "9%",
    "top": 140
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
    "borderTopLeftRadius": 21,
    "borderTopRightRadius": 21,
    "borderBottomLeftRadius": 21,
    "borderBottomRightRadius": 21,
    "width": 243,
    "height": 41,
    "left": 50,
    "top": 70
  },
  "screen2_rectangle3": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(240, 236, 215, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
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
    "left": 50,
    "top": 130
  },
  "screen2_rectangle4": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(240, 236, 215, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
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
    "left": 50,
    "top": 190
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
    "borderTopLeftRadius": 21,
    "borderTopRightRadius": 21,
    "borderBottomLeftRadius": 21,
    "borderBottomRightRadius": 21,
    "width": 243,
    "height": 41,
    "left": 50,
    "top": 250
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
    "borderTopLeftRadius": 21,
    "borderTopRightRadius": 21,
    "borderBottomLeftRadius": 21,
    "borderBottomRightRadius": 21,
    "width": 243,
    "height": 43,
    "left": 50,
    "top": 310
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
    "borderTopLeftRadius": 21,
    "borderTopRightRadius": 21,
    "borderBottomLeftRadius": 21,
    "borderBottomRightRadius": 21,
    "width": 243,
    "height": 43,
    "left": 50,
    "top": 370
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
    "fontSize": 30,
    "fontWeight": "bold",
    "fontStyle": "normal",
    "fontFamily": "Myanmar Text",
    "textAlign": "left",
    "width": 127,
    "height": "100%",
    "left": "35%",
    "top": "10%"
  },
  "screen2_farmer": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
    "fontSize": 24,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Myanmar Text",
    "textAlign": "left",
    "width": "100%",
    "height": "100%",
    "left": "35%",
    "top": "5%"
  },
  "screen2_customer": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
    "fontSize": 24,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Myanmar Text",
    "textAlign": "left",
    "width": "100%",
    "height": "100%",
    "left": "30%",
    "top": "5%"
  },
  "screen2_agriculturalLabourer": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
    "fontSize": 24,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Myanmar Text",
    "textAlign": "left",
    "width": "100%",
    "height": "100%",
    "left": "6%",
    "top": "5%"
  },
  "screen2_logisticsProvider": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
    "fontSize": 24,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Myanmar Text",
    "textAlign": "left",
    "width": "100%",
    "height": "100%",
    "left": "15%",
    "top": "3%"
  },
  "screen2_expertAdvice": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
    "fontSize": 24,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "width": "100%",
    "height": "100%",
    "left": "22%",
    "top": "5%"
  },
  "screen2_rectangle28": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
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
    "fontSize": 24,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Myanmar Text",
    "textAlign": "left",
    "width": "100%",
    "height": "100%",
    "left": "35%",
    "top": "5%"
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