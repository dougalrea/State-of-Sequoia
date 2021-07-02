import React from 'react'
import {
  Center,
  Button,
  useDisclosure,
  SlideFade,
  Image,
  Flex,
  Box,
  Spacer
} from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'

function LandingPage () {
  const { isOpen, onToggle } = useDisclosure()
  const history = useHistory()

  return (
    <>
      <Box bg='green.100'>
        <Flex>
          <SlideFade in={!isOpen} offsetX='-20vw' unmountOnExit={true}>
            <Box>
              <Image
                src='https://i.imgur.com/m5G07pE.png?3'
                bg='green.100'
                maxH='100vh'
              />
            </Box>
          </SlideFade>
          <Spacer />
          <Center bg='green.100' color='white' h='100vh'>
            {/* <Link to='/home'> */}
            <Button
              onClick={() => {
                onToggle()
                setTimeout(() => {
                  history.push('/home')
                }, 500)
              }}
              variant='ghost'
              color='orange.800'
              _hover={{ boxShadow: 'md', bg: 'green.600', color: 'white' }}
            >
              Enter Sequoia
            </Button>
            {/* </Link> */}
          </Center>
          <Spacer />
          <SlideFade in={!isOpen} offsetX='20vw' unmountOnExit={true}>
            <Box>
              <Image
                src='https://i.imgur.com/LXZJuQF.png?2'
                bg='green.100'
                maxH='100vh'
              />
            </Box>
          </SlideFade>
        </Flex>
      </Box>
    </>
  )
}

export default LandingPage
