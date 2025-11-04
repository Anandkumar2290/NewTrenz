// Write your code here

import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalAmout = 0
      cartList.forEach(eachItem => {
        totalAmout += eachItem.price * eachItem.quantity
      })
      return (
        <div className="cart-summary-container">
          <h1 className="cart-summary-heading">
            Order Total:{' '}
            <span className="total-amount"> Rs {totalAmout}/- </span>
          </h1>
          <p className="cart-quantity">{cartList.length} Items in cart </p>
          <button type="button" className="checkout-button">
            {' '}
            Checkout{' '}
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
