export default function Hello({person}) {
  const elements = person.seatNumbers.map((element) => <li key={element}>{element}</li>)
  return (
    <div>
      <h1>
        {person.name}
        <br />
        {person.message}
        <br />
        {person.age}
        {person.emoji}
        {person.seatNumbers}
        {elements}
      </h1>

    </div>
  )
}