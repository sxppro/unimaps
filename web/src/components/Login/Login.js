import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import {
  Flex,
  Box,
  VStack,
  Heading,
  Input,
  Button,
  Spacer,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

import scope from '../../apiAccess/apiAccess.js';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Navigate to={{ pathname: '/map' }} />;
  }
  return (
    <Flex
      flexDirection="column"
      align="center"
      justify="center"
      p={2}
      w="100vw"
      h="100vh"
    >
      <Box as={'form'} p={4} w="100%" maxW="400px">
        <VStack spacing={6}>
          <Heading
            p={2}
            size="2xl"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
          >
            Log In
          </Heading>
          <FormControl>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input
              id="username"
              type="text"
              name="username"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <FormLabel htmlFor="hash" mt={3}>
              Password
            </FormLabel>
            <Input
              id="hash"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              type="password"
              name="password"
            />
          </FormControl>
          <Spacer />
          <Button
            onClick={(e) => {
              e.preventDefault();
              scope.login(username, password);
              setRedirect(true);
            }}
            type="submit"
            colorScheme="teal"
            w="100%"
          >
            Login
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Login;
