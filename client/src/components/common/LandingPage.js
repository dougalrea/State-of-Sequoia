import React from 'react'
import { Center, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function LandingPage () {
  return (
    <>
      <Center bg='green.100' h='100vh' color='white'>
        <Link to='/home'>
          <Button
            variant='ghost'
            color='orange.800'
            _hover={{ boxShadow: 'md', bg: 'green.500', color: 'white' }}
          >
            Enter Sequoia
          </Button>
        </Link>
      </Center>
    </>
  )
}

export default LandingPage
