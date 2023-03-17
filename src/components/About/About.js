import React from "react";
import { Flex, Box, Text } from '@chakra-ui/react'
import { FaArrowRight } from "react-icons/fa";

const About = ({ name, description, employment, dateBirth, location }) => {

  return (
    <Box w="200" h="400" pt={10} pb={10} display="flex" alignItems="center">
      <Flex direction="column" alignItems="center" gap={6}>
        <Text fontSize='3xl' align="center" fontWeight="bold">{ name }</Text>
        <Flex gap={2}>
          <Flex gap={2} alignItems="center">
            <FaArrowRight color="blue"></FaArrowRight>
            <Text fontSize='2xl' align="center" color="blue">Empleo:</Text>
          </Flex>
          <Text fontSize='2xl' align="center" >{ employment }</Text>
        </Flex>
        <Flex gap={2}>
          <Flex alignItems="center" gap={2}>
            <FaArrowRight color="blue"></FaArrowRight>
            <Text fontSize='2xl' align="center" color="blue">Fecha de nacimiento:</Text>
          </Flex>
          <Text fontSize='2xl' align="center" >{ dateBirth }</Text>
        </Flex>
        <Flex gap={2}>
          <Flex alignItems="center" gap={2}>
            <FaArrowRight color="blue"></FaArrowRight>
            <Text fontSize='2xl' align="center" color="blue">Localización:</Text>
          </Flex>
          <Text fontSize='2xl' align="center">{ location }</Text>
        </Flex >
        <Flex gap={2}>
          <Flex align="center" justify="center" gap={2}>
            <Text fontSize='xl' align="center" noOfLines={4}>{ description }</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )

}

export default About;