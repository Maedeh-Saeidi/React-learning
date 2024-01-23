import Fruit from "./Fruit"
export default function Fruits() {
  //const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"]
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎" , soldout: true},
    { name: "Mango", price: 7, emoji: "🥭" ,soldout: false },
    { name: "Banana", price: 2, emoji: "🍌", soldout: true },
    { name: "Orange", price: 5, emoji: "🍊", soldout: false },
    { name: "Pineapple", price: 8, emoji: "🍍", soldout: true }
  ]
  return (
    <>
      <ul>
        {fruits.map(fruit => (
          <h2><Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
            soldout= {fruit.soldout}
          /></h2>
        ))} 
      </ul>
    </>
  )
}