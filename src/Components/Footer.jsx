import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'


const Footer = () => {
  return (
    <Box mt={['400', '0']} bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>

      <Stack direction={['column', 'row']}>

        <VStack alignItems={'stretch'} w={'full'} px={'4'}>

          <Heading textAlign={'center'} size={'md'} textTransform={"uppercase"}>
            Subscribe For Newsletter
          </Heading>

          <HStack borderBottom={"2px solid white"} py={'2'}>
            <Button p={'0'} colorScheme='purple' variant={"ghost"} borderRadius={"0 20px 20px 0"}>
              <Input placeholder='Enter Your Email' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none' />
              <AiOutlineSend size={20}></AiOutlineSend>
            </Button>

          </HStack>

        </VStack>

        <VStack w={'full'} borderLeft={['none', '2px solid white']} borderRight={['none', '2px solid white']}>
          <Heading textTransform={'uppercase'} textAlign={'center'}>Video hub</Heading>
          <Text>All Right Recieved</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>Social Media</Heading>
          <Button colorScheme='whiteAlpha' variant={'link'}>
            <a target='_blank' href="https:instagram.com">Instagram</a>
          </Button>
        </VStack>

      </Stack>
    </Box>
  )
}

export default Footer