import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [meals,setMeals] = useState([]);
    const [searchText,setSearchText] = useState('');

    const handleSearch = (event) => {
        const searchText = event.target.value;
        setSearchText(searchText);
    };

    useEffect( () => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    },[searchText]);

    return (
        <>
        <div className="w-full bg-blue-300 py-1">
            <div className="w-1/3 mx-auto">
            <input onChange={handleSearch} className="w-4/5 rounded" type="text" placeholder=" Search Meals"/>
            </div>
        </div>
        <div className="w-full py-2 bg-gray-300">
            <div className="w-4/5 mx-auto grid grid-cols-4 gap-4 ">
            {
                meals?.map(meal => <Meal
                    key={meal.idMeal}
                    meal={meal}
                ></Meal>)    
            }
            </div>
        </div>
        </>
    );
};

export default Meals;