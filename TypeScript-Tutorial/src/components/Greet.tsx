type GreetProps = {
  name: string;
  messageCounst?: number;
  isLoggedIn: boolean;
};

export default function Greet(props: GreetProps) {
  const { messageCounst = 0 } = props;

  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${messageCounst} unread messages`
          : `Welcome Guest`}
      </h2>
    </div>
  );
}
