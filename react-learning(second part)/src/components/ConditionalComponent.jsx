import Welcome from "./Welcome";
import Code from "./Code";

export default function ConditionalComponent() {
  const display = false;
  return display ? <Welcome></Welcome>: <Code></Code>;
  }
