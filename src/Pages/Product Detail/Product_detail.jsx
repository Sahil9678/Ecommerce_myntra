import React from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { common } from 'Redux/constants';
import './Product_detail.scss';

const Product_detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const location = useLocation();

    const handlechange = (change) => {
        dispatch({
            type: common.addproductdata,
            payload: change
        })
    }

    const productdata = location.state;

    return (
        <div className='Product_detail_container'>
            <div className='Product_detail'>
                <div className='card_container_heading heading1'>
                    <h4>Full Name</h4>
                    <div>{productdata.name}</div>
                </div>
                <div className='card_container_heading heading1'>
                    <h4>Brand</h4>
                    <div>{productdata.brand.name}</div>
                </div>
                <div className='card_container_heading heading1'>
                    <h4>Price</h4>
                    <div>{productdata.price.mrp}</div>
                </div>
                <div className='card_container_heading heading1'>
                    <h4>Rating</h4>
                    <div>{productdata.rating}</div>
                </div>
                <div className='card_container_heading favoritesong heading1'>
                    <h4>Information</h4>
                    <div>{productdata.info}</div>
                </div>
                <div className='card_container_image'>
                    <img src={productdata.defaultImage.src} />
                </div>
                <div className='product_detail_btn'>
                    <button onClick={() => { handlechange(productdata); }}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product_detail