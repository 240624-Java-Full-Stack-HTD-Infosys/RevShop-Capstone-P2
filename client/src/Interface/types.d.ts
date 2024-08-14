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