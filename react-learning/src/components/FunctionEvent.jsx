function FunctionEvent() {
  const handleClick = () => {
    console.log("Buttom is Clicked!");
  }
  return (
    <div>
      Functional Component
      <button onClick={handleClick}>Click here</button>
    </div>
  );
}
export default FunctionEvent;