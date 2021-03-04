import {useCallback, useContext} from "react";
import ProductsContext from "../contexts";
import {Button, Space} from "antd";
import {PriceSlider} from "./PriceSlider";

function Header() {
    return (
        <>
            <nav className="product-filter">
                <h1>Jackets</h1>
                <Space>
                    <div className="sort">
                        <CollectionSortFilter/>
                    </div>
                </Space>
            </nav>
            <PriceSlider/>
        </>
    );
}


function CollectionSortFilter() {
    const {
        products,
        filters,
        filter,
        setFilter,
        sliderRange,
        setSliderRange,
        setSliderRangeValues
    } = useContext(ProductsContext);

    const calcRange = useCallback(filteredCategory => {
        const filteredProducts = products.filter(product => product.category === filteredCategory)
        const minRange = Math.max(Math.min(...filteredProducts.map(p => p.price)) - 1, 0);
        const maxRange = Math.max(...filteredProducts.map(p => p.price)) + 1;
        return {minRange, maxRange}
    }, [products, sliderRange])

    const optionChange = useCallback(e => {
        setFilter(e.target.value)
        setSliderRange(calcRange(e.target.value));
        setSliderRangeValues({minValue: sliderRange.minRange, maxValue: sliderRange.maxRange});
    }, [sliderRange, setFilter, setSliderRange, filter, setSliderRangeValues])

    return <div className="collection-sort">
        <label>Filter by:</label>
        <select onChange={optionChange}>
            {filters.map((filter) => (
                <option key={filter} value={filter}>
                    {filter}
                </option>
            ))}
        </select>
    </div>
}


export default Header;
