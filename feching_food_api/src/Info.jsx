import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";

const Info = () => {
  const { mealid } = useParams();
  const [info, setInfo] = useState(null);

  const getInfo = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
      );
      const json = await res.json();
      setInfo(json.meals[0]);
    } catch (error) {
      console.error("Error fetching meal details:", error);
    }
  };

  useEffect(() => {
    if (mealid) {
      getInfo();
    }
  }, [mealid]);

  const getIngredients = (meal) => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }
    return ingredients;
  };

  return (
    <>
      <div className="mindiv py-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-10">
              {!info ? (
                <div className="alert alert-warning text-center" role="alert">
                  Data not found
                </div>
              ) : (
                <div className="card shadow-lg bg-dark">
                  <img
                    src={info.strMealThumb}
                    className="card-img-top img-fluid"
                    alt={info.strMeal}
                    style={{ maxHeight: "300px", objectFit: "cover" }}
                  />

                  <div className="card-body">
                    <h2 className="card-title text-center text-warning mb-3">
                      {info.strMeal}
                    </h2>

                    <h5 className="text-light mb-2">
                      Category: {info.strCategory}
                    </h5>
                    <h5 className="text-light mb-3">Area: {info.strArea}</h5>

                    <h4 className="text-warning">Ingredients</h4>
                    <ul className="text-light">
                      {getIngredients(info).map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>

                    <h4 className="mt-4 text-warning">Instructions</h4>
                    <p
                      className="card-text text-light"
                      style={{ textAlign: "justify" }}
                    >
                      {info.strInstructions}
                    </p>

                    <div className="text-center mt-5 d-flex justify-content-center gap-3 flex-wrap">
                      <NavLink to="/">
                        <button className="btn btn-outline-warning">
                          Back to Home
                        </button>
                      </NavLink>

                      {info.strYoutube && (
                        <a
                          href={info.strYoutube}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="btn btn-outline-danger">
                            Watch on YouTube
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
