import React from "react";
import "./Order.css";

function OrderListHeader() {

    return (
        <table>
            <tr id="row">
                <th id="evenInfo">Order ID</th>
                <th id="oddInfo">Date Ordered</th>
                <th id="evenInfo">Total Price</th>
            </tr>
        </table>
    )

}

export default OrderListHeader;

