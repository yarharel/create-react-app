import React, {useContext} from 'react';
import {productsList} from "./products_list";
import {filterCategoryContext} from "./context"

export function Products() {
    const {category, setCategory} = useContext(filterCategoryContext);
    return <div>
        {
            productsList
                .filter(product => !category || product.category === category)
                .map((product) => <ProductCard key={product.id} {...product}/>)
        }
    </div>
}

function ProductCard({image, title, price}) {
    return <section className="product">
        <ProductImage image={image}/>
        <ProductInfo title={title} price={price}/>
    </section>
}

function ProductImage({image}) {
    return <div>
        <img height="90" width="90" src={image}/>
    </div>
}

function ProductInfo({title, price}) {
    return <div>
        <h5>{title}</h5>
        <h6>${price}</h6>
    </div>
}
