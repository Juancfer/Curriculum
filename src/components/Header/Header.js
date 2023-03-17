import React from "react";
import { Flex, Text, Image, Box } from '@chakra-ui/react'

const Header = ({ name, description, imageUrl }) => {

  return (
    <Box pt={10} pb={10}>
      <Flex direction="row" alignItems="center" justifyContent="center" gap={6}>
        <Flex direction="column" justifyContent="center">
          <Text fontSize='3xl'>¡Hola! Me llamo</Text>
          <Text fontSize='3xl' bgGradient='linear(to-l, #0000FF, #BFBFFF)' bgClip='text'>{ name }</Text>
          <Text fontSize='xl'>{ description }</Text>
        </Flex>
        <Image src={ imageUrl } borderRadius='10px' boxSize='200px' objectFit='cover' alt="image" />
      </Flex>
    </Box>
  )

}

export default Header;