import React, {useState, useEffect} from 'react'
import Datetime from 'react-datetime';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import StarsRating from "react-star-rate";

function Review() {
    const [rating, setRating] = useState(0);
	const [review, setReview] = useState("");
    const [user, setUser] = useState(null);
    const [product, setProduct] = useState(null);
	//const navigate = useNavigate();
    const {productId} = useParams();

    const REVIEW_URL = "http://localhost:8080/review/:userId/:productId";
    const PRODUCT_URL = "http://localhost:8080/:productId"

    const getProduct = async() => {
        const response = await axios.get(PRODUCT_URL);
        if(response.status !== 200){
            alert("Could not find product");
            console.error(response);
        }
    };

    useEffect(() => {
        getProduct();
      }, [productId]);

    const submitReview = async(e) => {
        const currUser = JSON.parse(localStorage.getItem("user"));
        const response = await axios.post(
            REVIEW_URL,{
                reviewId: null,
                author: currUser,
                product: product,
                rating,
                content: review,
                reviewDate: Datetime // not sure if this works
            },
            {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            }
        );
        if(response.status !== 200){
            alert("Unable to write review");
            console.error(response);
        }
    };
    return(
        <>
            <form onSubmit={submitReview}>
				<h1 className="font-semibold">Rating : </h1>
				<StarsRating
					value={rating}
					onChange={(rating) => {
							setRating(rating);
					}}
				/>
				<textarea
					placeholder="Review"
					value={review}
					onChange={(e) => setReview(e.target.value)}
				></textarea>
					<button type="submit">
						Submit review
					</button>
			</form>
        </>
    );
}

export default Review;