import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Cardscomp.scss';

const Cardscomp = ({ elem, handlechange, cardtype }) => {
    const navigate = useNavigate();

    return (
        <div className='card_container'>
            <div onClick={() => navigate(`/product-detail/${elem.id}`, { state: elem })}>
                <div className='card_container_heading heading1'>
                    <h4>Full Name</h4>
                    <div>{elem.name}</div>
                </div>
                <div className='card_container_heading heading1'>
                    <h4>Brand</h4>
                    <div>{elem.brand.name}</div>
                </div>
                <div className='card_container_heading heading1'>
                    <h4>Price</h4>
                    <div>{elem.price.mrp}</div>
                </div>
                <div className='card_container_heading heading1'>
                    <h4>Rating</h4>
                    <div>{elem.rating}</div>
                </div>
                <div className='card_container_heading favoritesong heading1'>
                    <h4>Information</h4>
                    <div>{elem.info}</div>
                </div>
                <div className='card_container_image'>
                    <img src={elem.defaultImage.src} />
                </div>
            </div>
            <div className='card_container_heading_btn'>
                {
                    cardtype === 'cart' ? <><h4>No of item: </h4>{elem.count}</> :
                        <button onClick={() => { handlechange(elem); }}>Add to cart</button>
                }
            </div>
        </div>
    )
}

export default Cardscomp;