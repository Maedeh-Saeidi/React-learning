import { Alert, AlertIcon, AlertTitle, ChakraBaseProvider, Container, theme, Box, AlertDescription, Button } from '@chakra-ui/react'
import './App.css'
import { useState } from 'react'


async function notifyUser (notificationText:string = "Thankyou for enabling notification!"){

if(!("Notification" in window)){
  alert("Browser does not support notification");

 }else if(Notification.permission === "granted"){
  const notification = new Notification(notificationText);

  }else if(Notification.permission !== "denied"){
  await Notification.requestPermission().then((permission)=>{
    if(permission === "granted"){
     const notification = new Notification(notificationText);
    }
  });
}
}
function App() {
  //3 states
  //show would you like to see notifications?
  //show notification
  //show nothing because the user denied notifications

  async function enableNotifsAndClose (){
    await notifyUser().then(()=>{
      setUserResponded(true);
    });
  }
  function disableNotifsAndClose(){
    setUserResponded(true);
  }

  const [userResponded, setUserResponded] = useState<boolean>(false)

  return (!(userResponded) && !(Notification.permission === "granted")) ? (
    <ChakraBaseProvider theme={theme}>
      <Container>
        <Alert status='success'>
          <AlertIcon/>
          <Box>
             <AlertTitle>
              Notification
              </AlertTitle>
             <AlertDescription>
              Would you like to enable notifications?
             </AlertDescription>
             <Button colorScheme='teal' size="sm" onClick={enableNotifsAndClose}>
                Sure!
             </Button>
             <Button colorScheme='gray' size="sm" onClick={disableNotifsAndClose}>
              No Thanks!
             </Button>
          </Box> 
        </Alert>
      </Container>
    </ChakraBaseProvider>

  ) : (Notification.permission === "granted") ? (

    <ChakraBaseProvider>
      <Button colorScheme='gray' size="sm" onClick={() => notifyUser("Thaks for coperating with me!")}>
        click to show you a thankyou!
      </Button>
    </ChakraBaseProvider>

  ): (
    <>
    <h1>You have disabled notifications</h1>
    </>
  )
}

export default App
