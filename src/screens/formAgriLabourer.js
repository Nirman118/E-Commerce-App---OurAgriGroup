import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Button } from 'react-native';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import firestore from '@react-native-firebase/firestore';


export default class FormAgriLabourer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Available: true,
      Firstname: "",
      Lastname: "",
      age: "",
      phoneno: "",
      village: "",
      city: "",
      state: "",
      pincode: "",
      email: "",
      startdateavailable: "",
      Lastdateavailable: "",
      startdate: "",
      Lastdate: ""
    };
  }

  render() {
    const sub = async () => {
      firestore()
        .collection('agrilab')
        .add({
          startdate: this.state.startdateavailable,
          Firstname: this.state.Firstname,
          Lastname: this.state.Lastname,
          age: this.state.age,
          phoneno: this.state.phoneno,
          village: this.state.village,
          city: this.state.city,
          state: this.state.state,
          pincode: this.state.pincode,
          email: this.state.email,
          Lastdate: this.state.Lastdate,
          startdateavailable:this.state.startdateavailable,
          Lastdateavailable:this.state.Lastdateavailable
        })
        .then(() => {
          console.log('User added!');
        });
      await alert("Thank You for Registering!")
        this.props.navigation.navigate('Screen1')
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
              <Text style={styles.textfarmer}>Agricultural Labourer</Text>
            </View>
          </View>

          <View style={styles.formFarmer_rectangle11} color="black" fontSize={20}>
            <Text style={{ fontSize: 22 }}>Available</Text>
          </View>

          <View style={{ "flexDirection": "row" }}>
            <TouchableOpacity style={styles.formFarmer_rectangle2} onPress={() => this.setState({ Available: true })}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.formFarmer_rectangle2} onPress={() => this.setState({ Available: false })}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>No</Text>
            </TouchableOpacity>
          </View>

          {!this.state.Available ?
            <View style={{ "flexDirection": "row" }}>
              <Text style={{ fontWeight: "bold", color: "black", fontSize: 19, top: 90 , left: 50}}>From:</Text>
              <TextInput style={styles.formFarmer_rectangle12} placeholder="dd/mm/yyyy" placeholderTextColor="grey" color="black" fontSize={20} value={this.state.startdateavailable}
                onChangeText={(v) => this.setState({ startdateavailable: v })}></TextInput>
              <Text style={{ fontWeight: "bold", color: "black", fontSize: 19, top: 90, left: 20 }}>To:</Text>
              <TextInput style={styles.formFarmer_rectangle12} placeholder="dd/mm/yyyy" placeholderTextColor="grey" color="black" fontSize={20} value={this.state.Lastdateavailable}
                onChangeText={(v) => this.setState({ Lastdateavailable: v })}></TextInput>
            </View>
            :
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <View style={{ "flexDirection": "row" ,}}>
                <Text style={{ fontWeight: "bold", color: "black", fontSize: 19, top: 90, left: 50 }}>From:</Text>
                <TextInput style={styles.formFarmer_rectangle12} placeholder="dd/mm/yyyy" placeholderTextColor="grey" color="black" fontSize={20} value={this.state.startdate}
                  onChangeText={(v) => this.setState({ startdate: v })}></TextInput>
                <Text style={{ fontWeight: "bold", color: "black", fontSize: 19, top: 90, left: 20 }}>To:</Text>
                <TextInput style={styles.formFarmer_rectangle12} placeholder="dd/mm/yyyy" placeholderTextColor="grey" color="black" fontSize={20} value={this.state.Lastdate}
                  onChangeText={(v) => this.setState({ Lastdate: v })}></TextInput>
              </View>
              <View style={{ "flexDirection": "row" }}>
                <TextInput style={styles.formFarmer_rectangle21} placeholder="First Name" placeholderTextColor="grey" color="black" value={this.state.Firstname}
                  onChangeText={(v) => this.setState({ Firstname: v })}></TextInput>
                <TextInput style={styles.formFarmer_rectangle21} placeholder="Last Name" placeholderTextColor="grey" color="black" value={this.state.Lastname}
                  onChangeText={(v) => this.setState({ Lastname: v })}></TextInput>
              </View>
              <View style={{ "flexDirection": "row" }}>
                <TextInput style={styles.formFarmer_rectangle4} placeholder="Age" placeholderTextColor="grey" color="black" value={this.state.age}
                  onChangeText={(v) => this.setState({ age: v })}></TextInput>
                <TextInput style={styles.formFarmer_rectangle4} placeholder="Email Id" placeholderTextColor="grey" color="black" value={this.state.email}
                  onChangeText={(v) => this.setState({ email: v })}></TextInput>
              </View>
              <View style={{ "flexDirection": "row" }}>
                <TextInput style={styles.formFarmer_rectangle5} placeholderTextColor="grey" placeholder="Mobile No." color="black" value={this.state.phoneno}
                  onChangeText={(v) => this.setState({ phoneno: v })}></TextInput>
                <TextInput style={styles.formFarmer_rectangle5} placeholderTextColor="grey" placeholder="Village/town" color="black" value={this.state.village}
                  onChangeText={(v) => this.setState({ village: v })}></TextInput>
              </View>
              <View style={{ "flexDirection": "row" }}>
                <TextInput style={styles.formFarmer_rectangle7} placeholderTextColor="grey" placeholder="City" color="black" value={this.state.city}
                  onChangeText={(v) => this.setState({ city: v })}></TextInput>
                <TextInput style={styles.formFarmer_rectangle7} placeholderTextColor="grey" placeholder="State" color="black" value={this.state.state}
                  onChangeText={(v) => this.setState({ state: v })}></TextInput>
              </View>
              <TextInput style={styles.formFarmer_rectangle8} placeholderTextColor="grey" placeholder="Pin Code" color="black" value={this.state.pincode}
                onChangeText={(v) => this.setState({ pincode: v })}></TextInput>
            </View>
          }

          <View style={styles.formFarmer_rectangle9}>
            <Text style={styles.formFarmer_clickHereToGetNotificationsAboutPriceFluctuationsOfCommodities}>Labour Charges according to current market.</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "red", top: 294, fontSize: 20, left: 90 }}>*</Text>
            <Text style={styles.formFarmer_tc}>T&C*</Text>
          </View>

          <TouchableOpacity style={styles.formFarmer_rectanglelog} onPress={() => sub()}> 
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
    "top": 750,
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
    "top": 70,
    "margin": 10,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "formFarmer_rectangle12": {
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
    "borderRadius": 0,
    "width": 159,
    "height": 40,
    "top": "30%",
    "justifyContent": "center",
    "alignItems": "center",

  },
  "formFarmer_rectangle21": {
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
    "borderRadius": 21,
    "width": 159,
    "height": 40,
    "top": "37%",
    "justifyContent": "center",
    "alignItems": "center",
    "margin":5
  },
  "formFarmer_rectangle13": {
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
    "borderRadius": 0,
    "width": 159,
    "height": 40,
    "left": 26,
    "top": "10%",
    "justifyContent": "center",
    "alignItems": "center",
    "marginRight": 25
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
    "top": "40%",
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
    "top": "40%",
    "justifyContent": "center",
    "alignItems": "center",
    "margin":5
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
    "top": "20%",
    "margin": 10,
    "padding": 10,
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
    "width": 180,
    "height": 43,
    "left": "25%",
    "top": 70,
    "margin": 10,
    "justifyContent": "center",
    "alignItems": "center",
    "padding": 10,
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
    "top": "30%",
    "left": 110
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

  "formFarmer_rectangle5": {
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
    "width": 160,
    "height": 41,
    "top": "43%",
    "justifyContent": "center",
    "alignItems": "center",
    "margin":5
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
    "top": "70%",
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
    "top": "44%",
    "margin": 5,
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
    "top": "60%",
    "margin": 10,
    "justifyContent": "center",
    "alignItems": "center"
  },


});