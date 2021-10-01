import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const MealDetail = () => {
    const {idMeal} = useParams();
    const [meal,setMeal] = useState([]);

    const {strMeal,strMealThumb,strArea,strInstructions,strCategory} = meal;

    useEffect( () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        .then(res => res.json())
        .then(data => setMeal(data.meals[0]))
    },[]);

    return (
        <div className="container flex mx-auto my-5 p-2 bg-white border-blue-400 rounded-lg	cursor-pointer shadow-md bg-blue-300">
            <div>
                <img className="rounded-lg" src={strMealThumb} alt=""/>
            </div>
            <div className="ml-5">
                <h2>{strMeal}</h2>
                <h3>Category: {strCategory}</h3>
                <h3>Country: {strArea}</h3>
                <h3>Instructions: {strInstructions}</h3>
                <Link to="/meals"><button 
                className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 text-white font-bold px-2 py-2 rounded-lg">
                    See All Meals
                </button>
                </Link>
            </div>
        </div>
    );
};

export default MealDetail;