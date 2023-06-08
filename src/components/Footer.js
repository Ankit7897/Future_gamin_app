import React from 'react'
import { Box, Heading, HStack, Stack, VStack,Button, Input,Text } from "@chakra-ui/react"
import {AiOutlineSend} from "react-icons/ai"

const Footer = () => {
    return <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'} >

        <Stack direction={['column', 'row']}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                <Heading size={'md'} textTransform={'uppercase'}>Subscribe to get updates</Heading>

                <HStack borderBottom={'2px solid white'} py={'2'}>
                    <Input placeholder='Enter email here...'border={'none'}
                     borderRadius={'none'} outlin={'none'} focusBorderColor={'none'}/>
                    <Button p={"0"} colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                      <AiOutlineSend size={20}/>
                    </Button>
                </HStack>
            </VStack>

            <VStack w={'full'} 
            borderLeft={['none','1px solid white']}
            borderRight={['none','1px solid white']}
            >
            
            <Heading textTransform={'uppercase'} textAlign={'center'}>Video hub</Heading>

            <Text>All @rights reserved</Text>

            </VStack>

            <VStack w={'full'}>
            
            <Heading size={'md'} textTransform={'uppercase'}>Social Media</Heading>
             <Button variant={'link'} colorScheme={'purple'}>
                <a href='https://www.linkedin.com/in/ankit-yadav-755a14209/'>Linkedin</a>
             </Button>

             <Button variant={'link'} colorScheme={'purple'}>
                <a href='https://www.facebook.com/profile.php?id=100045414722957'>Facebook</a>
             </Button>
            </VStack>

        </Stack>

    </Box>
}

export default Footer
