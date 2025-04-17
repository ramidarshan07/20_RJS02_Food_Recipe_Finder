import { useEffect, useState } from "react";
import Cards from "./Card";

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const getData = async () => {
    if (search.trim() === "") {
      setMsg("Please enter a search term.");
      setData([]);
    } else {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const json = await res.json();
      if (json.meals) {
        setData(json.meals);
        setMsg("");
      } else {
        setData([]);
        setMsg("No meals found.");
      }
    }
  };

  const getDefaultMeals = async () => {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    const json = await res.json();
    if (json.meals) {
      setData(json.meals.slice(0, 9));
    }
  };

  useEffect(() => {
    getDefaultMeals();
  }, []);

  return (
    <>
      <div className="mindiv pt-4">
        <h1 className="text-warning text-center py-5">
          Discover Your Next Favorite Meal!
        </h1>
        <div className="d-flex justify-content-center">
          <div className="input-group glow-border" style={{ width: "60%" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search for a meal..."
              onChange={handleInput}
              onKeyDown={(e) => e.key === "Enter" && getData()}
            />
            <button className="btn btn-warning" onClick={getData}>
              Search 🔍
            </button>
          </div>
        </div>

        {msg && (
          <div className="text-center mt-3">
            <h5 className="text-danger">{msg}</h5>
          </div>
        )}

        <div className="mt-5">
          <Cards details={data} />
        </div>
      </div>
    </>
  );
};

export default Home;
