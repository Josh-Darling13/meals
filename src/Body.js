import React, {useEffect, useState} from "react";
import axios from "axios";

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from "bootstrap";

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
        <div>
            <h1>
                Body Shots
            </h1>
            <button className="btn btn-primary" type=""> A button</button>
        </div>
    )
}

export default Body;