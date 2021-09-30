import React, { Component, useEffect, useState } from 'react';
import {  View ,Text,Image} from 'react-native';
import { createDrawerNavigator,  DrawerContentScrollView,DrawerItemList,DrawerItem, } from '@react-navigation/drawer';
import MainStackNavigator from './stackNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
const[data, setData] = useState('')
const[type, setType] = useState('')
useEffect(() => {
  async function  onGetData() {
    let r = await AsyncStorage.getItem("Login")
    if(r){
    var result = JSON.parse(r)
    setData(result)
    }
    let types = await AsyncStorage.getItem("Type")
    setType(JSON.parse(types))
  }

onGetData()



},[])
    const CustomDrawerContent =  (props)=> {
     
    console.log("dara", data)
        return (
            <DrawerContentScrollView {...props}>
              <DrawerItemList {...props} />
              <View style={{height:120, width:"100%", marginTop:20, justifyContent:"center", alignItems:"center"}}>
              {data.user && data.user.photo ? <Image source={{uri:data.user.photo}} resizeMode="cover" style={{ height: 80, width: 80, borderRadius:40}}></Image> : null }
        {data.user && data.user.name ? <Text style={{ fontSize:20,}}>{data.user.name}</Text>: null }
              </View>
              <DrawerItem
              icon=""
              labelStyle={{fontSize:18}}
                label="Home"
                onPress={() => props.navigation.navigate('Screen3Categories')}
              />
              <DrawerItem
              icon=""
              labelStyle={{fontSize:18}}
                label="Profile"
                onPress={() => props.navigation.navigate('Account')}
              />
              <DrawerItem
              icon=""
              labelStyle={{fontSize:18}}
                label="My Orders"
                onPress={() => props.navigation.navigate('MyOrders')}
              />
              {type == 'user' ? <DrawerItem
              icon=""
              labelStyle={{fontSize:18}}
                label="Feedback"
                onPress={() => props.navigation.navigate('Feedback')}
              /> : null }
              {type == 'farmer' ? <DrawerItem
              icon=""
              labelStyle={{fontSize:18}}
                label="Logistics Provider"
                onPress={() => props.navigation.navigate('Logistics')}
              /> : null }
              {type == 'farmer' ? <DrawerItem
              icon=""
              labelStyle={{fontSize:18}}
                label="Technical Expert"
                onPress={() => props.navigation.navigate('TechExp')}
              /> : null }
              {type == 'farmer' ? <DrawerItem
              icon=""
              labelStyle={{fontSize:18}}
                label="Agricultural Labourer"
                onPress={() => props.navigation.navigate('AgriLab')}
              /> : null }
              <DrawerItem
              icon=""
              labelStyle={{fontSize:18}}
                label="Contact Us"
                onPress={() => props.navigation.navigate('Contact')}
              />
              <DrawerItem
                labelStyle={{fontSize:18}}
                label="Log out"
                onPress={async () => {
                   await AsyncStorage.removeItem("Login")
                   await GoogleSignin.signOut()
                   props.navigation.navigate('Screen1')
                }}
              />
         
            </DrawerContentScrollView>
          );
        }
      return (

      <Drawer.Navigator initialRouteName="Screen2" drawerContent={props => <CustomDrawerContent {...props} />} icon="menu" fontSize={30} >
        <Drawer.Screen name="Our Agri" component={MainStackNavigator} 
        />
      </Drawer.Navigator>

  )}
export default DrawerNavigator;
