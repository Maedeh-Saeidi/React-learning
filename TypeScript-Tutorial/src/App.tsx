import "./App.css";
import "./styles.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";

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
      <Greet name="maedeh" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="error" />
      <Heading>PlaceHolder</Heading>
      <Oscar>
        <Heading>Oscar goes to ...</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)}></Input>
    </div>
  );
}

export default App;
