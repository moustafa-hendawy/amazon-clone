
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import { Routes, Route } from 'react-router-dom'
import Login from './Login';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import Orders from './Orders';

const promise = loadStripe(
  'pk_live_51PWzP62KCPwGbn5nrb1SOdzD4MbYyFay08VWLkRM2HoofhTAsWcD2KN4VSlQHrrAmkQe6cPZ6YwQelVv3PoSY1Fz00C0TgCQaW'
);
function App() {
  const [{ }, dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('The Auth User IS : ', authUser)
      if (authUser) {
        //The User is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        //The User is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    });
  }, [])

  return (

    <div className="App">

      <Routes>
        <Route path='orders' element={<Orders />} />
        <Route path="/checkout" element={
          <>
            <Header />
            <Checkout />
          </>

        }
        />
        <Route path="/" element={
          <>
            <Header />
            <Home />
          </>
        } />
        <Route path='/login' element={<Login />} />

        <Route path='/payment' element={
          <>
            <Header />
            <Elements stripe={promise}>
              <Payment />

            </Elements>
          </>
        } />

      </Routes>
    </div>



  );
}




export default App;









