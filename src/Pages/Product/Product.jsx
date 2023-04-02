// @ts-nocheck
import SideBar from 'component/SideBar/SideBar';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { common } from 'Redux/constants';
import store from 'Redux/store';
import Cardscomp from '../../component/Card Component/Cardscomp';
import sampledata from '../../sampledata';
import './Product.scss';

const Product = () => {

    const dispatch = useDispatch();
    const productlistInfo = useSelector(state => state.commonReducer.productlist);


    const handlechange = (change) => {
        dispatch({
            type: common.addproductdata,
            payload: change
        })
    }

    console.log('filtereddata1 productlistInfo1 -', productlistInfo)


    return (
        <SideBar>
            <div className='productlist_container'>
                <div className='productlist'>
                    {
                        sampledata.length > 0 && (productlistInfo?.length > 0 ? productlistInfo : sampledata).map(elem => {
                            return (
                                <Cardscomp elem={elem} handlechange={handlechange} cardtype={'productlist'} />
                            )
                        })
                    }
                </div>
            </div>
        </SideBar>
    )
}

export default Product;