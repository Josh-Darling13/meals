import React, {useEffect, useState} from "react";
import axios from "axios";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

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

    const itemList = items.map((obj)=>{
        const mealID = obj.idMeal;
        const mealName = obj.strMeal.replace(/\s+/g, '-');
        console.log(mealName)
        const url = `https://www.themealdb.com/meal/${mealID}-${mealName}`;

        return(
            <div className="col-md-4">
                <a href={url} target='blank' >
                    <img src={obj.strMealThumb} alt={obj.strMeal} className='float-end'/>
                </a>
                <a href={url} target='blank' >
                    <p className='food-name' >{obj.strMeal}</p>
                </a>
            </div>
        )
    });

    return(
        <div>
            <div className="row justify-content-center">
                {itemList}
            </div>
        </div>
    )
}

export default Body;