import Product from "./Product";
import {useContext} from "react";
import ProductsContext from "../contexts";

function Products() {
    const {products, filter, sliderRangeValues} = useContext(ProductsContext);

    return (
        <section className="products">
            {products
                .filter((product) => !filter || product.category === filter)
                .filter(product => !sliderRangeValues || (sliderRangeValues.minValue <= product.price && product.price <= sliderRangeValues.maxValue))
                .map(({id, image, title, price}) => (
                    <Product key={id} id={id} img={image} title={title} price={"$" + price}/>
                ))}
        </section>
    );
}

export default Products;
