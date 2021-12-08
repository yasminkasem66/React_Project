import React, { useRef, useEffect } from "react";
<<<<<<< HEAD
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { useNavigate } from "react-router";


=======
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
>>>>>>> 4e1a9f4182a91ae3eac87d283d6b57a52fc9220e
export default function Paypal(props) {
  const navigate=useNavigate()
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
                  currency_code: "USD",
                  value: props.total,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
<<<<<<< HEAD
          const order = await actions.order.capture().then(()=>{
            alert("done")
            navigate("/")
          });
         
=======
          const order = await actions.order.capture();
          props.creatNewOrder();
>>>>>>> 4e1a9f4182a91ae3eac87d283d6b57a52fc9220e
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
