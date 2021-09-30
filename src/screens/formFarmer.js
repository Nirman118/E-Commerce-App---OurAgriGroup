import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import firestore from '@react-native-firebase/firestore';

export default class FormFarmer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Firstname: "",
      Lastname: "",
      age: "",
      kisanno: "",
      phoneno: "",
      village: "",
      city: "",
      state: "",
      pincode: "",
      email:""
    };
  }

  render() {
    console.log("due", this.state.Firstname)
    const sub = async() => {
      firestore()
        .collection('farmer')
        .add({
          Firstname: this.state.Firstname,
          Lastname: this.state.Lastname,
          age: this.state.age,
          kisanno: this.state.kisanno,
          phoneno: this.state.phoneno,
          village: this.state.village,
          city: this.state.city,
          state: this.state.state,
          pincode: this.state.pincode,
          email:this.state.email
        })
        .then( () => {
          alert('User added!');
        });
        await this.props.navigation.navigate('FarmerCateg')

    }
    return (
      <View>
        <ImageBackground source={require('../assets/formFarmer.png')} style={styles.formFarmer} >
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" size={35} color="black" style={{}} />
            </TouchableOpacity>
            <Image style={styles.formFarmer_user} source={require('../assets/user.png')} />
            <View style={styles.formFarmer_rectangle13c72defaa}>
              <Text style={styles.textfarmer}>Farmer Details</Text>
            </View>
          </View>
          <View style={{ "flexDirection": "row" }}>
            <TextInput
              style={styles.formFarmer_rectangle2} placeholder="First Name"
              placeholderTextColor="grey" color="black" value={this.state.Firstname}
              onChangeText ={value => this.setState({ Firstname: value })} />
            <TextInput
              style={styles.formFarmer_rectangle2}
              placeholder="Last Name"
              placeholderTextColor="grey"
              color="black"
              onChangeText={Lastname => this.setState({ Lastname: Lastname })}></TextInput>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TextInput style={styles.formFarmer_rectangle4} placeholder="Age" placeholderTextColor="grey" color="black" onChangeText={age => this.setState({ age: age })}></TextInput>
            <TextInput style={styles.formFarmer_rectangle4} placeholder="Kisan Card no." placeholderTextColor="grey" color="black" onChangeText={kisanno => this.setState({ kisanno: kisanno })}></TextInput>
          </View>
          <TextInput style={styles.formFarmer_rectangle3} placeholder="Email Id" placeholderTextColor="grey" color="black" onChangeText={email => this.setState({ email: email })}></TextInput>
          <TextInput style={styles.formFarmer_rectangle5} placeholderTextColor="grey" placeholder="Mobile No." color="black" onChangeText={phoneno => this.setState({ phoneno: phoneno })}></TextInput>
          <TextInput style={styles.formFarmer_rectangle6} placeholderTextColor="grey" placeholder="Village/town" color="black" onChangeText={village => this.setState({ village: village })}></TextInput>
          <View style={{ "flexDirection": "row" }}>
            <TextInput style={styles.formFarmer_rectangle7} placeholderTextColor="grey" placeholder="City" color="black" onChangeText={city => this.setState({ city: city })}></TextInput>
            <TextInput style={styles.formFarmer_rectangle7} placeholderTextColor="grey" placeholder="State" color="black" onChangeText={state => this.setState({ state: state })}></TextInput>
          </View>
          <TextInput style={styles.formFarmer_rectangle8} placeholderTextColor="grey" placeholder="Pin Code" color="black" onChangeText={pincode => this.setState({ pincode: pincode })}></TextInput>
          <View style={styles.formFarmer_rectangle9}>
            <Text style={styles.formFarmer_clickHereToGetNotificationsAboutPriceFluctuationsOfCommodities}>Click here to get notifications about price fluctuations of commodities</Text></View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "red", top: 374, fontSize: 20, left: 90 }}>*</Text>
            <Text style={styles.formFarmer_tc}>T&C</Text>
          </View>
          <TouchableOpacity style={styles.formFarmer_rectanglelog} onPress={() => sub()} >
            <Text style={styles.textfarmer}>Login</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  "formFarmer": {
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
  "textfarmer": {
    "fontSize": 23,
    "fontWeight": "bold"
  },
  "formFarmer_iconFeatherSearch": {
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
    "width": 27,
    "height": 27,
    "left": 358.27,
    "top": 49.5
  },
  "formFarmer_iconFeatherSearch_path1": {
    "opacity": 1,
    "left": 260,
    "top": 47,
    "color": "white"
  },

  "formFarmer_rectangle13c72defaa": {
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
    "width": 231,
    "height": 41,
    "left": 95,
    "top": 46,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "formFarmer_rectanglelog": {
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
    "width": 231,
    "height": 41,
    "left": 100,
    "top": 800,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "formFarmer_user": {
    "opacity": 1,
    "borderTopLeftRadius": 38,
    "borderTopRightRadius": 38,
    "borderBottomLeftRadius": 38,
    "borderBottomRightRadius": 38,
    "width": 41,
    "height": 41,
    "left": 8,
    "top": 46,
    "borderWidth": 1
  },
  "formFarmer_farmerDetails": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
    "fontSize": 27,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Myanmar Text",
    "textAlign": "left",

    "width": 177,
    "height": 27,
    "left": 143,
    "top": 54,
    "borderWidth": 1
  },
  "formFarmer_rectangle1": {
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
    "borderTopLeftRadius": 26,
    "borderTopRightRadius": 26,
    "borderBottomLeftRadius": 26,
    "borderBottomRightRadius": 26,
    "width": 200,
    "height": 40,
    "left": 110,
    "top": 47
  },
  "formFarmer_rectangle2": {
    "opacity": 1,
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
    "width": 159,
    "height": 43,
    "left": 32,
    "top": 100,
    "margin": 10,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "formFarmer_rectangle3": {
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
    "width": 231,
    "height": 41,
    "left": 43,
    "top": 260,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "formFarmer_rectangle4": {
    "opacity": 1,
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
    "width": 159,
    "height": 41,
    "left": 43,
    "top": 102,
    "justifyContent": "center",
    "alignItems": "center",
    "marginRight": 20
  },
  "formFarmer_rectangle5": {
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
    "width": 231,
    "height": 41,
    "left": 43,
    "top": 315,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "formFarmer_clickHereToGetNotificationsAboutPriceFluctuationsOfCommodities": {
    "opacity": 1,
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
    "fontSize": 19,
    "fontWeight": "bold",
    "fontStyle": "normal",
    "fontFamily": "Myanmar Text",
    "textAlign": "left",

  },
  "formFarmer_rectangle6": {
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
    "width": 231,
    "height": 41,
    "left": 43,
    "top": 370,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "formFarmer_rectangle7": {
    "opacity": 1,
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
    "width": 159,
    "height": 43,
    "left": 33,
    "top": 270,
    "margin": 10,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "formFarmer_rectangle8": {
    "opacity": 1,
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
    "width": 159,
    "height": 43,
    "left": 33,
    "top": 265,
    "margin": 10,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "formFarmer_rectangle9": {
    "opacity": 1,
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderRadius": 30,
    "width": 340,
    "height": 70,
    "left": 32,
    "top": 350,
    "margin": 10,
    "padding": 10,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "formFarmer_tc": {
    "opacity": 1,
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
    "fontSize": 24,
    "fontWeight": "bold",
    "fontStyle": "normal",
    "fontFamily": "Myanmar Text",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 57,
    "height": 30,
    "top": 374,
    "left": 90
  },
  "formFarmer_login": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
    "fontSize": 24,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Myanmar Text",
    "textAlign": "left",
    "width": 65,
    "height": 24,
    "left": 14,
    "top": 5
  },

  "formFarmer_iconMaterialArrowback": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 24,
    "height": 24,
    "left": 17,
    "top": 29
  },

});