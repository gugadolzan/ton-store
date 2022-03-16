import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  buttonAddToCart: {
    alignItems: 'center',
    backgroundColor: '#00ad0c',
    borderRadius: 10,
    margin: 10,
    padding: 12,
    width: 240,
  },
  buttonMinus: {
    alignItems: 'center',
    backgroundColor: '#f92424',
    borderRadius: 30,
    height: 50,
    justifyContent: 'center',
    width: 50,
  },
  buttonPlus: {
    alignItems: 'center',
    backgroundColor: '#00ad0c',
    borderRadius: 30,
    height: 50,
    justifyContent: 'center',
    width: 50,
  },
  buttonsContainer: {
    alignItems: 'center',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    margin: 10,
    width: '50%',
  },
  buttonSign: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  noProductsInCart: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#00ad0c',
    textAlign: 'center',
  },
  productContainer: {
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    margin: 10,
  },
  productImage: {
    height: 200,
    resizeMode: 'contain',
    width: 100,
  },
  productInfo: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  productPrice: {
    alignSelf: 'flex-end',
    color: '#00ad0c',
    fontSize: 32,
    fontWeight: 'bold',
  },
  productsInCart: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  productsList: {
    flex: 1,
    marginBottom: 20,
    padding: 10,
    width: '100%',
  },
  productTitle: {
    fontSize: 24,
    marginBottom: 10,
  },
  quantity: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
