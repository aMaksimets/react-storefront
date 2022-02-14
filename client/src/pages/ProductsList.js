import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Link}  from 'react-router-dom';
import { addToBasket } from '../redux/actions';
import { getAllProducts } from '../service'

function ProductsList(props) {

  const {products, basket} = props;

  useEffect(() => {
    props.getAllProducts();
  }, [])

  const handleAddBasket = (product) => () => {
    props.addToBasket(product)
  }

  return (
    <div className="main">
      <h2 className="page-title">Products List</h2>
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
      
      <table>
          <tbody>
              {products.data && products.data.map(product => (
                <tr key={product.sku}>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>
                    <button className="box-border" onClick={handleAddBasket(product)} >Add to basket</button>
                  </td>
              </tr>
              ))}
          </tbody>
      </table>
      <Link to="/checkout">
        <div className="basket-box">
          <div className="container box-border">
            <div className="content item">
              <p>Proceed to checkout</p>
            </div>
          </div>        
        </div>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    basket: state.basket
  }
}

const mapDispatchToProps = { getAllProducts, addToBasket };

export default connect(
  mapStateToProps, mapDispatchToProps
)(ProductsList);