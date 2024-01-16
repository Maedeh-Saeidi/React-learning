function Product() {
  // const products = ["Laptop", "Phone", "Modem","Computer","Laptop"];
  const products = [
    { id: 1, name: "Laptop", price: 500 },
    { id: 2, name: "Phone", price: 200 },
    { id: 3, name: "Modem", price: 50 },
    { id: 4, name: "Laptop", price: 900 }
  ]
  const fruits = ["Apple", "Mango", "Banana"];
  const fruitsList = fruits.map((fruit, index) => <h3 key={index}>{fruit}</h3>)

  const productList = products.map((product) => <h3 key={product.id} >{product.price}</h3>);
  return <div>
    {productList}
    {fruitsList}
  </div>;
}
export default Product;