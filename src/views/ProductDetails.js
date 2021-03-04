import {useParams} from "react-router";
import {useEffect, useState} from "react";

export default function ProductDetails() {
    let {id} = useParams();
    console.log('id', id)
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => response.json())
            .then((json) => setProduct(json)).then();
    }, [id]);
    const {title, price} = product
    return <div>
        <h3>ID: {id}</h3>
        <h2>Name: {title}</h2>
        <h6>Price: {price}</h6>
    </div>
}
