import React, { useEffect, useState } from "react";
import axios from "axios";
import { User, Products, HistoryElement } from "../../Interface/types.js"
import OrderListComp from "./OrderListComp"

function OrderHistory() {

    let [orderHistory, setHistory] = useState(Array<HistoryElement>);
    let [pageNumber, setPageNumber] = useState(0);

    //Passing an empty list makes this only run on the first cycle
    useEffect(() => {
        let fetchedList: Promise<Array<HistoryElement>> = fetchHistoryRequest();

        fetchedList.then((list) => {
            let pageList: Array<HistoryElement> = list.splice(pageNumber * 10, pageNumber * 10 + 10);

            setHistory(pageList);
        })

    }, [pageNumber])

    return (
        <>
        {
            orderHistory.map((h: HistoryElement, index) => (
                <div key={index}>
                    <OrderListComp
                        orderId={h.orderId}
                        buyer={h.buyer}
                        totalAmount={h.totalAmount}
                        orderStatus={h.orderStatus}
                        createdAt={h.createdAt}
                        updatedAt={h.updatedAt}
                        orderItems={h.orderItems}
                    />
                </div>
            ))
        }
        </>
    );

}

async function fetchHistoryRequest(): Promise<Array<HistoryElement>> {

    const url = "http://localhost:7777/api/history/"

    try {
        const response = await axios(url, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });

        if (!(response.status === 200)) {
            throw new Error(`Response status: ${response.status}`);
        }
        console.log(response.data);
        return response.data;
    }
    catch(error: any) {
        console.log(error.message);
    }
    return [];
}

export default OrderHistory;