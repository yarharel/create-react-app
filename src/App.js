import './App.css';
import React, {useContext, useState} from 'react';
import {ProductFilter} from "./components/header";
import {Products} from "./components/products";
import {filterCategoryContext} from "./components/context"


function App() {
    const [category, setCategory] = useState();

    return (
        <div>
            <filterCategoryContext.Provider value={{category, setCategory}}>
                <ProductFilter/>
                <Products/>
            </filterCategoryContext.Provider>
        </div>
    );
}

export default App;
