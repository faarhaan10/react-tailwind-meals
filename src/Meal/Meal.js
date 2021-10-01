import React from 'react';
import { useHistory } from 'react-router';

const Meal = (props) => {
    const history = useHistory();
    const  {idMeal,strMeal,strMealThumb,strCategory} = props.meal;

    const handleMeal = () =>{
        history.push(`/meal/${idMeal}`);
    };
    return (
        <div className="p-2 bg-white border-blue-400 rounded-lg	cursor-pointer shadow-md hover:bg-blue-300" onClick={handleMeal}>
            <div>
                <img className="rounded-lg" src={strMealThumb} alt={strMeal}/>
            </div>
            <div className='flex justify-between'>
                <h2>{strMeal}</h2>
                <h3><small>{strCategory} {idMeal}</small></h3>
            </div>

        </div>
    );
};

export default Meal;