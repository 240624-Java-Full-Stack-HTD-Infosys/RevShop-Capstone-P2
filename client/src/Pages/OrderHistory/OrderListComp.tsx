import React from "react";
import { HistoryElement } from "../../Interface/types.js"

function OrderListComp(props: HistoryElement) {

    console.log(props);

    return (

        <div> 
            <span> {props.orderId} </span>  <span> {props.createdAt} </span> <span> ${props.totalAmount} </span>
        </div>
    )

}

export default OrderListComp;