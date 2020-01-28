import React, {useState, useEffect} from 'react';

function BurgerCustomization({name, price, condiments, onClose}) {
    
    let customList = condiments.map((condiment)=>{
        return {
            ...condiment,
            count: 0
        }
    });
    
    const [condimentsMap, setCondimentsMap] = useState(condiments.reduce((o, condiment) => {
        o[condiment.name] = 0;
        return o;
    }, {}));
    
    const [nameOrderer, setName] = useState('');
    
    let handleIncrement = (condiment)=> {
        let count = condimentsMap[condiment.name] + 1;
        let newCondimentsMap = {...condimentsMap};
        newCondimentsMap[condiment.name] = count;
        setCondimentsMap(newCondimentsMap);
    };
    
    let handleDecrement = (condiment)=> {
        let count = condimentsMap[condiment.name] - 1;
        let newCondimentsMap = {...condimentsMap};
        newCondimentsMap[condiment.name] = count;
        setCondimentsMap(newCondimentsMap);
    };
    
    let getTotal = ()=>{
        let condiTotal = condiments.reduce((o, condiment) => {
            return o + (condimentsMap[condiment.name] * condiment.price);
        }, 0);
        return parseInt(price) + condiTotal;
    };
    
    let checkOut = () => {
        const total = getTotal();
        let orders;
        if(sessionStorage.getItem("orders") != null) {
            orders = JSON.parse(sessionStorage.getItem("orders"));
        }else{
            orders = [];
        }
        let newOrders = [...orders, {name: nameOrderer, total: total, orderTime: Date.now()}];
        sessionStorage.setItem("orders", JSON.stringify(newOrders));
        onClose();
    };
    
    let closeCustom = ()=> {
        onClose();
    };
    
    return (
        <div className="cust-container">
            <div>Name of Customer: <input onChange={(e)=> setName(e.target.value)} type={"text"}/></div>
            <div>Condiments</div>
            {
                customList.map((condiment)=>{
                    return (
                        <div>
                            <span>
                                {condiment.name}
                            </span>
                            <span>
                                {' Price: ' + condiment.price}
                            </span>
                            <span>
                                {' Quantity: ' + condimentsMap[condiment.name]}
                            </span>
                            <button onClick={()=>handleIncrement(condiment)}>
                                Add
                            </button>
                            {   condimentsMap[condiment.name] > 0 && 
                                <button onClick={() => handleDecrement(condiment)}>
                                    Remove
                                </button>
                            }
                        </div>
                    );
                })
            }
            <div>
                Total Cost: {getTotal()}
            </div>
            <button disabled={nameOrderer.length === 0} onClick={checkOut}>Check out</button>
            <button onClick={closeCustom}>Cancel</button>
        </div>
    );
}

export default BurgerCustomization;
