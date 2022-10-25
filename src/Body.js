import React, {useEffect, useState} from "react";
import axios from "axios";

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from "bootstrap";

function Body(){

    const [items, setitems]=useState([]);

    useEffect(() => {

        axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=Seafood`).then(res=>{
            // If the code runs
            console.log(res.data);

            setitems(res.data.meals)

        }).catch(err=>{
            // if it doesn't log an error message
            console.log(err);
        }) 
    }, [])

    // idMeal strMeal strMealThumb


    const itemList = items.map((obj)=>{
        const mealID = obj.idMeal;
        const mealName = obj.strMeal.replace(/\s+/g, '-');
        console.log(mealName)
        const url = `https://www.themealdb.com/meal/${mealID}-${mealName}`;
        // console.log(url);
        return(
            <div className="col-md-4">
                <a href={url} target='blank' >
                <p key={obj.idMeal}>{obj.strMeal}</p>
                <img src={obj.strMealThumb} alt={obj.strMeal} className='img-fluid'/>
                </a>
            </div>
        )
    });


    return(
        <div>
            <div className="row">
            {itemList}

            </div>

        </div>
    )
}

export default Body;