import {
  Container,
  Heading,
  Box,
  useColorModeValue,
  chakra,
  keyframes
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})
const ease = [0.08, 0.37, 0.45, 0.89]

const floatAnimation = keyframes`
  0% { transform: translateY(0px) }
  50% {  transform: translateY(-10px) }
  100% {  transform: translateY(0px) }
`
const floatAnimations = keyframes`
  0% { transform: translateY(0px) }
  50% {  transform: translateY(10px) }
  100% {  transform: translateY(0px) }
`
const animationFirst = `${floatAnimation} 3s ease-in-out infinite`
const animationSecond = `${floatAnimations} 5s ease-in-out infinite`

const Hero = () => {
  const boxShadowLight = 'inset 6px 6px 6px #cbced1, inset -6px -6px 6px white'
  const boxShadowDark = 'inset 2px 2px 4px #000, inset -5px -3px 4px #17191e'

  const boxShadowDarkBu =
    ' -3px -3px 3px 0 rgba(255, 255, 255, 0.04), 5px 5px 5px 0 rgba(0, 0, 0, 2)'
  const boxShadowLightBu =
    '4px 4px 6px 0 rgba(0,0,0,.1), -4px -4px 6px rgba(255,255,255,1)'

  const BoxShadowOuter = useColorModeValue(boxShadowLight, boxShadowDark)
  const BoxShadow = useColorModeValue(boxShadowLightBu, boxShadowDarkBu)

  const color = '#8121b5'

  return (
    <Container
      height={{ base: '100%', md: '100vh' }}
      maxW="container.lg"
      display={'flex'}
      alignItems={'center'}
      flexDir={'column'}
      justifyContent={'center'}
      id="home"
    >
      <Box
        mt={{ base: 4, md: 0 }}
        textAlign="center"
        display={'flex'}
        flexDir={{ base: 'column', md: 'row' }}
        alignItems={'center'}
        justifyContent={'center'}
        h={'50%'}
      >
        <Box
          w={{ base: '100%', md: 'fit-content' }}
          h="100%"
          p={5}
          display={'flex'}
          flexDir={{ base: 'row', md: 'column' }}
          justifyContent={'space-between'}
        >
          <Box as={motion.div} animation={animationFirst}>
            <Image
              src="/images/pr.png"
              alt="test"
              p={1}
              width="60"
              height="60"
            />{' '}
          </Box>
          <Box as={motion.div} animation={animationSecond}>
            <Image
              src="/images/ai.png"
              alt="test"
              p={1}
              width="70"
              height="70"
            />{' '}
          </Box>
        </Box>
        <Box
          boxShadow={BoxShadowOuter}
          w="350px"
          h="350px"
          display="inline-block"
          borderRadius="full"
          padding={'30px'}
        >
          <ProfileImage
            boxShadow={BoxShadow}
            src="/soren1.JPG"
            alt="Profile image"
            width="350"
            height="290"
            padding={'20px'}
            borderRadius="full"
            objectFit={'cover'}
            objectPosition="center top"
          />
        </Box>
        <Box
          h={'100%'}
          w={{ base: '100%', md: 'fit-content' }}
          p={5}
          display={'flex'}
          flexDir={{ base: 'row', md: 'column' }}
          justifyContent={'space-between'}
        >
          <Box as={motion.div} animation={animationSecond}>
            <Image
              src="/images/ps.png"
              alt="test"
              p={1}
              width="60"
              height="60"
            />{' '}
          </Box>
          <Box as={motion.div} animation={animationFirst}>
            <Image
              src="/images/ae.png"
              alt="test"
              p={1}
              width="60"
              height="60"
            />{' '}
          </Box>
        </Box>
      </Box>

      <Box p={10} textAlign="center">
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0, transition: { delay: 0.5, duration: 2, ease } }}
        >
          <Heading as="h2" variant="page-title" pb={5}>
            Hello, I&apos;m <chakra.span color={color}>Sourena</chakra.span>{' '}
          </Heading>
        </motion.div>
        <motion.p
          initial={{ x: -500 }}
          animate={{ x: 0, transition: { delay: 0.5, duration: 2, ease } }}
        >
          your all-in-one video editing and marketing professional, rooted in
          years of diverse experience.
          <br />
          Ready to exceed your expectations, from studio to screen!
        </motion.p>
      </Box>
    </Container>
  )
}

export default Hero
