import { Form, redirect } from "react-router-dom";
import {
  Box,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Checkbox,
  Button,
} from "@chakra-ui/react";

export default function Create() {
  return (
    <Box maxW="480px" mx="auto" mt={5}>
      <Form method="post" action="/create">
        <FormControl isRequired mb="40px">
          <FormLabel>Task Name</FormLabel>
          <Input type="text" name="title" />
          <FormHelperText>Enter a descriptive task name</FormHelperText>
        </FormControl>
        <FormControl mb="40px">
          <FormLabel>Task Description</FormLabel>
          <Textarea
            placeholder="Enter a detailed description fo the task..."
            name="description"
          />
        </FormControl>
        <FormControl display="flex" alignItems="center" mb="40px">
          <Checkbox name="isPriority" size="lg" colorScheme="purple" />
          <FormLabel mb="0" ml="10px">
            Make this a priority task
          </FormLabel>
        </FormControl>
        <Button type="submit"> Submit</Button>
      </Form>
    </Box>
  );
}

export const createAction = async ({ request }) => {
  const data = await request.formData();

  const task = {
    title: data.get("title"),
    description: data.get("description"),
    isPriority: data.get("isPriority") === "",
  };
  console.log(task);
  return redirect("/");
};
