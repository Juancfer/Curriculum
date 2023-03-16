import React from "react";
import { Flex, Box, Text } from '@chakra-ui/react'
import { FaArrowRight } from "react-icons/fa";

const About = ({ name, description, employment, dateBirth, location }) => {

  return (
    <Box pt={10} pb={10}>
      <Flex direction="column" alignItems="center" gap={6}>
        <Text fontSize='3xl' fontWeight="bold">{ name }</Text>

        <Flex direction="row" gap={2}>
          <Flex direction="row" gap={2} alignItems="center">
            <FaArrowRight color="blue"></FaArrowRight>
            <Text fontSize='2xl' color="blue">Empleo:</Text>
          </Flex>
          <Text fontSize='2xl'>{ employment }</Text>
        </Flex>
        <Flex direction="row" gap={2}>
          <Flex direction="row" alignItems="center" gap={2}>
            <FaArrowRight color="blue"></FaArrowRight>
            <Text fontSize='2xl' color="blue">Fecha de nacimiento:</Text>
          </Flex>
          <Text fontSize='2xl'>{ dateBirth }</Text>
        </Flex>
        <Flex direction="row" gap={2}>
          <Flex direction="row" alignItems="center" gap={2}>
            <FaArrowRight color="blue"></FaArrowRight>
            <Text fontSize='2xl' color="blue">Localización:</Text>
          </Flex>
          <Text fontSize='2xl'>{ location }</Text>
        </Flex>

        <Text fontSize='xl'>{ description }</Text>
      </Flex>
    </Box>
  )

}

export default About;