import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList,  ScrollView, TouchableOpacity, ImageBackground ,KeyboardAvoidingView} from 'react-native';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon1 from 'react-native-vector-icons/Ionicons'



export default class Bill extends Component {

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
            email: ""
        };
    }

gotoPay ()  {
    const total = this.props.route.params.total

    if(this.state.phoneno == '' || this.state.village == '' ||  this.state.pincode == '' || this.state.Firstname == ''){
        alert("Please fill the required delivery address details")
    }
    else {
        let details = {
            name: this.state.Firstname,
            phone: this.state.phoneno,
            village: this.state.village,
            pincode: this.state.pincode
        }

        console.log("data", details)
        this.props.navigation.navigate('Payment', {total: total, details: details})

    }
}


    render() {
        // const url = this.props.route.params.data.url;
        // const prod = this.props.route.params.data.description;
        // const rate = this.props.route.params.data.rate;
        const total = this.props.route.params.total
        console.log(total)
        return (
            <View style={{height:1000}}>
                <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"}
      style={{height:1000}}>
                <ImageBackground source={require('../assets/screen2.png')} style={styles.screen2} >
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
                            <Icon name="arrow-left" style={styles.screen2_iconMaterialArrowback} size={30}></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon1 name="search" style={styles.screen_search} size={30} color="white" />
                        </TouchableOpacity>
                    </View>
 
                    <View style={{ left: 20, top:90 }}>
                        <Text style={styles.bill}>Bill details</Text>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ width: "50%" }}>
                                <Text style={styles.billtxt}>Item Total</Text>
                                <Text style={styles.billtxt}>Delivery Fee</Text>
                                <Text style={styles.billtxt}>Taxes and Charges</Text>
                            </View>
                            <View style={{ width: "40%", alignItems: "flex-end" }}>
                                <Text style={styles.billval}>{total}</Text>
                                <Text style={styles.billval}>43</Text>
                                <Text style={styles.billval}>34</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", borderTopWidth: 1, width: "90%", borderColor: "green", marginTop: 10 }}>
                            <Text style={styles.billtxt1}>To Pay</Text>
                            <Text style={styles.billval1}>{total+34+43}</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        {/* <TouchableOpacity style={styles.formFarmer_rectanglelog1}>
                            <Text style={styles.textfarmer}>Add order</Text>
                        </TouchableOpacity> */}
                        <TouchableOpacity style={styles.formFarmer_rectanglelog2}>
                            <Text style={styles.textfarmer}>Deliver to:</Text>
                        </TouchableOpacity>
                        <View style={{ "flexDirection": "row" }}>
                            <TextInput style={styles.formFarmer_rectangle2} placeholder="First Name" placeholderTextColor="grey" 
                            color="black"
                            onChangeText={(v) => this.setState({ Firstname: v })}></TextInput>
                            <TextInput style={styles.formFarmer_rectangle2} placeholder="Last Name" placeholderTextColor="grey" color="black"></TextInput>
                        </View>
                        <TextInput style={styles.formFarmer_rectangle3} placeholder="Email Id" placeholderTextColor="grey" color="black" value={this.state.email}
              onChangeText={(v) => this.setState({ email: v })}></TextInput>
                        <TextInput style={styles.formFarmer_rectangle5} placeholderTextColor="grey" placeholder="Mobile No." color="black" value={this.state.phoneno}
              onChangeText={(v) => this.setState({ phoneno: v })}></TextInput>
                        <TextInput style={styles.formFarmer_rectangle6} placeholderTextColor="grey" placeholder="Village/town" color="black" value={this.state.village}
              onChangeText={(v) => this.setState({ village: v })}></TextInput>
                        <View style={{ "flexDirection": "row" }}>
                            <TextInput style={styles.formFarmer_rectangle7} placeholderTextColor="grey" placeholder="State" color="black" value={this.state.state}
              onChangeText={(v) => this.setState({ state: v })}></TextInput>
                        </View>
                        <TextInput style={styles.formFarmer_rectangle8} placeholderTextColor="grey" placeholder="Pin Code" color="black" value={this.state.pincode}
              onChangeText={(v) => this.setState({ pincode: v })}></TextInput>
                        <TouchableOpacity style={styles.formFarmer_rectanglelog} onPress={()=> this.gotoPay()}>
                            <Text style={styles.textfarmer}>pay now</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                </KeyboardAvoidingView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    "bill": {
        "fontSize": 20,
        "fontWeight": "bold"
    },
    "billtxt": {
        "paddingTop": 5,
        "fontSize": 18,
        
    },
    "billval": {
        "paddingTop": 5,
        "fontSize": 18,
        "fontWeight": "bold"
    },
    "billtxt1": {
        "paddingTop": 10,
        "fontSize": 18,
        "fontWeight": "bold"
    },
    "billval1": {
        "paddingTop": 10,
        "fontSize": 18,
        "fontWeight": "bold",
        "marginStart": 310
    },
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
        "left": "10%",
        "top": 10
    },
    "screen_search": {
        "left": 350,
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
    },
    "textfarmer": {
        "fontSize": 20,
        "fontWeight": "bold"
    },
    "textfarmer1": {
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
        "width": 340,
        "height": 41,
        "left": "10%",
        "top": 300,
        "justifyContent": "center",
        "alignItems": "center"
    },
    "formFarmer_rectanglelog1": {
        "opacity": 1,
        "backgroundColor": "#5e9e72",
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
        "width": 150,
        "height": 35,
        "left": "30%",
        "top": 100,
        "justifyContent": "center",
        "alignItems": "center"
    },
    "formFarmer_rectanglelog2": {
        "opacity": 1,
        "backgroundColor": "#5e9e72",
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
        "width": 150,
        "height": 35,
        "left": "30%",
        "top": 110,
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
        "top": 110,
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
        "left": "10%",
        "top": 240,
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
        "top": 50,
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
        "left": "10%",
        "top": 287,
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
        "left": "10%",
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
        "left": "50%",
        "top": 279,
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
        "left": "8%",
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