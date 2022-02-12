import React from 'react';
import {Link}  from 'react-router-dom';

export default function Success () {
    return (
        <div className="main">
            <h2 className="page-title">Thank you, your order is being processed.</h2>
            <Link to="/">
                <div className="basket-box">
                <div className="container box-border">
                    <div className="content item">
                    <p>Continue Shipping</p>
                    </div>
                </div>        
                </div>
            </Link>
        </div>
    )
}