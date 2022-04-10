import { React, useState } from 'react';
import { Navigate } from 'react-router-dom';
import {
  SimpleGrid,
  GridItem,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Textarea,
} from '@chakra-ui/react';
import './AddEvent.css';

const AddEvent = () => {
  const [redirect, setRedirect] = useState(false);
  const [data, setData] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setRedirect(true);
    setData(event);
  };

  if (redirect) {
    return <Navigate to={{ pathname: '/', data: { data } }} />;
  }

  return (
    <SimpleGrid
      as="form"
      onSubmit={handleSubmit}
      className="add-event-container"
      rounded="lg"
      columns={2}
      columnGap={4}
      rowGap={2}
      padding={4}
    >
      <GridItem colSpan={2} rowSpan={1}>
        <Heading size="xl">Add Event</Heading>
      </GridItem>
      <GridItem colSpan={2} rowSpan={1}>
        <FormControl>
          <FormLabel htmlFor="eventName">Name</FormLabel>
          <Input id="eventName" type="text" name="eventName"></Input>
        </FormControl>
      </GridItem>
      <GridItem colSpan={1} rowSpan={1}>
        <FormControl>
          <FormLabel htmlFor="eventDate">Date</FormLabel>
          <Input id="eventDate" type="text" name="eventDate"></Input>
        </FormControl>
      </GridItem>
      <GridItem colSpan={1} rowSpan={1}>
        <FormControl>
          <FormLabel htmlFor="eventTime">Time</FormLabel>
          <Input id="eventTime" type="text" name="eventTime"></Input>
        </FormControl>
      </GridItem>
      <GridItem colSpan={2} rowSpan={1}>
        <FormControl>
          <FormLabel htmlFor="eventDetails">Additional details</FormLabel>
          <Textarea id="eventDetails"></Textarea>
        </FormControl>
      </GridItem>
      <GridItem colSpan={2} rowSpan={1}>
        <Button type="submit" size="lg" w="full">
          Add Event
        </Button>
      </GridItem>
    </SimpleGrid>
  );
};

export default AddEvent;
