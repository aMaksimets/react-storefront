import React from 'react';
import {Link}  from 'react-router-dom';

export default function Failed() {
    return (
        <div className="main">
            <h2 className="page-title">Sorry, there was a problem with your order, please call customer services on XXXXXXXXX.</h2>
            <Link to="/checkout">
                <div className="basket-box">
                <div className="container box-border">
                    <div className="content item">
                    <p>Back to Basket</p>
                    </div>
                </div>        
                </div>
            </Link>
        </div>
    )
}