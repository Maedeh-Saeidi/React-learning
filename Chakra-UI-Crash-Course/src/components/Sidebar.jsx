import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { CalendarIcon, EditIcon, AtSignIcon } from "@chakra-ui/icons";
import React from "react";

export default function Sidebar() {
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
      <ListItem>
        <ListIcon as={CalendarIcon} color="white" />
        <NavLink to="/">Dashboard</NavLink>
      </ListItem>
      <ListItem>
        <ListIcon as={EditIcon} color="white" />
        <NavLink to="/">New Task</NavLink>
      </ListItem>
      <ListItem>
        <ListIcon as={AtSignIcon} color="white" />
        <NavLink to="/">Profile</NavLink>
      </ListItem>
    </List>
  );
}
