import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import "../styles/Cart.css";
import { CiTrash, CiShoppingCart } from "react-icons/ci";
import { FaShieldAlt } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
const Cart = () => {
  const {
    cartItems,
    removeItem: contextRemoveItem,
    updateQuantity: contextUpdateQuantity,
    clearCart: contextClearCart,
  } = useCart();

  const [shippingMethod, setShippingMethod] = useState("standard");
  const [promoCode, setPromoCode] = useState("");
  const [promoMessage, setPromoMessage] = useState("");
  const [promoValid, setPromoValid] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [showRemoveConfirm, setShowRemoveConfirm] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);

  const notifySuccess = (Mensagem) =>
    toast.success(Mensagem, {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const handleCheckout = () => {
    // Implement your checkout logic here
    // For now, let's just log the cart items
    console.log("Cart Items:", cartItems);

    // emitir mensagem de sucesso
    notifySuccess("Compra realizada com sucesso!");

    // zerar carrinho
    contextClearCart();
  };

  // Cart operations
  const removeItem = () => {
    if (itemToRemove !== null) {
      contextRemoveItem(itemToRemove);
      notifySuccess("Item removido com sucesso!");
    }
    setShowRemoveConfirm(false);
    setItemToRemove(null);
  };

  const confirmClearCart = () => setShowClearConfirm(true);
  const confirmRemoveItem = (id) => {
    setItemToRemove(id);
    setShowRemoveConfirm(true);
  };
  const clearCart = () => {
    contextClearCart();
    setShowClearConfirm(false);
  };

  const incrementQuantity = (id, qty) => contextUpdateQuantity(id, qty + 1);
  const decrementQuantity = (id, qty) => {
    if (qty > 1) contextUpdateQuantity(id, qty - 1);
  };

  const handleQuantityChange = (id, value) => {
    const newQuantity = parseInt(value) || 1;
    contextUpdateQuantity(id, Math.max(1, newQuantity));
  };

  const applyPromoCode = () => {
    const promoCodes = {
      SAVE10: { discount: 0.1, message: "10% discount applied!" },
      FREESHIP: {
        discount: 0,
        message: "Free shipping applied!",
        freeShipping: true,
      },
      WELCOME20: { discount: 0.2, message: "20% discount applied!" },
    };

    if (promoCode.trim() === "") {
      setPromoMessage("Please enter a promo code");
      setPromoValid(false);
      return;
    }

    const promo = promoCodes[promoCode.toUpperCase()];
    if (promo) {
      setPromoValid(true);
      setPromoMessage(promo.message);
      notifySuccess(promo.message);

      if (promo.discount) {
        setDiscount(subtotal * promo.discount);
      }

      if (promo.freeShipping) {
        setShippingMethod("standard");
      }
    } else {
      setPromoValid(false);
      setPromoMessage("Invalid promo code");
      setDiscount(0);
    }
  };

  // Order summary calculations
  const subtotal = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  const calculateTax = () => (subtotal - discount) * 0.075;
  const tax = calculateTax();

  const shippingCost =
    { standard: 5, express: 15, overnight: 25 }[shippingMethod] || 5;

  const total = subtotal + shippingCost + tax - discount;

  return (
    <div className="bg-light min-vh-100">
      <ToastContainer />
      <div className="container py-4">
        {/* Empty Cart Message */}
        {cartItems.length === 0 && (
          <div className="card text-center p-4 mb-4 d-flflex align-items-center justify-content-center">
            <CiShoppingCart className="fas fa-shopping-cart text-muted fs-1 mb-3" />
            <p className="fs-5 text-muted">Your cart is empty</p>
            <Link to="/produtos" className="btn btn-primary mt-3 px-4 py-2">
              Continue Shopping
            </Link>
          </div>
        )}

        {/* Mobile View */}
        <div className="d-block d-sm-none">
          {cartItems.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div className="d-flex">
                    <img
                      src={item.image || "https://via.placeholder.com/80"}
                      alt="Product"
                      className="img-thumbnail me-3"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <div>
                      <h5 className="card-title mb-0">{item.name}</h5>
                    </div>
                  </div>
                  <button
                    onClick={() => confirmRemoveItem(item.id)}
                    className="btn btn-link text-danger p-0"
                  >
                    <CiTrash size={24} />
                  </button>
                </div>

                <div className="row g-2">
                  <div className="col-6">
                    <span className="text-muted">Quantity:</span>
                    <div className="input-group input-group-sm">
                      <span
                        className="btn btn-outline-secondary"
                        style={{ fontSize: "1rem" }}
                        onClick={() =>
                          decrementQuantity(item.id, item.quantity)
                        }
                      >
                        -
                      </span>

                      <input
                        type="number"
                        className="form-control text-center"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(item.id, e.target.value)
                        }
                        min="1"
                      />
                      <span
                        className="btn btn-outline-secondary"
                        style={{ fontSize: "1rem" }}
                        onClick={() =>
                          incrementQuantity(item.id, item.quantity)
                        }
                      >
                        +
                      </span>
                    </div>
                  </div>

                  <div className="col-6">
                    <span className="text-muted">Price:</span>
                    <div className="fw-medium">
                      R${Number(item.price).toFixed(2)}
                    </div>
                  </div>

                  <div className="col-6">
                    <span className="text-muted">Total:</span>
                    <div className="fw-bold">
                      R${(Number(item.price) * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet/Desktop View */}
        {cartItems.length > 0 && (
          <div className="d-none d-sm-block">
            <div className="table-responsive">
              <table className="table table-hover align-middle bg-white">
                <thead>
                  <tr className="table-light">
                    <th scope="col" className="ps-4">
                      Product
                    </th>
                    <th scope="col" className="text-center">
                      Quantity
                    </th>
                    <th scope="col" className="text-end">
                      Price
                    </th>
                    <th scope="col" className="text-end">
                      Total
                    </th>
                    <th scope="col" className="text-center pe-4">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="ps-4">
                        <div className="d-flex align-items-center">
                          <img
                            src={item.image || "https://via.placeholder.com/80"}
                            alt="Product"
                            className="img-thumbnail me-3"
                            style={{ width: "80px", height: "80px" }}
                          />
                          <div>
                            <h6 className="mb-0">{item.name}</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center ">
                          <div
                            className="d-flex  align-items-center gap-2"
                            style={{ width: "120px", height: "40px" }}
                          >
                            <span
                              className="btn btn-outline-secondary"
                              style={{ fontSize: "1rem" }}
                              onClick={() =>
                                decrementQuantity(item.id, item.quantity)
                              }
                            >
                              -
                            </span>
                            <input
                              type="number"
                              className="form-control text-center"
                              style={{ width: "60px" }}
                              value={item.quantity}
                              onChange={(e) =>
                                handleQuantityChange(item.id, e.target.value)
                              }
                              min="1"
                            />

                            <span
                              className="btn btn-outline-secondary"
                              style={{ fontSize: "1rem" }}
                              onClick={() =>
                                incrementQuantity(item.id, item.quantity)
                              }
                            >
                              +
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="text-end">
                        <span className="fw-medium">
                          R${Number(item.price).toFixed(2)}
                        </span>
                      </td>
                      <td className="text-end">
                        <span className="fw-bold">
                          R${(Number(item.price) * item.quantity).toFixed(2)}
                        </span>
                      </td>
                      <td className="text-center pe-4">
                        <button
                          onClick={() => confirmRemoveItem(item.id)}
                          className="btn btn-link text-danger p-0"
                        >
                          <CiTrash size={24} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Order Summary Section */}
        {cartItems.length > 0 && (
          <div className="row mt-4 g-4">
            <div className="col-lg-8">
              {/* Shipping Options */}
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title mb-4">Shipping Options</h5>
                  <div className="vstack gap-3">
                    <div className="form-check border rounded p-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="shippingMethod"
                        id="standardShipping"
                        value="standard"
                        checked={shippingMethod === "standard"}
                        onChange={() => setShippingMethod("standard")}
                      />
                      <label
                        className="form-check-label d-flex justify-content-between w-100"
                        htmlFor="standardShipping"
                      >
                        <div>
                          <div className="fw-medium">Product Key</div>
                          <div className="text-muted small">
                            Resgate uma chave exclusiva imediatamente
                          </div>
                        </div>
                        <div className="fw-medium">R$5.00</div>
                      </label>
                    </div>

                    <div className="form-check border rounded p-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="shippingMethod"
                        id="expressShipping"
                        value="express"
                        checked={shippingMethod === "express"}
                        onChange={() => setShippingMethod("express")}
                      />
                      <label
                        className="form-check-label d-flex justify-content-between w-100"
                        htmlFor="expressShipping"
                      >
                        <div>
                          <div className="fw-medium">Express</div>
                          <div className="text-muted small">
                            Entrega em 2-3 dias - Midia física
                          </div>
                        </div>
                        <div className="fw-medium">R$15.00</div>
                      </label>
                    </div>

                    <div className="form-check border rounded p-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="shippingMethod"
                        id="overnightShipping"
                        value="overnight"
                        checked={shippingMethod === "overnight"}
                        onChange={() => setShippingMethod("overnight")}
                      />
                      <label
                        className="form-check-label d-flex justify-content-between w-100"
                        htmlFor="overnightShipping"
                      >
                        <div>
                          <div className="fw-medium">Standard</div>
                          <div className="text-muted small">
                            Entrega em 5-7 dias - Midia física
                          </div>
                        </div>
                        <div className="fw-medium">R$25.00</div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Promo Code */}
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title mb-4">Promo Code</h5>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={applyPromoCode}
                    >
                      Apply
                    </button>
                  </div>
                  {promoMessage && (
                    <div
                      className={`mt-2 small R${
                        promoValid ? "text-success" : "text-danger"
                      }`}
                    >
                      {promoMessage}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Order Total */}
            <div className="col-lg-4">
              <div className="card sticky-top" style={{ top: "20px" }}>
                <div className="card-body">
                  <h5 className="card-title mb-4">Order Summary</h5>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item d-flex justify-content-between">
                      <span>Subtotal</span>
                      <span>R${subtotal.toFixed(2)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                      <span>Shipping</span>
                      <span>R${shippingCost.toFixed(2)}</span>
                    </li>
                    {discount > 0 && (
                      <li className="list-group-item d-flex justify-content-between text-success">
                        <span>Discount</span>
                        <span>-R${discount.toFixed(2)}</span>
                      </li>
                    )}
                    <li className="list-group-item d-flex justify-content-between">
                      <span>Tax</span>
                      <span>R${tax.toFixed(2)}</span>
                    </li>
                    <li className="list-group-item pt-3 d-flex justify-content-between fw-bold fs-5">
                      <span>Total</span>
                      <span>R${total.toFixed(2)}</span>
                    </li>
                  </ul>
                  {/* <Link
                    to="/checkout"
                    className={`btn btn-primary w-100 py-3 mb-3 R${
                      cartItems.length === 0 ? "disabled" : ""
                    }`}
                  > */}
                  <button
                    className="btn btn-primary w-100 py-3 mb-3"
                    onClick={() => handleCheckout()}
                  >
                    Comprar
                  </button>
                  {/* </Link> */}
                  <div className="text-center text-muted small mb-3">
                    <FaShieldAlt className="me-2" />
                    Secure Checkout
                  </div>
                  <div className="d-flex justify-content-center gap-3">
                    <i className="fab fa-cc-visa fs-4 text-primary"></i>
                    <i className="fab fa-cc-mastercard fs-4 text-danger"></i>
                    <i className="fab fa-cc-amex fs-4 text-info"></i>
                    <i className="fab fa-cc-paypal fs-4 text-primary"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Continue Shopping */}
        {cartItems.length > 0 && (
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3 mt-4">
            <Link
              to="/produtos"
              className="btn btn-link text-decoration-none d-flex align-items-center"
            >
              <CiShoppingCart size={24} className="me-2" />
              Continue Shopping
            </Link>
            <button
              onClick={confirmClearCart}
              className="btn btn-link text-danger text-decoration-none d-flex align-items-center"
            >
              <CiTrash size={24} className="me-2" />
              Clear Cart
            </button>
          </div>
        )}
      </div>

      {/* Confirmation Modals */}
      {showClearConfirm && (
        <div
          className="modal show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Clear Cart</h5>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to clear your cart?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowClearConfirm(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={clearCart}
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showRemoveConfirm && (
        <div
          className="modal show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Remove Item</h5>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to remove this item from your cart?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowRemoveConfirm(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={removeItem}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
