import "./App.css";
import "./styles.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: "Maedeh",
    last: "Saeidi",
  };

  const nameList = [
    {
      first: "Maedeh",
      last: "Saeidi",
    },
    {
      first: "AmirReza",
      last: "Abbasi",
    },
    {
      first: "Mary",
      last: "Moshiri",
    },
    {
      first: "Bita",
      last: "Mansouri",
    },
  ];

  return (
    <div>
      <Greet name="maedeh" messageCounst={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
