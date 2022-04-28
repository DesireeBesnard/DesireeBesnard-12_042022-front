import React from "react";
import "../../style/Nutrient.css"

function Nutrient(props) {

    if(props.data) {
        return(
            <div className="nutrient">
                <img src={process.env.PUBLIC_URL +"/assets/"+ props.src} alt=""></img>
                <div>
                    <p>{props.data + props.measure}</p>
                    <p>{props.nutrient}</p>
                </div>
            </div>
        )

    } else {
        console.log(props)
        return <div> Loading ...</div>
    }
}

export default Nutrient