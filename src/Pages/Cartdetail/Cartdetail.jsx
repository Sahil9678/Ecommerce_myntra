import Cardscomp from 'component/Card Component/Cardscomp';
import React from 'react';
import { useSelector } from 'react-redux';
import './Cartdetail.scss';

const Cartdetail = () => {
    // @ts-ignore
    const cartdata = useSelector(state => state.commonReducer.productdata);

    const addedproductObj = cartdata.reduce((acc, curr) => {
        if (curr.id in acc) {
            acc[curr.id] = { ...curr, count: acc[curr.id].count + 1 };
        } else {
            acc[curr.id] = { ...curr, count: 1 };
        }
        return acc;

    }, {})


    return (
        <div className='cartdetail_container'>
            <div className='cartdetail_list'>
                {
                    cartdata.length > 0 && Object.entries(addedproductObj).map(([key, value]) => {
                        return (
                            <Cardscomp elem={value} handlechange="" cardtype={'cart'} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cartdetail;
