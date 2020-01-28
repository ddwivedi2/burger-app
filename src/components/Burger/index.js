import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import { modalStyles } from '../BurgerCustomization/modalConstants';
import {condiments} from "./condiments";
import './index.scss';
import BurgerCustomization from "../BurgerCustomization";

function Burger({name, imageURL, price}) {
    
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="burger-container">
            <Modal
                isOpen={showModal}
                ariaHideApp={false}
                style={modalStyles}
            >
                <BurgerCustomization onClose={()=>setShowModal(false)} name={name} price={price} condiments={condiments}/>
            </Modal>
            <div>{name}</div>
            <img src={imageURL}/>
            <div>Price:{' ' + price}</div>
            <div className='alert-bar' onClick={()=> setShowModal(true)}>Customize and Order</div>
        </div>
    );
}

export default Burger;
