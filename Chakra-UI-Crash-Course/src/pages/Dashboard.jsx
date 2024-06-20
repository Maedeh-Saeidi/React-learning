import { ViewIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  SimpleGrid,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Flex,
  Button,
  HStack,
  Divider,
  Avatar,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("/data/db.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok!");
        }
        return response.json();
      })
      .then((data) => {
        setTasks(data.tasks);
        console.log(tasks);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <Box p={5}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="10px">
        {tasks.map((task) => (
          <Card
            key={task.id}
            borderTop="8px"
            mb="40px"
            borderColor="purple.400"
            bg="white"
          >
            <CardHeader>
              <Flex gap={10}>
                <Avatar src={task.img}></Avatar>
                <Box>
                  <Heading as="h3" size="sm" fontStyle="fonts.body">
                    {task.title}
                  </Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text color="gray.500">{task.description}</Text>
            </CardBody>
            <Divider borderColor="gray.200" />
            <CardFooter>
              <HStack spacing={4}>
                <Button variant="ghost" leftIcon={<ViewIcon />}>
                  Watch
                  <Button variant="ghost" leftIcon={<EditIcon />}>
                    Leave a comment
                  </Button>
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}
