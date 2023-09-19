import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
const Meal = ({ meal }) => {
  const navigate = useNavigate()
  const { idMeal, strMeal, strCategory, strArea, strMealThumb } = meal;
  const handleShowDetail = ()=>{
    navigate(`/meal/${idMeal}`);
  }
  return (
    <div>
      <div className="card bg-gray-500 p-4 rounded-md text-white mt-5 flex flex-col">
        <div className="img-card">
          <img className="w-full object-cover" src={strMealThumb} alt="" />
        </div>
        <div>
          <h1>Meal Id : {idMeal}</h1>
          <h1>Meal Name : {strMeal}</h1>
          <h1>Meal Category : {strCategory}</h1>
          <h1>Meal Area : {strArea}</h1>
          <div className="flex-grow">
            <Link to={`/meal/${idMeal}`}>
              <button className="bg-blue-600 p-3 font-bold rounded-md mt-3">
                Click Me
              </button>
            </Link>
            <button
              className="bg-blue-600 p-3 font-bold rounded-md mt-3 ml-2"
              onClick={handleShowDetail}
            >
              See Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Meal.propTypes = {
  meal: PropTypes.object.isRequired,
};

export default Meal;
