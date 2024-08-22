import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Products } from '../Interface/types';
import config from '../config'; 

function FormProduct() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [imgUrl, setImgUrl] = useState('');
    const [categoryId, setCategoryId] = useState(0);
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        async function submitProduct() {
            try {
                const newProduct: Omit<Products, 'productId' | 'seller'> = {
                    name,
                    description,
                    price,
                    stock,
                    img_url: imgUrl,
                    category: {
                        categoryId,
                        name: '', 
                        products: [] 
                    }
                };

                const response = await axios.post(`http://localhost:7777/products/add`, newProduct, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.status !== 201) {
                    throw new Error('well well well your status code is not sucess');
                }

                setSuccess(true);
                setError('');
                navigate('/products'); 
            } catch (error) {
                setError('Product addition failed. what are you trying to do , are you trying to broke our application???');
            }
        }

        submitProduct();
    }

    return (
        <div className="add-product-container">
            <div className="add-product-form">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title text-center">Add Product</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Product Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={name}
                                    onChange={function(e) { setName(e.target.value); }}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea
                                    className="form-control"
                                    value={description}
                                    onChange={function(e) { setDescription(e.target.value); }}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={price}
                                    onChange={function(e) { setPrice(Number(e.target.value)); }}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Stock</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={stock}
                                    onChange={function(e) { setStock(Number(e.target.value)); }}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Image URL</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={imgUrl}
                                    onChange={function(e) { setImgUrl(e.target.value); }}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Category ID</label>
                                <input
                                    className="form-control"
                                    value={categoryId}
                                    onChange={function(e) { setCategoryId(Number(e.target.value)); }}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Category Name</label>
                                <input
                                    className="form-control"
                                    value={category}
                                    onChange={function(e) { setCategory((e.target.value)); }}
                                    required
                                />
                            </div>
                            {error && <p className="text-danger">{error}</p>}
                            {success && (
                                <p className="text-success">
                                    Product added successfully! Redirecting...
                                </p>
                            )}
                            <button type="submit" className="btn btn-primary btn-block">
                                Add Product
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormProduct;
