import { Button, Container, Flex, HStack, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { PlusSquareIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

const NavBar = () => {
    const {colorMode,toggleColorMode} =useColorMode();

    return (
        <Container maxW={'1140px'} px={4}>
            <Flex
                alignItems={'center'}
                justifyContent={'space-between'}
                flexDir={{
                    base: 'column',
                    sm: 'row'
                }}
                h={16}
            >
                <Text
                    fontSize={{ base: "22", sm: "28" }}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    textAlign={"center"}
                    bgGradient={"linear(to-r, cyan.400, blue.500)"}
                    bgClip={"text"}
                >
                    <Link to={"/"}>Product Store 🛒</Link>
                </Text>
                <HStack alignItems={'center'} spacing={2}>
                    <Link to='/create'>
                    <Button>
                        <PlusSquareIcon fontSize={20}/>
                    </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode == 'light' ? <MoonIcon fontSize={20} /> : <SunIcon fontSize={20} />}
                    </Button>
                </HStack>
            </Flex>

        </Container>
    )
}

export default NavBar