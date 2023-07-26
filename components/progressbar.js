import React, { useEffect } from 'react'
import {
  Box,
  Text,
  Flex,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { motion, useAnimation } from 'framer-motion'

const ProgressBar = ({ name, image, progress, darkProgress, color, width }) => {
  const progressAnimation = useAnimation()
  const { colorMode } = useColorMode()
  const barValue = colorMode === 'dark' ? darkProgress : progress
  const gradientColor = color
  const bg = colorMode === 'dark' ? 'gray.200' : '#EBECF0'
  useEffect(() => {
    progressAnimation.start({
      width: `${barValue}%`,
      transition: { duration: 2 }
    })
  }, [barValue, progressAnimation])

  const MotionBox = motion(Box)

  const boxShadowLight =
    '7px 7px 15px rgba(55, 84, 170, .15),-7px -7px 20px rgba(255, 255, 255, 1),inset 0px 0px 4px rgba(255, 255, 255, 0),inset 7px 7px 15px rgba(55, 84, 170, .15),inset -7px -7px 20px rgba(255, 255, 255, 1),0px 0px 4px rgba(255, 255, 255, .2)'
  const boxShadowDark =
    'inset -2px -2px 6px rgba(255, 255, 255, 0.1), inset 2px 2px 6px rgba(0, 0, 0, 0.8)'
  const boxShadow = useColorModeValue(boxShadowLight, boxShadowDark)
  return (
    <Box w={'100%'} px={{ base: 0, lg: 10 }}>
      <Flex alignItems={'center'} mb={1}>
        <img src={image} alt={name} width={width} height={50} />{' '}
        <Text ml={1}>{name}</Text>
      </Flex>
      <Box h="4" borderRadius="md" boxShadow={boxShadow} p="0.5">
        <MotionBox
          h="100%"
          borderRadius="md"
          bgGradient={`linear(to-r, ${gradientColor}, ${gradientColor})`}
          animate={progressAnimation}
        />
      </Box>
    </Box>
  )
}

export default ProgressBar
