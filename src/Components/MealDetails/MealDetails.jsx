import { useLoaderData, useNavigate } from "react-router-dom";

const MealDetails = () => {
    const navigate = useNavigate()
  const meal = useLoaderData();
  const meals = meal.meals[0];
  console.log(meal.meals[0]);

   const handleGoBack = ()=>{
    navigate(-1)
   }
  return (
    <div className=" flex justify-center items-center">
      <div className="card bg-teal-500 p-0 w-[370px] text-center h-[500px] rounded-md text-white">
        <div className="img-card">
          <img
            className="w-full object-cover rounded-t-md"
            src={meals.strMealThumb}
            alt=""
          />
        </div>
        <div className="font-semibold text-xl">
          <h1> {meals.strMeal}</h1>
          <h1>{meals.strCategory}</h1>
          <h1>{meals.strArea}</h1>
          <div className="flex-grow"></div>
        </div>
        <button onClick={handleGoBack}
            className='bg-blue-600 p-3 font-bold rounded-b-md mt-3'>
                Go Back</button>
      </div>
    </div>
  );
};

export default MealDetails;
