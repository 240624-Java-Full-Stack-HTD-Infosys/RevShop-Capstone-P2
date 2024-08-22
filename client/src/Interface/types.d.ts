export interface User {
    userId: number;
    username: string;
    email: string;
    firstName?: string;
    lastName?: string;
    type: string;
    businessDetails?: string;
    banned: boolean;
}

<<<<<<< HEAD
}

export interface Product {
    productId: number;
    seller: User; 
    name: string;
    description: string;
    price: number;
    stock: number;
   img_url: string;
    category: Category; // change later category: Category;
}

export interface Category {
    categoryId: number;  
    name: string;        
    products: Product[]; 
=======
export interface Category {
    categoryId: number;
    name: string;
    products: Products[];
}

export interface Products {
    productId: number;
    seller: User;
    name: String;
    description: string;
    price: number;
    stock: number;
    img_url: string;
    category: Category;
}

interface HistoryElement {
    orderId: number,
    buyer: User,
    totalAmount: number,
    orderStatus: string,
    createdAt: string,
    updatedAt: string,
    orderItems: Array<Products>
>>>>>>> 33510595e33d80c3acee41ec9eab26d447620cc3
}