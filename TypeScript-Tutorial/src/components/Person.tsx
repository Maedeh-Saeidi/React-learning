import { PersonProps } from "./Person.types";

export default function Person(props: PersonProps) {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
}
