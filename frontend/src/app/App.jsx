import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import CartScreen from '../screens/CartScreen.jsx';
import LoginScreen from '../screens/LoginScreen.jsx';
import RegisterScreen from '../screens/RegisterScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ShippingScreen from '../screens/ShippingScreen';
import PaymentScreen from '../screens/PaymentScreen';
import PlaceOrderScreen from '../screens/PlaceOrderScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path='/shipping' component={ShippingScreen} exact />
          <Route path='/payment' component={PaymentScreen} exact />
          <Route path='/placeorder' component={PlaceOrderScreen} exact />
          <Route path='/login' component={LoginScreen} exact />
          <Route path='/register' component={RegisterScreen} exact />
          <Route path='/profile' component={ProfileScreen} exact />
          <Route path='/product/:id' component={ProductScreen} exact />
          <Route path='/cart/:id?' component={CartScreen} exact />
          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
