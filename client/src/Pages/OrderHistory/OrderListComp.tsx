import React from "react";
import { HistoryElement } from "../../Interface/types.js"
import "./Order.css";

function OrderListComp(props: HistoryElement) {

    return (
        <table>
            <tr id="row">
                <td id="evenInfo"> {props.orderId} </td>
                <td id="oddInfo"> {props.createdAt} </td>
                <td id="evenInfo"> ${props.totalAmount} </td>
            </tr>
        </table>
    )

}

export default OrderListComp;