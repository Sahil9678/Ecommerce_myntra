// @ts-nocheck
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { common } from 'Redux/constants';
import sampledata from 'sampledata';
import './SideBar.scss'

const SideBar = ({ children }) => {
    const dispatch = useDispatch();
    const [filtereddata, setfiltereddata] = useState({ price: 10000, color: '', rating: 5 })
    const [message, setmessage] = useState('');


    const handlefilter = (data) => {
        setfiltereddata(prev => ({ ...prev, ...data }))
    }
    const handlesubmit = () => {
        let updateprodlist = sampledata;

        if (filtereddata.color !== '') {
            updateprodlist = updateprodlist.filter(elem => elem.baseColour === filtereddata.color)
        }
        if (filtereddata.price !== 10000) {
            updateprodlist = updateprodlist.filter(elem => elem.price.mrp <= filtereddata.price)
        }
        if (filtereddata.rating !== 5) {
            updateprodlist = updateprodlist.filter(elem => elem.rating <= filtereddata.rating)
        }

        dispatch({
            type: common.updateproductlist,
            payload: updateprodlist
        })
        if (updateprodlist.length === 0) {
            setmessage('No Data to show')
        } else {
            setmessage('')
        }
    }

    return (
        <div className='sidebar_container'>
            <div className='sidebar'>
                <h3>
                    Filter
                </h3>
                <div className='sidebar_filter_container sidebar_price'>
                    <label>Price</label>
                    <div className='sidebar_filter'>
                        0
                        <input type="range" className='sidebar_range' id="Price" name="Price" defaultValue={"10000"} min="0" max="10000" onChange={(e) => handlefilter({ price: Number(e.target.value) })} />
                        10000
                        <div class="range-value" id="rangeV"><span>{filtereddata.price > 0 ? filtereddata.price : ''}</span></div>
                    </div>
                </div>
                <div className='sidebar_filter_container sidebar_color'>
                    <label>Color</label>
                    <select className='sidebar_filter_dropdown' onChange={(e) => handlefilter({ color: e.target.value })}>
                        <option value="none" selected disabled hidden>Select an Option</option>
                        <option value="">none</option>
                        {
                            sampledata.length > 0 && sampledata.map(elem => {
                                return (
                                    <option value={elem.baseColour}>{elem.baseColour}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className='sidebar_filter_container sidebar_rating'>
                    <label>Rating</label>
                    <div className='sidebar_filter'>
                        0
                        <input type="range" id="Rating" name="Rating" min="0" max="5" onChange={(e) => handlefilter({ rating: Number(e.target.value) })} />
                        5
                        <div class="range-value" id="rangeV"><span>{filtereddata.rating > 0 ? filtereddata.rating : ''}</span></div>
                    </div>
                </div>
                <div>
                    <input type="button" onClick={handlesubmit} title='Filter' value="Filter" />
                </div>
                {
                    message
                }
            </div>
            {
                children
            }
        </div>
    )
}

export default SideBar