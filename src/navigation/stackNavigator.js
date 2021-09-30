import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import Bill from "../screens/bill";
import FormAgriLabourer from "../screens/formAgriLabourer"
import FormCustomer from "../screens/formCustomer"
import FormFarmer from "../screens/formFarmer"
import FormLogistics from "../screens/formLogistics"
import FormRetailer from "../screens/formRetailer"
import FormTechExp from "../screens/formTechExp"
import Payment from "../screens/payment"
import ProductList from "../screens/productList"
import Screen1 from "../screens/screen1"
import Screen2 from "../screens/screen2"
import MyOrders from "../screens/myOrders"
import Screen3Categories from "../screens/screen3Catagories"
import Track from "../screens/track"
import Cart from "../screens/cart"
import FarmerProd from "../screens/farmerprod"
import Screen3 from "../screens/screen3"
import Account from "../screens/account"
import Bag from "../screens/bag";
import FarmerCateg from '../screens/farmerCateg'
import Feedback from '../screens/Feedback'
import Contact from '../screens/contact'
import Logistics from '../screens/logistics'
import AgriLab from '../screens/Agrilab'
import TechExp from '../screens/TechExp'




const Stack = createStackNavigator();
const MainStackNavigator = () => {
    return(
            <Stack.Navigator headerMode={true} initialRouteName="Screen1">
            <Stack.Screen name="Screen1" component={Screen1}/>
            <Stack.Screen name="Screen2" component={Screen2} headerMode={true}/>
            <Stack.Screen name="Screen3Categories" component={Screen3Categories} />
            <Stack.Screen name="FormFarmer" component={FormFarmer}/>
            <Stack.Screen name="FormAgriLabourer" component={FormAgriLabourer}/>           
            <Stack.Screen name="FormCustomer" component={FormCustomer}/>  
            <Stack.Screen name="FormLogistics" component={FormLogistics}/>           
            <Stack.Screen name="FormRetailer" component={FormRetailer}/>           
            <Stack.Screen name="FormTechExp" component={FormTechExp}/> 
            <Stack.Screen name="Bill" component={Bill}/>     
            <Stack.Screen name="Cart" component={Cart}/>      
            <Stack.Screen name="MyOrders" component={MyOrders}/>            
            <Stack.Screen name="Payment" component={Payment}/>  
            <Stack.Screen name="ProductList" component={ProductList}/> 
            <Stack.Screen name="Track" component={Track}/>  
            <Stack.Screen name="FarmerProd" component={FarmerProd}/>                     
            <Stack.Screen name="Screen3" component={Screen3}/>                     
            <Stack.Screen name="Account" component={Account}/>   
            <Stack.Screen name="Bag" component={Bag}/>     
            <Stack.Screen name="FarmerCateg" component={FarmerCateg}/>                  
            <Stack.Screen name="Feedback" component={Feedback}/>                  
            <Stack.Screen name="Contact" component={Contact}/>                  
            <Stack.Screen name="Logistics" component={Logistics}/>                  
            <Stack.Screen name="AgriLab" component={AgriLab}/>                  
            <Stack.Screen name="TechExp" component={TechExp}/>                  

            </Stack.Navigator>
        
    )
}

export default MainStackNavigator;