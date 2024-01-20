import React from "react"
function Child({ count }) {
  console.log("child is being rerender")
  return (
    <div>
      <h3>child count is: {count}</h3>
    </div>
  )
}
export default React.memo( Child);