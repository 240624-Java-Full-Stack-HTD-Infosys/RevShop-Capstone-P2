import React, { useEffect, useState } from "react";
import axios from "axios";
import { User, Products, HistoryElement } from "../../Interface/types.js"
import OrderListComp from "./OrderListComp"
import OrderListHeader from "./OrderListHeader"
import "./Order.css";

function OrderHistory() {

    let [orderHistory, setHistory] = useState(Array<HistoryElement>);
    let [pageNumber, setPageNumber] = useState(0);

    let itemsPerPage = 10;

    function nextPage() {
        if (pageNumber < orderHistory.length / itemsPerPage) setPageNumber(pageNumber + 1);
    }
    function prevPage() {
        if (pageNumber > 0) setPageNumber(pageNumber - 1);
    }

    //Passing an empty list makes this only run on the first cycle
    useEffect(() => {
        let fetchedList: Promise<Array<HistoryElement>> = fetchHistoryRequest();

        fetchedList.then((list) => {
            let pageList: Array<HistoryElement> = list.splice(pageNumber * itemsPerPage, pageNumber * itemsPerPage + itemsPerPage);

            setHistory(pageList);
        })

    }, [pageNumber])

    return (
        <>

        <div>
                <OrderListHeader></OrderListHeader>
        </div>

        {
            orderHistory.map((h: HistoryElement, index) => (
                <div key={index}>
                    <OrderListComp
                        orderId={h.orderId}
                        buyer={h.buyer}
                        totalAmount={h.totalAmount}
                        orderStatus={h.orderStatus}
                        createdAt={h.createdAt.slice(0,10)}
                        updatedAt={h.updatedAt}
                        orderItems={h.orderItems}
                    />
                </div>
            ))
        }

        <div>
            <ul className="pagination">
                <li className="page-item"> <button onClick={prevPage}>Previous</button></li>
                <li className="page-item"><button onClick={nextPage}>Next</button></li>
            </ul>
        </div>

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
        return response.data;
    }
    catch(error: any) {
        console.log(error.message);
    }
    return [];
}

export default OrderHistory;