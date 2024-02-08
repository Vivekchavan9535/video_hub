import React from 'react'
import { Box, Container, Stack, position, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../Assets/1.jpg'
import img2 from '../Assets/2.jpg'
import img3 from '../Assets/3.jpg'
import img4 from '../Assets/4.jpg'
import img5 from '../Assets/5.png'
import { Heading, Image } from '@chakra-ui/react';



const headingoptions = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  texttransform: "uppercase",
  p: "4",
  size: "4xl"


}



const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.lg'} h={'100vh'}>
        <Heading textTransform={'uppercase'} w={'fit-content'} borderBottom={'2px solid black'} pt={'10'} m="auto">Services</Heading>

        <Stack h={['130vh', 'full']} p={['7', '2']} alignItems={'center'} direction={['column', 'row']} >
          <Image src={img5} h={['300', '300']} />

          <Text letterSpacing={"widest"} lineHeight={"190%"} p={['', '16']} mt={['2']} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo rerum eum qui, iste, aperiam incidunt pariatur perferendis praesentium sequi aut tempore labore accusamus nulla laboriosam iusto dolorem mollitia eius.
            s eius vero nam sapiente cum similique odio quidem sed deleniti. Vel, deleniti.
            Aperiam officiis facere ha
            culpa qui suscipit sequi tempore, fugit repellat minus? Mollitia nemo quos ea dignissimos.
            Earum accusamus repellendus asperiores assumenda dignissimos, dolor maiores perspiciatis, maxime molestias officiis praesentium eos at nam iure nobis? Tempora nostrum laboriosam non totam distinctio doloremque cum quae delectus, soluta hic!</Text>


        </Stack>

      </Container>

    </Box>

  )


};

const MyCarousel = () => (

  <Carousel autoPlay infiniteLoop interval={1000} showThumbs={false} showStatus={false} showArrows={false} >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} />
      <Heading {...headingoptions} bgColor={"blackAlpha.600"} color={"white"}>Watch The Future</Heading>

    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img2} />
      <Heading {...headingoptions} bgColor={"whiteAlpha.900"} color={"black"}>Future is Gaming</Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img3} />
      <Heading {...headingoptions} bgColor={"whiteAlpha.600"} color={"black"}>Gaming console</Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img4} />
      <Heading {...headingoptions} bgColor={"whiteAlpha.600"} color={"black"}>Night Life is Cool</Heading>
    </Box>

  </Carousel>
)


export default Home