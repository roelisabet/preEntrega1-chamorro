import {FaShoppingCart} from "react-icons/fa";

const CartWidget =() => {
    return(
        <div className="cart">
            <button className="cart-icon">
                <FaShoppingCart/>
            </button>
            <span className="cart-count">3</span>

        </div>
    )
}
export default CartWidget