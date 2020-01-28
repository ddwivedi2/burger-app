import React, {useState, useEffect} from 'react';
import './index.scss';
import {Link} from "react-router-dom";

function OrderHistory() {

    let getOrders = () => {
        let orders;
        if(sessionStorage.getItem("orders") != null) {
            orders = JSON.parse(sessionStorage.getItem("orders"));
        }else{
            orders = [];
        }
        orders.sort((a, b) => (a.orderTime > b.orderTime) ? -1 : 1)
        return orders;
    };
    
    const [orders, setOrder] = useState(getOrders());

    return (
        <div className={'order-container'}>
            <Link to={`/`}><div className='banner'>Back to Menu</div></Link>
            {orders.map((order)=>{
                return(
                    <div className={'order-parent'}>
                        <div>{"Ordered by :" + order.name}</div>
                        <div>{"Total: " + order.total}</div>
                        <div>{"Time of Order: " + new Date(order.orderTime).toDateString()}</div>
                    </div>
                )
            })}
        </div>
    );
}

export default OrderHistory;
