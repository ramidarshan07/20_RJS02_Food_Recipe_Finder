import { NavLink } from "react-router-dom";

const Cards = ({ details }) => {
  return (
    <div className="container">
      <div className="row mt-4">
        {!details || details.length === 0 ? (
          <div className="col-12 text-center">
            <p className="text-light">No meals to show.</p>
          </div>
        ) : (
          details.map((curItem) => (
            <div className="col-md-4 mb-4" key={curItem.idMeal}>
              <div className="card h-100 shadow rounded bg-dark">
                <img
                  src={curItem.strMealThumb}
                  className="card-img-top"
                  alt={curItem.strMeal}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title text-warning">{curItem.strMeal}</h5>
                  <p className="text-light">{curItem.strArea}</p>
                  <div className="d-flex justify-content-center gap-2">
                    <NavLink to={`/${curItem.idMeal}`}>
                      <button className="btn btn-outline-warning fw-bold">
                        View Recipe
                      </button>
                    </NavLink>
                    {curItem.strYoutube && (
                      <a
                        href={curItem.strYoutube}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-outline-danger fw-bold">
                          Watch on youtube
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cards;
