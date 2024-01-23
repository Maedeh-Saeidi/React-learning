import Code from "./Code";
import Welcome from "./Welcome";
export default function ConditionalComponent() {
  const display = true;
  if (display) {
    return <Welcome></Welcome>;
  } else {
    return <Code></Code>;
  }
}