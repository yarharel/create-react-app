import React from 'react';
import {productsList} from "./products_list";
import {filterCategoryContext} from "./context";
import {useContext} from "react";


const groupBy = (xs, key) => xs.reduce((rv, x) => {
    (rv[x[key]] = true || []);
    return rv;
}, {});


const categories = Object.keys(groupBy(productsList, 'category'));

export function ProductFilter() {
    const filterBy = {label: "Filter by:", options: categories}
    return <div class="product-filter">
        <h1>Jackets</h1>
        <div class="sort">
            <CollectionSort {...filterBy}/>
        </div>
    </div>
}

function CollectionSort({label, options}) {
    const {category, setCategory} = useContext(filterCategoryContext);
    return <div class>
        <label>{label}</label>
        <select onChange={(e) => setCategory(e.target.value)}>
            {options.map(option => <option value={option}>{option}</option>)}
        </select>
    </div>
}
