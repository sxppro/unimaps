import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Heading, Spacer, Button } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Flex flexDirection="column" h="100vh">
      <Flex p={4} w="100%">
        <Box p={2}>
          <Heading size="md" fontWeight="semibold" color="white">
            UniMaps
          </Heading>
        </Box>
        <Spacer />
        <Link to="login">
          <Button aria-label="Admin login button">Events Login</Button>
        </Link>
      </Flex>
      <Flex alignItems="center" justifyContent="center" p={8} h="full">
        <Heading
          p={2}
          size="4xl"
          align="center"
          fontWeight="extrabold"
          bgGradient="linear(to-l, #ffcb57, #a960ee)"
          bgClip="text"
        >
          Find your next big event
        </Heading>
      </Flex>
    </Flex>
  );
};

export default HomePage;
