import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Input,
  Spinner,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  registerNow,
  registerReset,
} from '../redux/LoginReducer/Action';

function Register() {
  const navigate = useNavigate();
  const toast = useToast();

  const [details, setDetails] = useState({
    email: '',
    password: '',
    name: '',
  });

  const dispatch = useDispatch();
  const loading = useSelector((store) => store.LoginReducer.isLoading);
  const registered = useSelector((store) => store.LoginReducer.isRegistered);

  useEffect(() => {
    if (registered) {
      dispatch(registerReset());
      toast({
        title: 'Account created.',
        status: 'success',
        duration: 4000,
        isClosable: true,
      });
      navigate('/');
    }
  }, [registered, dispatch, navigate, toast]);

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerNow(details));
    setDetails({
      email: '',
      password: '',
      name: '',
    });
  };

  return loading ? (
    <Spinner
      thickness="4px"
      mt="25%"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  ) : (
    <Box h="100vh" bg="#003049">
      <VStack pt="15%" pb="10px">
        <Box boxSize={{ base: '80%', md: '50%', lg: '30%' }}>
          <Text as="b" color="white" fontSize="4xl">
            Register
          </Text>
          <form onSubmit={handleRegister}>
            <Input
              type="text"
              value={details.name}
              onChange={(e) =>
                setDetails({ ...details, name: e.target.value })
              }
              placeholder="Name"
              m="10px"
              required
              bg="white"
            />
            <Input
              type="email"
              value={details.email}
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              placeholder="Email"
              required
              bg="white"
              m="10px"
            />
            <Input
              type="password"
              value={details.password}
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              placeholder="Password"
              required
              bg="white"
              m="10px"
            />
            <Button type="submit">Register</Button>
          </form>
        </Box>
      </VStack>
      <Link to="/">
        <Text color="white" as="b">
          <u>Login</u>
        </Text>
      </Link>
    </Box>
  );
}

export default Register;
