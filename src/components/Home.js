import { Box, Container, Heading, Stack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import imge1 from "../assets/img1.jpg"
import imge2 from "../assets/img2.jpg"
import imge3 from "../assets/img3.jpg"
import png1 from "../assets/png1.png"

const HedingOption = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '2xl'
}

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} >
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={"fit-content"}
          m='auto'
          borderBottom={"2px solid"}

        >
          Services
        </Heading>
        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={png1} h={['40', '400']} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo
            tempora deleniti quod, est eos veniam autem asperiores rem, nam
            laudantium ut, similique ducimus amet sequi et voluptas iusto rerum
            at aliquid numquam corporis ipsa reprehenderit? Porro iusto magnam,
            sit vero deleniti, non nemo rem accusamus neque, quibusdam ab.
            Libero, reprehenderit recusandae labore eaque, aspernatur aliquid
            modi soluta ullam voluptatum unde repellat in molestias quod?
            Doloribus ratione illum quisquam earum consequuntur nam voluptatem,
            velit culpa maiores. Inventore esse illum excepturi dolores est

          </Text>
        </Stack>
      </Container>

    </Box>
  )

}
const MyCarousel = () => (
  <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
    <Box w={'full'} h={'100vh'}>
      <Image src={imge1} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'}{...HedingOption}>Whach the Future</Heading>
    </Box>


    <Box w={'full'} h={'100vh'}>
      <Image src={imge2} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'}{...HedingOption}>Lern & Wach </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={imge3} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...HedingOption}>Future is Skill</Heading>
    </Box>

  </Carousel>
)



export default Home
