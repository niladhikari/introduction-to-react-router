import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Meals = () => {
    const {meals} = useLoaderData()
    return (
        <div className='text-center'> 
            <h2>Meals : {meals.length}</h2>
            <div className="grid md:grid-cols-4 gap-6 mx-10">
                {
                    meals.map(meal=> <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;