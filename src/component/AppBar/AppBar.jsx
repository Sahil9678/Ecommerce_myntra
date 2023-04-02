// @ts-nocheck
import { Badge, IconButton } from '@mui/material';
import React from 'react';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Logo from '../../Assests/Logo.svg';
import './AppBar.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AppBar = ({ children }) => {

    const cartdata = useSelector(state => state.commonReducer.productdata);
    const navigate = useNavigate();
    return (
        <>
            <div className='AppBar_container'>
                <div className='AppBar_logoIcon_container' onClick={() => navigate('/')}>
                    <img src={Logo} className="AppBar_logoIcon" alt="Adminlogo" />
                </div>
                <div className='AppBar_social_container'>
                    <Badge color="secondary" variant={cartdata.length > 0 ? "dot" : "standard"}>
                        <IconButton onClick={() => navigate('/cart')}>
                            <ShoppingBagOutlinedIcon />
                        </IconButton>
                    </Badge>
                    <div className='ShoppingBagOutlined_heading'>Bag</div>
                </div>
            </div>
            {
                children
            }
        </>
    )
}

export default AppBar