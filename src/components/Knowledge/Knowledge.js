import React from "react";
import { Text } from '@chakra-ui/react'

const Knowledge = ({ children }) => {

  return (
    <div className="knowledge">
      <h2>Estos son algunos de mis conocimientos:</h2>
      { children }
    </div>
  )

}

export default Knowledge;