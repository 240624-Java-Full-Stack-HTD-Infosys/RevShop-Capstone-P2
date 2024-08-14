import React, { useState } from "react";
import axios from "axios";
import { User, Products } from "../Interface/types.js"

interface HistoryElement {
    orderId: number,
    buyer: User,
    TotalAmount: number,
    orderStatus: string,
    createdAt: string,
    updatedAt: string,
    orderItems: Array<Products>
}

function History() {

    return (
        <></>
    );

}

export default History;