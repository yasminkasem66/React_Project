import React, { useRef, useEffect } from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
export default function Paypal(props) {
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "EUR",
                  value: props.total,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          props.creatNewOrder();
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <>
      <div className="d-flex">
        <CheckCircleRoundedIcon style={{ color: "#a3cf62" }} />
        <p className="fw-bold ms-1">3.PAYMENT METHOD</p>
      </div>
      <div>
        <div ref={paypal}></div>
      </div>
    </>
  );
}
