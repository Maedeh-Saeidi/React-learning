type GreetProps = {
  name: string;
  messageCounst: number;
  isLoggedIn: boolean;
};

export default function Greet(props: GreetProps) {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${props.messageCounst} unread messages`
          : `Welcome Guest`}
      </h2>
    </div>
  );
}
