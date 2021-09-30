import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, Alert, FlatList, Picker, ScrollView, TouchableHighlight, ImageBackground, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { FBLogin, FBLoginManager } from 'react-native-facebook-login';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';

import { login } from '@store/actions/auth'
import { ActivityIndicator } from 'react-native-paper';

class Screen1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      isType: false,
      user: '',
      phone: '+91',
      confirm: '',
      otp: '',
      isotp:false,
      type:"",
      token: ''
    };
    //GoogleSignin.configure();
    //GoogleSignin.configure({ webClientId: "512558993337-9r29j15nhtbeqh7nv30uqh08cr3i7d6n.apps.googleusercontent.com", offlineAccess: true });
    const usersCollection = firestore().collection('users').doc('demo');

    GoogleSignin.configure()
    //   scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    //   //webClientId: '512558993337-qc8f2bu6iiuacg6ga1edi902ttpqkb5k.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    //   offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    //   //hostedDomain: '', // specifies a hosted domain restriction
    //  // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
    //   //forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    //  // accountName: '', // [Android] specifies an account name on the device that should be used
    //   androidClientId: '512558993337-9r29j15nhtbeqh7nv30uqh08cr3i7d6n.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    //   //googleServicePlistPath: '', // [iOS] optional, if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    // });

  }
  
  
  async componentDidMount() {
    firebase.app()
    let a = await AsyncStorage.getItem("Type")
    if(a){
      console.log("props", a)
     this.setState({ isType: false })
     this.props.navigation.navigate('Screen1')
    }
    else {
      this.setState({ isType: true })
    }
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
       console.log("fcmToken", fcmToken);
       this.setState({token: fcmToken})
    } 
    let r = await AsyncStorage.getItem("Login")
    if (r) {
      let res = JSON.parse(r)
      this.props.login(res.user)
      this.setState({ isLogin: true, user: res.user })
      this.props.navigation.navigate("Screen3Categories")
    }
    else {
      this.setState({ isLogin: true })

    }

  }
  // async signInWithPhoneNumber(phoneNumber) {
  //   console.log("confirmation")
  //   const confirmation = await auth().signInWithPhoneNumber("+91"+phoneNumber);
  //    this.setState({confirm: confirmation})
  //   console.log("confirmation", confirmation)
  //  // setConfirm(confirmation);
  // }
  async signInWithPhoneNumber(phoneNumber) {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      console.log("confirmation", confirmation)

      this.setState({ confirmation }, () => {
        this.setState({ isotp:true })

      })
    } catch (error) {
      alert(error);
      console.log("err", error)
    }
  }
