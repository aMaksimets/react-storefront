import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link, useHistory}  from 'react-router-dom';
import {applyPromoCode, getCheckoutInfo, basketCheckout} from '../service'
import { removeProduct } from '../redux/actions';

function Checkout(props) {

  const history = useHistory();
  const {basket, checkout, promoCode} = props;
  const [code, setCode] = useState(promoCode);
  const [cardNum, setCardNum] = useState('');

  const removeToBasket = (product) => () => {
    props.removeProduct(product);
  }

  const onSubmitPromocode = (e) => {
    e.preventDefault();
    props.applyPromoCode(code);
  }

  const onBasketCheckout = (e) => {
    e.preventDefault();
    basketCheckout(basket.products, cardNum).then((res) => {
      console.log(res.msg)
      if(res.msg) {
        history.push('/success')
      } else {
        history.push('/failed')
      }
    })
  }

  return (
    <div className="main">
      <h2 className="page-title">Basket Checkout</h2>
      <div className="basket-box">
        <div className="container box-border">
          <div className="content item">
            <p>Basket</p>
          </div>
          <div className="quantity item">
            <p>{basket.quantity}</p>
          </div>
        </div>        
      </div>
      <Link className="goto" to="/">
        <div className="basket-box">
          <div className="container box-border">
            <div className="content item">
              <p>Continue Shopping</p>
            </div>
          </div>        
        </div>
      </Link>
        <table>
          <tbody>
            {basket.products && basket.products.map(product => (
              <tr key={product.sku}>
                <td>{product.name}</td>
                <td className="quantity">{product.quantity}</td>
                <td className="price">${(product.quantity * product.price).toFixed(2)}</td>
                <td>
                  <button className="box-border remove" onClick={removeToBasket(product)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="information">
          <form onSubmit={onSubmitPromocode}>
            <label>Enter Promo Code</label>
            <input type="text" value={code} onChange={(e) => setCode(e.target.value)} required />
            <button type="submit" className="box-border">Apply</button>
          </form>
          <table>
            <tbody>
              <tr>
                <td className="text">Sub Total</td>
                <td className="value">${checkout.subTotal}</td>
              </tr>
              <tr>
                <td className="text">Promotional discount amount</td>
                <td className="value">${checkout.discount}</td>
              </tr>
              <tr>
                <td className="text">Basket Total</td>
                <td className="value">${checkout.total}</td>
              </tr>
            </tbody>
          </table>
          <form onSubmit={onBasketCheckout}>
            <label>Please enter your credit card number</label>
            <input type="text" value={cardNum} onChange={(e) => setCardNum(e.target.value)} required />
            <button type="submit" className="box-border checkout" disabled={!basket.products.length}>Checkout</button>
          </form>          
          
        </div>        
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
    basket: state.basket,
    checkout: getCheckoutInfo(state),
    promoCode: state.checkout.promoCode
  }
}

const mapDispatchToProps = { removeProduct, applyPromoCode, basketCheckout };

export default connect(
  mapStateToProps, mapDispatchToProps
)(Checkout);