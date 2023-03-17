import React from "react";
import { Image, Flex, Box } from '@chakra-ui/react'

const ImageCard = ({ children, imageUrl }) => {

  return (
    <Box border="1px solid black" borderRadius="20" p="0 40px 40px 40px" h="420px" textAlign="center">
      <Flex direction="column" alignItems="center" justifyContent="center" pt="10">
        <Image w="200px" h="200px" objectFit="cover" src={imageUrl} p="5"></Image>
        {children}
      </Flex>
    </Box>
  )

}


export default ImageCard;