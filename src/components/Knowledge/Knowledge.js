import React from "react";
import { Text, Box } from '@chakra-ui/react'

const Knowledge = ({ children }) => {

  return (
    <Box boxSize="75%" m="0 auto" pb="20">
      <Text align="center" fontSize='3xl' pt="10" >Estos son algunos de mis conocimientos:</Text>
      { children }
    </Box>
  )

}

export default Knowledge;