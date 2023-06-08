import React from 'react'
import { Button, Container,Heading,Input,VStack,Text, Avatar } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Sigup = () => {
  return  <Container maxW={'container.xl'} h={'100vh'} p={'16'}>

  <form>
 
   <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
    
    <Heading alignSelf={'center'}>VIDEO HUB</Heading>
    <Avatar alignSelf={'center'} boxSize={'12'}/>
    <Input placeholder={'Name'} type={"text"} required focusBorderColor={'purple.500'}/>
    <Input placeholder={'Email'} type={"email"} required focusBorderColor={'purple.500'}/>
    <Input placeholder={'Password'} type={"password"} required focusBorderColor={'purple.500'}/>
 
   
    <Button colorScheme={'purple'} type={'submit'}>Sigup</Button>
 
    <Text textAlign={'right'}>Alredy sigup?{' '}
    <Button variant={'link'} alignSelf={'flex-end'}>
     <Link to={'/login'}>LogIn</Link>
    </Button>
 
    </Text>
 
 
   </VStack>
 
  </form>
 
   </Container>
}

export default Sigup
