import React, {useContext} from "react";
import ProductsContext from "../contexts";
import {Slider} from "antd";

export function PriceSlider() {
    const {sliderRange, sliderRangeValues, setSliderRangeValues} = useContext(ProductsContext);

    const onRangeValuesChange = values => {
        setSliderRangeValues({minValue: values[0], maxValue: values[1]});
        // console.log(sliderRange);
    }

    return <Slider
        // defaultValue= "5"  // {sliderRange?.maxRange}
        onAfterChange={onRangeValuesChange}
        range={true}
        defaultValue={[sliderRangeValues.minValue, sliderRangeValues.maxValue]}
        // value={[sliderRangeValues.minValue, sliderRangeValues.maxValue]}
        min={sliderRange?.minRange}
        max={sliderRange?.maxRange}/>
}
