
import { useEffect, useState } from "react";
import Product from "./Product"
import Skeleton from "./Skeleton";
import {Link} from "react-router"
export const ProductCard = () => {

    const [listOfProduct, setListOfProduct] = useState([]);
    const [filterProduct, setFilterProduct] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch("https://fakestoreapi.com/products");
        const resData = await data.json();
        console.log(resData);
        setListOfProduct(resData);
        setFilterProduct(resData);
    }
    
    // conditional rendering
    if (listOfProduct.length===0) {
        return <Skeleton/>
    }  



    return (
        <div>

            <div>
                <input type="text" onChange={(e)=> setSearchText(e.target.value)} value={searchText}/>
                <button onClick={()=>{
                    const filterData = listOfProduct.filter((product)=>{
                        return product.title.toLowerCase().includes(searchText.toLowerCase());
                    })
                    setFilterProduct(filterData);

                }}>Search</button>
             </div>

            <button onClick={() => {
                
            const filteredProduct = listOfProduct.filter(product => product.rating.rate >= 4);
            setListOfProduct(filteredProduct);

            }}>Top rated product</button>
            <div className="product_card">
            {filterProduct.map((product) => {
                return <Link key={product.id} to={`/product/${product.id}`}><Product product={product}/> </Link>;    
            })}
        </div>
        </div>
      
    );
};