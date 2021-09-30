import React, {Component, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  updateProductList,
  addcart,
  removecart,
  clearCart,
  myOrders,
} from '@store/actions/products';
import firestore from '@react-native-firebase/firestore';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class Screen3Catagories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      data: '',
      products: [],
    };
    this.ref = firestore().collection('products');
    this.getProducts = this.getProducts.bind(this);
  }

  async componentDidMount() {
    this.ref.onSnapshot(this.getProducts);
    let r = await AsyncStorage.getItem('Login');
    if (r) {
      var result = JSON.parse(r);
      this.state({data: result});
    }
  }

  async getProducts(querySnapshot) {
    const products = [];
    if (querySnapshot) {
      querySnapshot.forEach(async doc => {
        const {name, url, rate, id, count, qty, type} = doc.data();
        products.push({
          key: doc.id,
          name: name,
          url: url,
          rate: rate,
          id: id,
          count: count,
          qty: qty,
          type: type,
        });
      });
    }
    this.setState({products: products});
    console.log('products', products);
    this.props.updateProductList(products);
  }
  render() {
    return (
      <View>
        <ImageBackground
          source={require('../assets/screen3Catagories.png')}
          style={styles.screen2}>
          <Text style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold'}}>
            Categories
          </Text>
          <View style={{height: 500, width: 500}}>
            <TouchableOpacity
              style={styles.screen2_rectangle2}
              onPress={() =>
                this.props.navigation.navigate('ProductList', {
                  type: 'vegetable',
                })
              }>
              <Text style={styles.screen2_farmer}>Vegetables</Text>
              <Image
                source={require('../assets/pikpngcomvegitablesPng2506029.png')}
                style={{height: 110, width: 100, left: 80, top: -10}}></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.screen2_rectangle3}
              onPress={() =>
                this.props.navigation.navigate('ProductList', {type: 'fruit'})
              }>
              <Text style={styles.screen2_retailer}>Fruits</Text>
              <Image
                source={require('../assets/pikpngcomfruitsPng968573.png')}
                style={{height: 65, width: 120, left: 80, top: -10}}></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.screen2_rectangle4}
              onPress={() =>
                this.props.navigation.navigate('ProductList', {type: 'grains'})
              }>
              <Text style={styles.screen2_customer}>Wheat & Grains</Text>
              <Image
                source={require('../assets/pikpngcomgrainPng2387857.png')}
                style={{height: 65, width: 120, left: 90, top: -12}}></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.screen2_rectangle5}
              onPress={() =>
                this.props.navigation.navigate('ProductList', {type: 'pulses'})
              }>
              <Text style={styles.screen2_logisticsProvider}>Pulses </Text>
              <Image
                source={require('../assets/pulses.png')}
                style={{height: 70, width: 120, left: 80}}></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.screen2_rectangle6}
              onPress={() =>
                this.props.navigation.navigate('ProductList', {type: 'dairy'})
              }>
              <Text style={styles.screen2_expertAdvice}> Dairy Products</Text>
              <Image
                source={require('../assets/dairy.png')}
                style={{height: 75, width: 80, left: 90, top: -4}}></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.screen2_rectangle7}
              onPress={() =>
                this.props.navigation.navigate('ProductList', {type: 'meat'})
              }>
              <Text style={styles.screen2_agriculturalLabourer}>
                Egg & meat
              </Text>
              <Image
                source={require('../assets/eggs_meats.png')}
                style={{height: 70, width: 100, left: 90}}></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.screen2_rectangle8}
              onPress={() =>
                this.props.navigation.navigate('ProductList', {type: 'spices'})
              }>
              <Text style={styles.screen2_agriculturalLabourer}>Spices</Text>
              <Image
                source={require('../assets/spices.png')}
                style={{height: 70, width: 100, left: 90}}></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.screen2_rectangle9}
              onPress={() =>
                this.props.navigation.navigate('ProductList', {
                  type: 'oilseeds',
                })
              }>
              <Text style={styles.screen2_agriculturalLabourer}>Oilseeds</Text>
              <Image
                source={require('../assets/oilseeds.png')}
                style={{height: 70, width: 100, left: 90}}></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.screen2_rectangle10}
              onPress={() =>
                this.props.navigation.navigate('ProductList', {
                  type: 'plantation',
                })
              }>
              <Text style={styles.screen2_agriculturalLabourer}>
                Plantation
              </Text>
              <Image
                source={require('../assets/plant.png')}
                style={{height: 70, width: 100, left: 90}}></Image>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const mapStateToProps = (state, props) => ({
  productList: state.products,
  Cart: state.products,
  auth: state.auth,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateProductList,
      addcart,
      removecart,
      clearCart,
      myOrders,
    },
    dispatch,
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Screen3Catagories);

