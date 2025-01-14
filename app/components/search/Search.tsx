"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import Error from "../error/Error";
import SearchInfoMessage from "./SearchInfoMessage";
import MealCard from "../MealCard";

interface Meal {
  strMealThumb: string;
  strMeal: string;
  strInstructions: string;
}

function SearchField() {
  const [searchParam, setSearchParam] = useState<string>("");
  const [data, setData] = useState<Meal[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [isFirstSearch, setIsFirstSearch] = useState<boolean>(true);
  const [infoMessage, setInfoMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      setError(false)
      setLoading(true);
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchParam}`
      );

      const result = response.data.meals;

      if (result) {
        setData(result);
        setInfoMessage("");
      } else {
        setData([]);
        setInfoMessage(
          isFirstSearch
            ? "Please, for searching recipies enter some value"
            : "Sorry, no recipe found"
        );
      }
      setIsFirstSearch(false);
    } catch (error) {
      setLoading(true);
      setError(true);
      const err = error as Error; // Приведення до Error
      setErrorMessage(err.message)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if(isFirstSearch){
      setInfoMessage("Please, for searching recipies enter some value");
    }
      
  }, []);

  return (
    <>
      <form
        onSubmit={(event) => handleSubmit(event)}
        className="searchShadow w-[360px] md:w-[500px] h-10 mx-auto flex justify-between items-center mb-[30px]  md:mb-[65px] border-solid border-[1px]"
      >
        <input
          className="md:w-[390px] h-full px-3 rounded-[3px] text-[18px] outline-none"
          type="text"
          name="search"
          id="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
        />
        <button
          type="submit"
          className="search-decor font-roboto px-2 py-4 md:px-5 md:py-2 text-[#747474] text-[18px]"
        >
          Search
        </button>
      </form>

      

      <div>
        
          {loading && <Loading />}
          {error && !loading && <Error errorMessage={errorMessage} />}
        
      
        {infoMessage && !loading && !error && <SearchInfoMessage message={infoMessage} />}
        {
          !loading && !error && data && data.length > 0 ? (
            <div>
              {data.slice(0, 5).map((recipeItem, index) => (
                <MealCard src={recipeItem.strMealThumb} name={recipeItem.strMeal} text={recipeItem.strInstructions} reverse={index % 2 !== 0} key={recipeItem.strMeal} />
              ))}
            </div>
          ) : null
          
        }
      </div>
    </>
  );
}

export default SearchField;
