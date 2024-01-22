export default function Fruits() {
  //const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"]
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎" },
    { name: "Mango", price: 7, emoji: "🥭" },
    { name: "Banana", price: 2, emoji: "🍌" },
    { name: "Orange", price: 5, emoji: "🍊" },
    { name: "Pineapple", price: 8, emoji: "🍍" }
  ]
  return (
    <>
      <ul>
        {fruits.map(fruit => (
          <li key={fruit}>{fruit.name}${fruit.price}{fruit.emoji}</li>
        ))} 
      </ul>
    </>
  )
}