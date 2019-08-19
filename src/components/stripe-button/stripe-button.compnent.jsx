import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // 需要把美元 转换成美分
  const publishKey = "pk_test_9ajKTj21PIQoXewuObeA3Rw500iTV0iO78";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };

  // 测试账户 4242 4242 4242 4242 01/20 123
  return (
    <StripeCheckout
      alipay
      locale="zh"
      // shippingAddress
      // billingAddress
      description={`Your total is $${priceForStripe}`}
      label="Pay Now"
      name="CRWN Clothing Ltd"
      image="https://svgshare.com/i/CUz.svg"
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishKey}
    />
  );
};

export default StripeCheckoutButton;
