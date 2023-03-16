import React from "react";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
} from '@chakra-ui/react'

const MyProjects = ({ imageUrl, title, description }) => {
  
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div className="projects">
      <Button onClick={onOpen}>
        <Image src={ imageUrl } alt="image" />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{ title }</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            { description }
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default MyProjects;