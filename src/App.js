import {uniqBy} from "lodash";
import React, {useEffect, useMemo, useState} from "react";
import ProductsContext from "./contexts";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ProductDetails from "./views/ProductDetails";
import Home from "./views/Home";
import "./App.css"

function App() {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState(null);
    const [sliderRange, setSliderRange] = useState({minRange: 0, maxRange:100});
    const [sliderRangeValues, setSliderRangeValues] = useState(
        {minValue: 0, maxValue: 100});

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((json) => setProducts(json));
    }, []);

    const filters = useMemo(() => {
        return uniqBy(products, "category").map((product) => product.category);
    }, [products]);

    return (
        <Router>
            <ProductsContext.Provider value={{
                products, filters, filter, setFilter,
                sliderRange, setSliderRange, sliderRangeValues, setSliderRangeValues,
            }}>
                <Switch>
                    <Route path="/:id" component={ProductDetails}>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>

            </ProductsContext.Provider>
        </Router>
    );
}

export default App;
