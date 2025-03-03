import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { useParams } from "react-router"; // Ensure correct import

const ProductDetails = () => {
    const [singleProduct, setSingleProduct] = useState(null);
    const { productId } = useParams();

    useEffect(() => {
        fetchData();
    }, [productId]); // Add dependency

    const fetchData = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
            const resData = await response.json();
            setSingleProduct(resData);
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    };

    if (!singleProduct) {
        return <Skeleton />;
    }

    const { image, title, description, price, rating } = singleProduct;

    return (
        <div className="product">
            <img className="product_img" src={image} alt={title} />
            <h1>{title}</h1>
            <p>Rating: {rating?.rate} ({rating?.count} reviews)</p>
            <p>Price: ${price}</p>
            <p>{description}</p>
        </div>
    );
};

export default ProductDetails
