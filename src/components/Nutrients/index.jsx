import PropTypes from 'prop-types'
import React from "react";
import "../../style/Nutrient.css"


/**
 * Returns cards with key nutritional infos
 * @param { object } props 
 * @param { number } props.data - value of nutrient as integer
 * @param { string } props.measure - value unity of measure
 * @param { string } props.nutrient - nutrient category
 * @param { string } props.nutrient - component thumbnail
 * @param { boolean } props.loading - loading status
 * @returns { HTMLElement }
 */
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

Nutrient.propTypes = {
    src: PropTypes.string,
    data: PropTypes.number,
    measure: PropTypes.string,
    nutrient: PropTypes.string,
    loading: PropTypes.bool
}

export default Nutrient