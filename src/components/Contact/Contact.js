import React from "react";
import { FaLinkedin, FaGithub, FaEnvelopeOpen, FaPhone } from "react-icons/fa";
import {
  Popover,
  Portal,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Flex,
  Text
} from '@chakra-ui/react'

const Contact = ({ linkedinUrl, githubUrl, email, phone}) => {

  return (
    <Flex direction="column" alignItems="center" justifyContent="center" gap={6}>
      <Text fontSize='2xl'>Puedes contactar conmigo a través de las siguientes vías:</Text>
      <Flex direction="row" alignItems="center" justifyContent="center" gap={4}>
        <Popover>
          <PopoverTrigger>
            <Button size='sm' borderRadius={20}>
              <FaLinkedin></FaLinkedin>
            </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Linkedin:</PopoverHeader>
              <PopoverBody>
                { linkedinUrl }
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
        <Popover>
          <PopoverTrigger>
            <Button size='sm' borderRadius={20}>
              <FaGithub></FaGithub>
            </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Github:</PopoverHeader>
              <PopoverBody>
                { githubUrl }
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
        <Popover>
          <PopoverTrigger>
            <Button size='sm' borderRadius={20}>
              <FaEnvelopeOpen></FaEnvelopeOpen>
            </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Email:</PopoverHeader>
              <PopoverBody>
                { email }
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
        <Popover>
          <PopoverTrigger>
            <Button size='sm' borderRadius={20}>
              <FaPhone></FaPhone>
            </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Teléfono:</PopoverHeader>
              <PopoverBody>
                { phone }
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      </Flex>
    </Flex>
  )

}

export default Contact;