async signInWithOtp(otp){
  this.setState({otp:otp})
  console.log("otp:",otp)
  let type = await AsyncStorage.getItem("Type")
  this.state.confirmation.confirm(this.state.otp).then(  
    async user => {
      console.log("check",user)
      firestore()
      .collection('users')
      //.doc(user.user.uid)
      .add({
        phoneNumber: user.user.phoneNumber,
        type: JSON.parse(type),
        token: this.state.token
      })
      .then(() => {
        console.log('User added!');
        this.props.navigation.navigate("Screen3Categories")
      })
      .catch((e) => {
        console.log("errr", e)
      })
    }
  )
  .catch((e) => {
    console.log("er", e)
  })
}
  async confirmCode() {
    try {
      await this.state.confirm.confirm(code).then(() => {
        console.log('User added!');
        this.props.navigation.navigate("Screen3Categories")
      });
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  async onSignIn() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // const currentUser = await GoogleSignin.getCurrentUser();
      // console.log("currentUser", currentUser)
      await AsyncStorage.setItem("Login", JSON.stringify(userInfo))
      let type = await AsyncStorage.getItem("Type")

      alert("Login with " + userInfo.user.email)
      firestore()
      .collection(JSON.parse(type) == 'farmer' ? 'farmer' : 'users')
      .add({
        name: userInfo.user.name,
        email:userInfo.user.email,
        img:userInfo.user.photo,
        id:userInfo.user.id,
        type: JSON.parse(type),
        token: this.state.token
      })
      .then(() => {
        this.props.navigation.navigate("Screen3Categories")
      });
      this.props.login(userInfo.user)
     
      this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("1", error)
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("2", error)
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("3", error)
        // play services not available or outdated
      } else {
        // some other error happened
        console.log("4", error)
      }
    }
  }
  onFBLogin() {
    FBLoginManager.setLoginBehavior(FBLoginManager.LoginBehaviors.Web); // defaults to Native

    FBLoginManager.loginWithPermissions(["email", "user_friends"], function (error, data) {
      if (!error) {
        console.log("Login data: ", data);
      } else {
        console.log("Error: ", error);
      }
    })
  }
  async onSelectType(v) {
    let type=JSON.stringify(v);
    console.log("type",type)
    await AsyncStorage.setItem("Type", JSON.stringify(v))
    this.setState({isType: false})
    if(type == "user"){
      this.props.navigation.navigate('Screen1')
    }else if(type == "farmer"){
      this.props.navigation.navigate('FormFarmer')
    }else if(type == "logistics"){
      this.props.navigation.navigate('Formlogistics')
    }
  }

  render() {
    const submit = async() => {
      let res = await AsyncStorage.getItem("Type")
      this.setState({type:JSON.parse(res)})
      console.log("test",this.state.type)
      if(this.state.type == "user" ){
        console.log("this is working")
        this.props.navigation.navigate('FormCustomer')
      }else
      if(this.state.type == "farmer"){
        this.props.navigation.navigate('FormFarmer')

      }else
      if(this.state.type == "logistics"){
        this.props.navigation.navigate('FormLogistics')

      }else
      if(this.state.type == "techexp"){
        this.props.navigation.navigate('FormTechExp')

      }
      else
      if(this.state.type == "agrilab"){
        this.props.navigation.navigate('FormAgriLabourer')

      }
    }
    if (!this.state.isLogin && this.state.user == '') {
      return <ActivityIndicator />
    }
    else if(this.state.isType){
      return <View style={{ flex: 1, justifyContent:'center', alignItems:'center' }}>
       <ImageBackground source={require('../assets/pexelsFelixMittermeier958076.png')} style={{ flex:1, position:'absolute', height:'100%', width:'100%' }}>
       <Text style={{textAlign:"center", fontSize:25, fontWeight:'bold', top:200}}> Choose:</Text>
       <View style={{ flex: 1, justifyContent:'center', alignItems:'center' }}>
              <TouchableOpacity 
              style={{backgroundColor:'#000', borderRadius:5, width:'40%', padding:10,}} 
              onPress={()=> this.onSelectType('farmer')}>
                <Text style={{color:'#fff', }}>Farmer</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity style={styles.screen2_rectangle4} onPress={()=> this.props.navigation.navigate('FormRetailer')}>
                <Text style={styles.screen2_retailer}>Retailer</Text>
              </TouchableOpacity> */}
              <TouchableOpacity 
              style={{backgroundColor:'#000', borderRadius:5, width:'40%', padding:10, marginTop:20}} 
              onPress={()=> this.onSelectType('user')}>
                <Text style={{color:'#fff', }}>Customer</Text>
                </TouchableOpacity>
                <TouchableOpacity 
              style={{backgroundColor:'#000', borderRadius:5, width:'40%', padding:10, marginTop:20}} 
              onPress={()=> this.onSelectType('logistics')}>
                <Text style={{color:'#fff', }}>Logistics</Text>
              </TouchableOpacity>
                <TouchableOpacity 
              style={{backgroundColor:'#000', borderRadius:5, width:'40%', padding:10, marginTop:20}} 
              onPress={()=> this.onSelectType('agrilab')}>
                <Text style={{color:'#fff', }}>Agricultural Labourer</Text>
                </TouchableOpacity>
                <TouchableOpacity 
              style={{backgroundColor:'#000', borderRadius:5, width:'40%', padding:10, marginTop:20}} 
              onPress={()=> this.onSelectType('techexp')}>
                <Text style={{color:'#fff', }}>Technical Expert</Text>
              </TouchableOpacity>
              </View>
            </ImageBackground>
            </View>
    }
    else {
      return (
        <View style={styles.screen1}>
          <ImageBackground source={require('../assets/pexelsPixabay.png')} style={styles.screen1_pexelsPixabay} >

            <Text style={styles.screen1_ouragrigroup}> OurAgriGroup</Text>
            <Image source={require('../assets/rectangle3.png')} style={styles.screen1_rectangle3} />
            {!this.state.isotp ?
              <TextInput style={styles.screen1_rectangle1} placeholder="Phone No" placeholderTextColor="#000" color="black"
              value={this.state.phone}
              onChangeText={(v) => this.setState({ phone: v })}>
            </TextInput>
            :
            <TextInput style={styles.screen1_rectangle1} placeholder="enter otp" placeholderTextColor="#000" color="black"
              value={this.state.otp}
              onChangeText={(v) => this.setState({ otp: v })}>
            </TextInput>}
            {!this.state.isotp ?
              <TouchableOpacity placeholder="Password" placeholderTextColor="grey" style={styles.screen1_rectangle2}
              onPress={() => this.signInWithPhoneNumber(this.state.phone)}>
              <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Verify</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity placeholder="Password" placeholderTextColor="grey" style={styles.screen1_rectangle2}
              onPress={() => this.signInWithOtp(this.state.otp)}>
              <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>Submit</Text>
            </TouchableOpacity>}

            <Image source={require('../assets/rectangle4.png')} style={styles.screen1_rectangle4} />
            <Text style={styles.screen1_or}>OR</Text>
            <View style={styles.screen1_rectangle5}>
              <TouchableOpacity style={styles.screen1_circledFacebookLogo} onPress={() => this.onFBLogin()}>
                <Image source={require('../assets/circledFacebookLogo.png')} style={{
                  "opacity": 100,
                  "width": 40,
                  "height": 40,
                }} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.screen1_search} onPress={() => this.onSignIn()}>
                <Image source={require('../assets/search.png')} style={{
                  "opacity": 100,
                  "width": 35,
                  "height": 35,
                }} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.screen1_rectangle6} onPress={() => submit()}>
              <Text style={styles.screen1_newUsersignUp}>New User/Signup</Text>
            </TouchableOpacity>

          </ImageBackground>
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
    login
  }, dispatch)
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Screen1)


