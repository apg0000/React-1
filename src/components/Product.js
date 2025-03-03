const Product = ({product}) => {
    const {price, title, rating, image} = product;
    return (
        <div className="product">
            
            <img className="product_img" src={image} alt={title}/>
            <h1>{title}</h1>
            <p>Rating: {rating.rate}({rating.count} reviews)</p>
            <p>Price:${price}</p>

        </div>
    )
}
export default Product;