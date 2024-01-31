import styles from "./fooddetails.module.css";
import { useEffect, useState } from "react";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "ed2bd6048a4844b998250e8a3b54d17b";


  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood()
  }, [foodId]);
  //  console.log(typeof(food.
  //     extendedIngredients) 
  // );
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img src={food.image} className={styles.recipeImage}></img>
        <div className={styles.recipeDetails}>
          <span>
            <strong>⌚️ {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👨‍👩‍👦 Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegan ? "🐮 Vegan" : ""}
            </strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-Vegetarian"}
            </strong>
          </span>
        </div>
        <div>
          $ <span>
            <strong>
              {food.pricePerServing / 100} Per serving
            </strong>
          </span>
        </div>
        <div>
          <h2>Ingredients</h2>

          <h2>Instructions</h2>
          <div>
            {/* {food.extendedIngredients.map(function (item) {
              return (
                <div>
                  {item.name}
                </div>
              )
            })} */}
          </div>
          <div className={styles.recipeInstructions}>
            <ol>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                food.analyzedInstructions[0].steps.map((step) => (
                  <li>{step.step}</li>
                ))
              )}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}