const styles = StyleSheet.create({
  screen2: {
    opacity: 1,
    position: 'relative',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
  },
  screen2_iconMaterialArrowback: {
    left: 20,
    top: 10,
  },
  screen2_component11: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 339,
    height: 63,
    left: 46,
    top: 106,
  },
  screen2_component11_rectangle1: {
    opacity: 1,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'rgba(112, 112, 112, 1)',
    borderRightWidth: 1,
    borderRightColor: 'rgba(112, 112, 112, 1)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(112, 112, 112, 1)',
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(112, 112, 112, 1)',
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
    borderBottomLeftRadius: 21,
    borderBottomRightRadius: 21,
    width: 200,
    height: 40,
    left: '100%',
    top: 15,
  },
  screen2_rectangle2: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(240, 236, 215, 1)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(112, 112, 112, 1)',
    borderRightWidth: 1,
    borderRightColor: 'rgba(112, 112, 112, 1)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(112, 112, 112, 1)',
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(112, 112, 112, 1)',
    borderRadius: 50,
    width: 310,
    height: 70,
    left: 50,
    top: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen2_rectangle3: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(240, 236, 215, 1)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(112, 112, 112, 1)',
    borderRightWidth: 1,
    borderRightColor: 'rgba(112, 112, 112, 1)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(112, 112, 112, 1)',
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(112, 112, 112, 1)',
    borderRadius: 50,
    width: 310,
    height: 70,
    left: 50,
    top: '27%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen2_rectangle4: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(240, 236, 215, 1)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(112, 112, 112, 1)',
    borderRightWidth: 1,
    borderRightColor: 'rgba(112, 112, 112, 1)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(112, 112, 112, 1)',
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(112, 112, 112, 1)',
    borderRadius: 50,
    width: 310,
    height: 70,
    left: 50,
    top: '44%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen2_rectangle5: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(240, 236, 215, 1)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(112, 112, 112, 1)',
    borderRightWidth: 1,
    borderRightColor: 'rgba(112, 112, 112, 1)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(112, 112, 112, 1)',
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(112, 112, 112, 1)',
    borderRadius: 50,
    width: 310,
    height: 70,
    left: 50,
    top: '61%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen2_rectangle6: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(240, 236, 215, 1)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(112, 112, 112, 1)',
    borderRightWidth: 1,
    borderRightColor: 'rgba(112, 112, 112, 1)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(112, 112, 112, 1)',
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(112, 112, 112, 1)',
    borderRadius: 50,
    width: 310,
    height: 70,
    left: 50,
    top: '78%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen2_rectangle7: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(240, 236, 215, 1)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(112, 112, 112, 1)',
    borderRightWidth: 1,
    borderRightColor: 'rgba(112, 112, 112, 1)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(112, 112, 112, 1)',
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(112, 112, 112, 1)',
    borderRadius: 50,
    width: 310,
    height: 70,
    left: 50,
    top: '95%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen2_rectangle8: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(240, 236, 215, 1)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(112, 112, 112, 1)',
    borderRightWidth: 1,
    borderRightColor: 'rgba(112, 112, 112, 1)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(112, 112, 112, 1)',
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(112, 112, 112, 1)',
    borderRadius: 50,
    width: 310,
    height: 70,
    left: 50,
    top: '112%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen2_rectangle9: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(240, 236, 215, 1)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(112, 112, 112, 1)',
    borderRightWidth: 1,
    borderRightColor: 'rgba(112, 112, 112, 1)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(112, 112, 112, 1)',
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(112, 112, 112, 1)',
    borderRadius: 50,
    width: 310,
    height: 70,
    left: 50,
    top: '129%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen2_rectangle10: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(240, 236, 215, 1)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(112, 112, 112, 1)',
    borderRightWidth: 1,
    borderRightColor: 'rgba(112, 112, 112, 1)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(112, 112, 112, 1)',
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(112, 112, 112, 1)',
    borderRadius: 50,
    width: 310,
    height: 70,
    left: 50,
    top: '146%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen2_component21: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    width: 127,
    height: 30,
    left: 146,
    top: 126,
  },
  screen2_component21_loginAs: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(8, 8, 8, 1)',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Myanmar Text',
    textAlign: 'center',
    width: 127,
    height: '100%',
  },
  screen2_farmer: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(8, 8, 8, 1)',
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Myanmar Text',
    textAlign: 'left',
    width: '100%',
    height: '100%',
    top: 15,
    left: 40,
  },
  screen2_customer: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(8, 8, 8, 1)',
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Myanmar Text',
    textAlign: 'left',
    width: '100%',
    height: '100%',
    top: 15,
    left: 20,
  },
  screen2_agriculturalLabourer: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(8, 8, 8, 1)',
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Myanmar Text',
    textAlign: 'left',
    width: '100%',
    height: '100%',
    top: 15,
    left: 40,
  },
  screen2_logisticsProvider: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(8, 8, 8, 1)',
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Myanmar Text',
    textAlign: 'left',
    width: '100%',
    height: '100%',
    top: 15,
    left: 40,
  },
  screen2_expertAdvice: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(8, 8, 8, 1)',
    fontSize: 21,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Myanmar Text',
    textAlign: 'left',
    width: '100%',
    height: '100%',
    top: 15,
    left: 3,
  },
  screen2_rectangle28: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(112, 112, 112, 1)',
    borderRightWidth: 1,
    borderRightColor: 'rgba(112, 112, 112, 1)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(112, 112, 112, 1)',
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(112, 112, 112, 1)',
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
    borderBottomLeftRadius: 21,
    borderBottomRightRadius: 21,
    width: 243,
    height: 41,
    left: 85,
    top: 15,
  },
  screen2_retailer: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(8, 8, 8, 1)',
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: 'Myanmar Text',
    textAlign: 'left',
    width: '100%',
    height: '100%',
    top: 15,
    left: 40,
  },
  screen2_homeIcon: {
    opacity: 1,
    borderTopLeftRadius: 43,
    borderTopRightRadius: 43,
    borderBottomLeftRadius: 43,
    borderBottomRightRadius: 43,
    width: 52,
    height: 52,
    left: '83%',
    top: 10,
    bottom: 10,
  },
  screen2_pexelsPixabay40514: {
    opacity: 0.18000000715255737,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 562,
    height: 421,
    left: -75,
    top: 252,
  },
  screen2_pexelsFelixMittermeier95807697422322: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'transparent',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 340,
    height: 491,
    left: 36,
    top: 230,
  },
  screen2_pexelsFelixMittermeier95807697422322_pexelsFelixMittermeier958076: {
    opacity: 0.14000000059604645,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 61,
    borderTopRightRadius: 61,
    borderBottomLeftRadius: 61,
    borderBottomRightRadius: 61,
    width: 340,
    height: 491,
    left: -1,
    top: -1,
  },
});
