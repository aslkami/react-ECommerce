import axios from "axios";
import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // 需要把美元 转换成美分
  const publishableKey = "pk_test_9ajKTj21PIQoXewuObeA3Rw500iTV0iO78";

  const onToken = token => {
    console.log(token);
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert("Payment Successfully");
        console.log(response);
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
  };

  // 测试账户 4242 4242 4242 4242 01/20 123
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      // billingAddress
      // shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      locale="zh"
    />
  );
};

export default StripeCheckoutButton;
