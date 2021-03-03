import {uniqBy} from "lodash";
import {useEffect, useMemo, useState} from "react";
import ProductsContext from "./contexts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ProductDetails from "./views/ProductDetails";
import Home from "./views/Home";

function App() {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState(null);

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
            <ProductsContext.Provider value={{products, filters, filter, setFilter}}>
                <Switch>
                    <Route path="/:id" component={ProductDetails}>
                    </Route>

                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>

            </ProductsContext.Provider>
        </Router>
    );
}

export default App;
