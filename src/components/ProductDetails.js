import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { useParams } from "react-router";

const ProductDetails = () => {
    const [singleProduct, setSingleProduct] = useState(null);
    const {productId} = useParams();
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const resData = await data.json();
        setSingleProduct(resData);
    }

    if (singleProduct === null) {
        return <Skeleton/>
    }

    const {image, title, description, price} = singleProduct;
    
    return (
        <div className="product">
            <img className="product_img" src={image}/>
            <h1>{title}</h1>
            <p>Rating: {singleProduct.rating.rate}({rating.count} reviews)</p>
            <p>Price:${price}</p>
            <p>{description}</p>
        </div>
    )
};
export default ProductDetails;