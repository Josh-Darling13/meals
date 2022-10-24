import React, {useEffect, useState} from "react";
import axios from "axios";

// import bootstrap from ""

function Body(){

    useEffect(() => {

        axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=Seafood`).then(res=>{
            console.log(res.data);
        }).catch(err=>{
            console.log(err);
        })

    }, [])

    // idMeal strMeal strMealThumb

    return(
        <h1>
            Body Shots
        </h1>
    )

}

export default Body;