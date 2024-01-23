export default function Fruit ({ name, price, emoji, soldout }) {
  return (
    <>
      {price > 5 ? (
        <li>
          {emoji} {name} {price}{soldout ? " soldout": ''}
        </li>
      ) : (
        ''
      )}
    </>
  )
}
