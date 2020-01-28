import React, {useState, useEffect} from 'react';
import Burger from "../Burger";
import {globalBurgers} from "./burgerListC";
import {Link} from 'react-router-dom';
import './index.scss';

function BurgerList() {
    
    const [burgers, setBurgers] = useState([]);
    
    useEffect(()=>{
        setTimeout(()=>{
            setBurgers(globalBurgers);
        }, 20);
    }, []);
    
    return (
        <>
            <Link to={`/orders`}><div  className='banner'>Order History</div></Link>
            <div className="container">
                {
                    burgers.map((burger)=>{
                        return <Burger name={burger.name} imageURL={burger.imageURL} price={burger.price}/>
                    })
                }
            </div>
        </>
    );
}

export default BurgerList;
