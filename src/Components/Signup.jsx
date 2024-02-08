import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';



const Signup = () => {
  return (
    <Container h={'100vh'} maxW={'container.xl'}>
      <form>
        <VStack alignItems={'stretch'} spacing={'6'} w={['full', '96']} m={'auto'} my={'16'}>
          <Heading>Create Your Account</Heading>

          <Input type='text' placeholder='Name' required focusBorderColor='purple.500' />

          <Input type='email' placeholder='Email' required focusBorderColor='purple.500' />
          <Input type='password' placeholder='Password' required focusBorderColor='purple.500' />
          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>Forget Password?</Link>
          </Button>

          <Button colorScheme='purple' type='submit'>Sign Up</Button>

          <Text textAlign={'right'}>

            Already Account?{" "}
            <Button variant={'link'} colorScheme='purple'>
              <Link to={'/login'}>Login</Link>
            </Button>

          </Text>

        </VStack>

      </form>

    </Container>
  )
}

export default Signup