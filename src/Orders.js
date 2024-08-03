
import React, { useEffect, useState } from 'react'
import './Orders.css'
import { useStateValue, useAuth } from './StateProvider'
import { db } from './firebase';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import Order from './Order';
import './Orders.css';

function Orders() {
    const { user } = useAuth();
    // console.log("User mmm", user);
    const [{ basket }, dispatch] = useStateValue()
    const [orders, setOrders] = useState([]);
    // console.log("Orders", orders);
    useEffect(() => {
        if (user || !user) {
            // db
            // .collection('users')
            // .doc(user?.uid)
            // .collection('orders')
            // .orderBy('created', 'desc')
            // .onSnapshot(() => {
            //     setOrders(snapshot.docs.map((doc) => ({
            //         id: doc.id,
            //         data: doc.data()
            //     })))
            // })
            const collRef = collection(db, "users", user?.uid, "orders");
            const orderedRef = query(collRef, orderBy("created", "desc"));
            onSnapshot(orderedRef, (querySnapshot) => {
                setOrders(
                    querySnapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data()
                    }))
                );
            });
            console.log("Orders", orders);
        } else {
            setOrders([])
        }
    }, [user])


    return (
        <div className='orders'>
            <h1>Your Orders</h1>
            {orders?.map((order) => (
                <Order order={order} />
            ))}
        </div>
    )
}

export default Orders
