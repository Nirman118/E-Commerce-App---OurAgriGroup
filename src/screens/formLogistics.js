import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import firestore from '@react-native-firebase/firestore';

export default class FormLogistics extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Firstname: "",
      Lastname: "",
      age: "",
      Vehicleno: "",
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
        .collection('logistics')
        .add({
          Firstname: this.state.Firstname,
          Lastname: this.state.Lastname,
          age: this.state.age,
          Vehicleno: this.state.Vehicleno,
          phoneno: this.state.phoneno,
          village: this.state.village,
          city: this.state.city,
          state: this.state.state,
          pincode: this.state.pincode,
          email:this.state.email
        })
        .then( () => {
          // alert('User added!');
        });
        await alert("Thank You for Registering!")
        this.props.navigation.navigate('Screen1')

    }
    return (
      <View>
        <ImageBackground source={require('../assets/formFarmer.png')} style={styles.formFarmer} >
          <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
          <Icon name="arrow-back" size={35} color="black" style={{}}/>
          </TouchableOpacity>
            <Image style={styles.formFarmer_user} source={require('../assets/user.png')} />
            <View style={styles.formFarmer_rectangle13c72defaa}>
              <Text style={styles.textfarmer}>Logistic Provider</Text>
            </View>
          </View>
          <TextInput style={styles.formFarmer_rectangle11} placeholderTextColor="grey" placeholder="Vehicle No." color="black" value={this.state.Vehicleno}
              onChangeText={(v) => this.setState({ Vehicleno: v })}></TextInput>
          <View style={{ "flexDirection": "row"}}>
            <TextInput style={styles.formFarmer_rectangle2} placeholder="First Name" placeholderTextColor="grey" color="black" value={this.state.Firstname}
              onChangeText={(v) => this.setState({ Firstname: v })}></TextInput>
            <TextInput style={styles.formFarmer_rectangle2} placeholder="Last Name" placeholderTextColor="grey" color="black" value={this.state.Lastname}
              onChangeText={(v) => this.setState({ Lastname: v })}></TextInput>
          </View>
          <TextInput style={styles.formFarmer_rectangle4} placeholder="Age" placeholderTextColor="grey" color="black" value={this.state.age}
              onChangeText={(v) => this.setState({ age: v })}></TextInput>
          <TextInput style={styles.formFarmer_rectangle3} placeholder="Email Id" placeholderTextColor="grey" color="black" value={this.state.email}
              onChangeText={(v) => this.setState({ email: v })}></TextInput>
          <TextInput style={styles.formFarmer_rectangle5} placeholderTextColor="grey" placeholder="Mobile No." color="black" value={this.state.phoneno}
              onChangeText={(v) => this.setState({ phoneno: v })}></TextInput>
          <TextInput style={styles.formFarmer_rectangle6} placeholderTextColor="grey" placeholder="Village/town" color="black" value={this.state.village}
              onChangeText={(v) => this.setState({ village: v })}></TextInput>
          <View style={{ "flexDirection": "row" }}>
            <TextInput style={styles.formFarmer_rectangle7} placeholderTextColor="grey" placeholder="City" color="black" value={this.state.city}
              onChangeText={(v) => this.setState({ city: v })}></TextInput>
            <TextInput style={styles.formFarmer_rectangle7} placeholderTextColor="grey" placeholder="State" color="black" value={this.state.state}
              onChangeText={(v) => this.setState({ state: v })}></TextInput>
          </View>
          <TextInput style={styles.formFarmer_rectangle8} placeholderTextColor="grey" placeholder="Pin Code" color="black" value={this.state.pincode}
              onChangeText={(v) => this.setState({ pincode: v })}></TextInput>
          <View style={styles.formFarmer_rectangle9}>
            <Text style={styles.formFarmer_clickHereToGetNotificationsAboutPriceFluctuationsOfCommodities}>Click here to get alerts to provide transport services.</Text></View>
            <View style={{flexDirection:"row"}}>
              <Text style={{color:"red", top:214, fontSize:20, left:90}}>*</Text>
            <Text style={styles.formFarmer_tc}>T&C</Text>
            </View>
          <TouchableOpacity style={styles.formFarmer_rectanglelog} onPress={()=> sub()}>
            <Text style={styles.textfarmer}>Submit</Text>
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
    "width": "100%",
    "height": "100%",
  },
  "textfarmer":{
    "fontSize":23,
    "fontWeight":"bold"
    },
  "formFarmer_iconFeatherSearch": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 27,
    "height": 27,
    "left": 358.27,
    "top": 49.5
  },
  "formFarmer_iconFeatherSearch_path1": {
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
    "justifyContent":"center",
    "alignItems":"center"
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
    "top": 750,
    "justifyContent":"center",
    "alignItems":"center"
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
    "top": 50,
    "margin": 10,
    "justifyContent":"center",
    "alignItems":"center"
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
    "top": 218,
    "justifyContent":"center",
    "alignItems":"center"
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
    "justifyContent":"center",
    "alignItems":"center"
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
    "top": 320,
    "justifyContent":"center",
    "alignItems":"center"
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
    "justifyContent":"center",
    "alignItems":"center"
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
    "top": 205,
    "margin": 10,
    "justifyContent":"center",
    "alignItems":"center"
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
    "top": 195,
    "margin": 10,
    "justifyContent":"center",
    "alignItems":"center"
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
    "top": 220,
    "margin": 10,
    "padding": 10,
    "justifyContent":"center",
    "alignItems":"center"
  },
  "formFarmer_rectangle10": {
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
    "width": 230,
    "height": 43,
    "left": 33,
    "top": 185,
    "margin": 10,
    "justifyContent":"center",
    "alignItems":"center"
  },
  "formFarmer_rectangle11": {
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
    "width": 230,
    "height": 43,
    "left": 33,
    "top": 60,
    "margin": 10,
    "justifyContent":"center",
    "alignItems":"center"
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
    "width": 57,
    "height": 30,
    "top": 214,
    "left":90
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
    "width": 24,
    "height": 24,
    "left": 17,
    "top": 29
  },
  
});