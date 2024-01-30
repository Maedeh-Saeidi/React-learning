import { useEffect, useState } from "react"
import styles from "./search.module.css"

const URL = " https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "ed2bd6048a4844b998250e8a3b54d17b";

export default function Search({foodData, setFoodData}) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodData(data.results);
      console.log(data.results);
    }
    fetchFood();
  },[query])
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text" />
    </div>
  )
}