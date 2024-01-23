export default function Fruit ({ name, price, emoji }) {
  return (
    <>
      {price > 5 ? (
        <li key={name}>
          {emoji} {name} {price}{' '}
        </li>
      ) : (
        ''
      )}
    </>
  )
}
