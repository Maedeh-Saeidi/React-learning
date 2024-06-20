import React from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Spacer,
  HStack,
  useToast,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import { UnlockIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Logged out",
      description: "Successfully logged out",
      duration: 5000,
      isClosable: true,
      status: "success",
      position: "top",
      icon: <UnlockIcon />,
    });
  };
  return (
    <>
      <Flex as="nav" p="10px" alignItems="center" gap="10px">
        <Heading as="h1">Maedeh Tasks</Heading>
        <Spacer />

        <HStack spacing="20px">
          <Avatar src="/img/mario.png" name="Mario" bg="purple.400">
            <AvatarBadge w="1.3em" bg="teal.500">
              <Text fontSize="xl" color="white">
                3
              </Text>
            </AvatarBadge>
          </Avatar>

          <Text>MaedehSaeidi@gmail.com</Text>
          <Button colorScheme="purple" onClick={showToast}>
            Logout
          </Button>
        </HStack>
      </Flex>
      {/* <Flex bg="gray.200" justify="space-between" wrap="wrap" gap="2">
        <Box w="150px" h="50px" bg="red">
          1
        </Box>
        <Box w="150px" h="50px" bg="blue">
          2
        </Box>
        <Box w="150px" h="50px" bg="green" flexGrow="1">
          3
        </Box>
        <Box w="150px" h="50px" bg="yellow" flexGrow="2">
          4
        </Box>
      </Flex> */}
    </>
  );
}
