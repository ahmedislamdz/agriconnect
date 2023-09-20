import React, { useContext, useEffect, useState } from "react";
import "./Basket.css";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { ProductContext, ProductDispath } from "../Context/ContextProvider";
import BasketItem from "./BasketItem";
import Offer from "./Offer";
import OfferBadge from "./OfferBadge";
import SendProducts from "./SendProducts";

export default function Basket() {
  const { state } = useContext(ProductContext);
  const { dispath } = useContext(ProductDispath);
  const [loggedIn, setLoggedIn] = useState(false);
  const [purchaseMessage, setPurchaseMessage] = useState("");

  useEffect(() => {
    // Check if the user is logged in when the component mounts
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    setLoggedIn(isLoggedIn);
  }, []);

  // Function to handle the purchase
  const handlePurchase = () => {
    if (loggedIn) {
      // User is logged in, set a success message
      setPurchaseMessage("تمت عملية الشراء بنجاح!");
    } else {
      // User is not logged in, set a login request message
      setPurchaseMessage("الرجاء تسجيل الدخول للمتابعة.");
    }
  };

  return (
    <>
      <div className="favorite_container_linkBar">
        <div className="favorite_linkBar">
          <span>عربة التسوق</span>
          <Link className="favorite_backLink" to={"/Products"}>
            <HiArrowRight />
            صفحة المنتجات
          </Link>
        </div>
        {state.basket.length > 0 && (
          <div className="favorite_linkBar">
            <div className="free_send_title">
              <img src="images/sound(1).jpg" alt="" />
              <span>
                لشحن مجاني للمشتريات التي تزيد قيمتها عن 500.00 الثمن.
              </span>
            </div>
          </div>
        )}
      </div>
      {state.basket.length > 0 ? (
        <div className="basket_container">
          <div className="basket_itemBox">
            {state.basket.map((product) => (
              <BasketItem key={product.id} {...product} />
            ))}
          </div>
          <div className="basket_priceBox">
            <OfferBadge />
            <div className="basket_price">
              <span>إجمالي سلة التسوق</span>
              <span>|</span>
              <span>{state.totalPrice.toLocaleString()} دينار</span>
            </div>
            {state.totalPriceAfterOffer > 0 && (
              <div className="basket_offer">
                <span>سعر مخفض</span>
                <span>{state.totalPriceAfterOffer.toLocaleString()} دينار</span>
              </div>
            )}
            <Offer />
            <SendProducts />
            <div className="basket_send">
              <span>إجمالي المبلغ الواجب دفعه</span>
              <span>{state.totalPriceFainal.toLocaleString()} دينار جزائري</span>
            </div>
            <button
              onClick={handlePurchase}
              className="basket_button_buy"
            >
              مواصلة عملية الشراء
            </button>
            {purchaseMessage && (
              <div className={loggedIn ? "purchase-success" : "purchase-login-request"}>
                {purchaseMessage}
              </div>
            )}
            <button
              onClick={() => dispath({ type: "EMPTY_BASKET" })}
              className="basket_button_remove"
            >
              حذف {state.basket.length} البضائع من عربة التسوق
            </button>
          </div>
        </div>
      ) : (
        <div className="favorite_empty">
          <img
            className="favorite_empty_img"
            src="images/empty-cart.png"
            alt=""
          />
          <span className="favorite_empty_title">عربة التسوق فارغة</span>
        </div>
      )}
    </>
  );
}
