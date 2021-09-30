import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import firestore from '@react-native-firebase/firestore';

export default class FormTechExp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Firstname: "",
      Lastname: "",
      age: "",
      phoneno: "",
      village: "",
      city: "",
      state: "",
      pincode: "",
      email:"",
      profession:"",
      institution:"",
      exp:""
    };
  }

  render() {
    firestore()
    .collection('techexp')
    .add({
      Firstname: this.state.Firstname,
      Lastname: this.state.Lastname,
      age: this.state.age,
      phoneno: this.state.phoneno,
      village: this.state.village,
      city: this.state.city,
      state: this.state.state,
      pincode: this.state.pincode,
      email:this.state.email,
      profession:this.state.profession,
      institution:this.state.institution,
      exp: this.state.exp

    })
    .then( () => {
      alert('User added!');
    });
    // await this.props.navigation.navigate('FarmerCateg')


    return (
      <View>
        <ImageBackground source={require('../assets/formFarmer.png')} style={styles.formFarmer} >
          <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
              <Icon name="arrow-back" size={35} color="black" style={{}} />
            </TouchableOpacity>
            <Image style={styles.formFarmer_user} source={require('../assets/user.png')} />
            <View style={styles.formFarmer_rectangle13c72defaa}>
              <Text style={styles.textfarmer}>Technical Expert</Text>
            </View>
          </View>
          <View style={{ "flexDirection": "row" }}>
            <TextInput style={styles.formFarmer_rectangle2} placeholder="First Name" placeholderTextColor="grey" color="black" value={this.state.Firstname}
              onChangeText={(v) => this.setState({ Firstname: v })} ></TextInput>
            <TextInput style={styles.formFarmer_rectangle2} placeholder="Last Name" placeholderTextColor="grey" color="black" value={this.state.Lastname}
              onChangeText={(v) => this.setState({ Lastname: v })}></TextInput>
          </View>
          <TextInput style={styles.formFarmer_rectangle4} placeholder="Age" placeholderTextColor="grey" color="black" value={this.state.age}
              onChangeText={(v) => this.setState({ age: v })}></TextInput>
          <TextInput style={styles.formFarmer_rectangle4} placeholder="Email Id" placeholderTextColor="grey" color="black" value={this.state.email}
              onChangeText={(v) => this.setState({ email: v })}></TextInput>
          <TextInput style={styles.formFarmer_rectangle3} placeholder="Profession" placeholderTextColor="grey" color="black" value={this.state.profession}
              onChangeText={(v) => this.setState({ profession: v })}></TextInput>
          <TextInput style={styles.formFarmer_rectangle5} placeholderTextColor="grey" placeholder="Institution" color="black"  value={this.state.institution}
              onChangeText={(v) => this.setState({ institution: v })}></TextInput>
          <TextInput style={styles.formFarmer_rectangle6} placeholderTextColor="grey" placeholder="Experience(yrs)." color="black" value={this.state.exp}
              onChangeText={(v) => this.setState({ exp: v })}></TextInput>
          <TextInput style={styles.formFarmer_rectangle7} placeholderTextColor="grey" placeholder="Mobile No." color="black" value={this.state.phoneno}
              onChangeText={(v) => this.setState({ phoneno: v })}></TextInput>
          <TextInput style={styles.formFarmer_rectangle8} placeholderTextColor="grey" placeholder="Village/town" color="black" value={this.state.village}
              onChangeText={(v) => this.setState({ village: v })}></TextInput>
          <View style={{ "flexDirection": "row" }}>
            <TextInput style={styles.formFarmer_rectangle17} placeholderTextColor="grey" placeholder="City" color="black" value={this.state.city}
              onChangeText={(v) => this.setState({ city: v })}></TextInput>
            <TextInput style={styles.formFarmer_rectangle17} placeholderTextColor="grey" placeholder="State" color="black" value={this.state.state}
              onChangeText={(v) => this.setState({ state: v })}></TextInput>
          </View>
          <TextInput style={styles.formFarmer_rectangle18} placeholderTextColor="grey" placeholder="Pin Code" color="black" value={this.state.pincode}
              onChangeText={(v) => this.setState({ pincode: v })}></TextInput>
          <View style={{flexDirection:"row"}}>
          <View style={styles.formFarmer_rectangle9}>
            <Text style={styles.formFarmer_clickHereToGetNotificationsAboutPriceFluctuationsOfCommodities}> Comment on queries by farmers 
 about various crop/soil diseases </Text>
          </View>
          <View style={styles.formFarmer_rectangle19}>
            <Text style={styles.formFarmer_clickHereToGetNotificationsAboutPriceFluctuationsOfCommodities}>Are you open to farm visits for providing
Technical advice about fertilizers 
crop selection and soil health.</Text>
          </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "red", top: 154, fontSize: 20, left: 90 }}>*</Text>
            <Text style={styles.formFarmer_tc}>T&C</Text>
          </View>
          <TouchableOpacity style={styles.formFarmer_rectanglelog} onPress={()=> firestore()}>
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
  "textfarmer": {
    "fontSize": 23,
    "fontWeight": "bold"
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
    "top": 242,
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
    "top": 41,
    "marginTop": 5,
    "justifyContent": "center",
    "alignItems": "center"
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
    "top": 288,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "formFarmer_clickHereToGetNotificationsAboutPriceFluctuationsOfCommodities": {
    "opacity": 1,
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
    "fontSize": 15,
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
    "top": 335,
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
    "top": 175,
    "margin": 10,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "formFarmer_rectangle17": {
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
    "top": 147,
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
    "top": 160,
    "margin": 10,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "formFarmer_rectangle18": {
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
    "top": 133,
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
    "borderTopLeftRadius": 30,
    "borderBottomLeftRadius": 30,
    "width": 190,
    "height": 100,
    "left": 10,
    "top": 160,
    "marginTop": 10,
    "marginLeft": 10,
    "marginBottom": 10,
    "padding": 10,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "formFarmer_rectangle19": {
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
    "borderTopRightRadius": 30,
    "borderBottomRightRadius": 30,
    "width": 190,
    "height": 100,
    "top": 160,
    "marginTop": 10,
    "marginRight": 10,
    "marginBottom": 10,
    "padding": 10,
    "justifyContent": "center",
    "alignItems": "center"
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
    "justifyContent": "center",
    "alignItems": "center"
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
    "width": 57,
    "height": 30,
    "top": 154,
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
    "width": 24,
    "height": 24,
    "left": 17,
    "top": 29
  },

});