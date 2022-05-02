import React from "react";
import "../../style/Nutrient.css"

function Nutrient(props) {
    let src
    let data
    let measure
    let nutrient

    if (props.loading === false) {
        src = props.src
        data = props.data
        measure = props.measure
        nutrient = props.nutrient
    }

    return (
        <div className="nutrient">
            <img src={process.env.PUBLIC_URL + "/assets/" + src} alt=""></img>
            <div>
                <p>{data + measure}</p>
                <p>{nutrient}</p>
            </div>
        </div>
    )
}

export default Nutrient