const styles = StyleSheet.create({
  "screen1": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": "100%",
    "height": "100%",
    "left": 0,
    "top": 0,
    "justifyContent": 'center',
    "alignItems": "center"
  },
  "screen1_pexelsPixabay": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": "100%",
    "height": "100%",
    "top": 0
  },
  "screen1_rectangle1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "borderColor": "rgba(112, 112, 112, 1)",
    "borderWidth": 1,
    "borderRadius": 32,
    "width": 296,
    "height": 50,
    "left": "15%",
    "top": 267,
    "justifyContent": "center",
    "padding": 10

  },
  "screen1_rectangle2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "#000",
    "borderWidth": 1,
    "borderColor": "rgba(112, 112, 112, 1)",
    "borderRadius": 32,
    "width": 220,
    "height": 50,
    "left": "25%",
    "top": 361,
    "padding": 10,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "screen1_phoneNoemailId": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(18, 8, 8, 1)",
    "fontSize": 18,
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
    "width": 178,
    "height": 35,
    "left": 69,
    "top": 235
  },
  "screen1_password512e69eb": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(18, 8, 8, 1)",
    "fontSize": 18,
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
    "width": 91,
    "height": 25,
    "left": 66,
    "top": 333
  },


  "screen1_rectangle3": {
    "opacity": 0,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 45,
    "borderTopRightRadius": 45,
    "borderBottomLeftRadius": 45,
    "borderBottomRightRadius": 45,
    "width": 326,
    "height": 90,
    "left": 38,
    "top": 80
  },
  "screen1_rectangle4": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 35,
    "borderTopRightRadius": 35,
    "borderBottomLeftRadius": 35,
    "borderBottomRightRadius": 35,
    "width": 112,
    "height": 70,
    "left": 134,
    "top": 411
  },
  "screen1_ouragrigroup": {
    "opacity": 5,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "#228b22",
    "fontSize": 50,
    "fontWeight": "bold",
    "fontStyle": "normal",
    "fontFamily": "Myanmar Text",
    "textAlign": "right",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 334,
    "height": 213,
    "left": 75,
    "top": 90
  },
  "screen1_or": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(8, 8, 8, 1)",
    "fontSize": 26,
    "fontWeight": "bold",
    "fontStyle": "normal",
    "fontFamily": "Myanmar Text",
    "textAlign": "left",
    "width": 39,
    "height": 40,
    "left": 178,
    "top": 430
  },
  "screen1_twitterIconIos7": {
    "opacity": 100,
    "width": 40,
    "height": 40,
    "top": 4,
    "left": 20
  },
  "screen1_newInstagramLogo": {
    "opacity": 1,
    "position": "absolute",
    "borderTopLeftRadius": 19,
    "borderTopRightRadius": 19,
    "borderBottomLeftRadius": 19,
    "borderBottomRightRadius": 19,
    "width": 38,
    "height": 38,
    "left": 20,
    "top": 5

  },
  "screen1_circledFacebookLogo": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 39,
    "height": 39,
    "left": 35,
    "top": 5


  },
  "screen1_rectangle5": {
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "opacity": 0.7,
    "borderRadius": 25,
    "width": 200,
    "height": 50,
    "left": "13%",
    "top": 473,
    "flexDirection": "row"
  },
  "screen1_search": {
    "opacity": 1,
    "position": "absolute",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 35,
    "height": 35,
    "left": 130,
    "top": 8
  },
  "screen1_rectangle6": {
    "opacity": 1,
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "padding": 10,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 32,
    "borderTopRightRadius": 32,
    "borderBottomLeftRadius": 32,
    "borderBottomRightRadius": 32,
    "width": 296,
    "height": 50,
    "left": "15%",
    "top": 554
  },
  "screen1_rectangle7": {
    "opacity": 1,
    "padding": 10,
    "width": 296,
    "height": 50,
    "left": "15%",
    "top": "70%"
  },
  "screen1_newUsersignUp": {
    "opacity": 0.9100000262260437,
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(16, 177, 237, 1)",
    "fontSize": 24,
    "fontWeight": "bold",
    "fontStyle": "normal",
    "fontFamily": "Myanmar Text",
    "textAlign": "left",
    "width": 193,
    "height": 50,
    "left": "15%",
    "top": -4
  }
});