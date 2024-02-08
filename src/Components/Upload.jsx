import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = () => {
  return (
    <Container maxW={'container.xl'} height={'100vh'} p={'16'}>
      <VStack h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'} />
        <form>
          <HStack>
            <Input css={{
              "&::file-selector-button": {
                border: "none",
                width: "calc(100% + 36px)",
                height: "100%",
                marginLeft: "",
                color: "purple",
                backgroundColor: "white",
                cursor: "pointer"
              }

            }}
              type='file' required />
            <Button colorScheme='purple' type='submit'>Upload</Button>
          </HStack>

        </form>

      </VStack>


    </Container>
  )
}

export default Upload