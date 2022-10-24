import React, {useEffect, useState} from "react";
import axios from "axios";

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from "bootstrap";

function Body(){

    const [items, setitems]=useState([]);

    useEffect(() => {

        axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=Seafood`).then(res=>{
            console.log(res.data);

            setitems(res.data.meals)

        }).catch(err=>{
            console.log(err);
        }) 
    }, [])

    // idMeal strMeal strMealThumb


    const itemList = items.map((obj)=>{
        return(
            <div className="col-md-4">
                <p key={obj.idMeal}>{obj.strMeal}</p>
                <img src={obj.strMealThumb} alt={obj.strMeal} className='img-fluid'/>
                <p>{obj.idMeal}</p>
            </div>
        )
    });


    return(
        <div>
            <div className="row">


            </div>

        </div>
    )
}

export default Body;