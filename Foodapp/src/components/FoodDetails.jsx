import { useEffect, useState } from "react";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "fccfebe3ce004ae1abbcb4ac1b30790d";


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


  return (
    <div>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image}></img>
        <div>
          <span>
            <strong>⌚️ {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👨‍👩‍👦 Serves {food.servings}</strong>
          </span>
          <span>
            {food.vegan ? "🐮 Vegan" : ""}
          </span>
          <span>
            {food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-Vegetarian"}
          </span>
        </div>
        <div>
          $ <span>{food.pricePerServing / 100} Per serving</span>
        </div>
      </div>
      <div>
        <h2>Instructions:</h2>
        {isLoading ? <p>Loading...</p> : food.
          analyzedInstructions
        [0].steps.map((step) => (<li>{step.step}</li>))}
      </div>
    </div>
  )
}