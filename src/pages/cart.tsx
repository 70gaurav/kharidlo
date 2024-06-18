import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cart-item";
import { Link } from "react-router-dom";
const cartItems = [
  {
    productId: "asedr",
    photo: "https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg",
    name: "Macbook",
    price: 3000,
    quantity: 4,
    stock: 10,
  },
];
const subTotal = 4000;
const tax = Math.round(subTotal * 0.18);
const shippingCharges = 200;
const total = subTotal + tax + shippingCharges;
const discount = 400;
function Cart() {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setisValidCouponCode] = useState<Boolean>(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (Math.random() > 0.5) setisValidCouponCode(true);
      else setisValidCouponCode(false);
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
      setisValidCouponCode(false);
    };
  }, [couponCode]);
  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <CartItem key={index} cartItem={item} />
          ))
        ) : (
          <h1>No Items added</h1>
        )}
      </main>
      <aside>
        <p>Subtotal: ₹{subTotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>
          Discount: <em className="red"> - ₹{discount}</em>
        </p>
        <p>
          <b>Total: ₹{total}</b>
        </p>
        <input
          type="text"
          value={couponCode}
          placeholder="Coupon Code"
          onChange={(e) => setCouponCode(e.target.value)}
        />

        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon Code <VscError />
            </span>
          ))}

        {cartItems.length > 0 && <Link to="/shipping">Checkout</Link>}
      </aside>
    </div>
  );
}

export default Cart;
