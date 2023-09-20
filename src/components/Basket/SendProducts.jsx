import React, { useContext } from "react";
import { sendPrice } from "../../Offer";
import { ProductContext } from "../Context/ContextProvider";

export default function SendProducts() {
  const { state } = useContext(ProductContext);

  return (
    <div className="send_products">
      <div className="send_info_price">
        <span>تكلفة الشحن</span>
        <span>
          {state.totalPrice - state.offerPrice <= 500.00
            ? `${sendPrice.toLocaleString()} الدينار جزائري`
            : "مجاني"}
        </span>
      </div>
      {state.totalPrice - state.offerPrice > 500.00 && (
        <div className="send_free_img">
          <img src="image/free.svg" alt="free" />
        </div>
      )}
    </div>
  );
}
