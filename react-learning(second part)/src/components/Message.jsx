export default function Message() {
  function handleClick() {
    console.log("Button clicked");
  }
  return (
    <>
      <button onClick={handleClick}>CLick here to get message</button>
    </>
  )
}