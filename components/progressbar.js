import React, { useEffect } from 'react'
import { Box, Text, Flex, useColorMode } from '@chakra-ui/react'
import { motion, useAnimation } from 'framer-motion'

const ProgressBar = ({
  name,
  image,
  progress,
  darkProgress,
  color,
  darkColor
}) => {
  const progressAnimation = useAnimation()
  const { colorMode } = useColorMode()
  const barValue = colorMode === 'dark' ? darkProgress : progress
  const gradientColor = colorMode === 'dark' ? darkColor : color
  const bg = colorMode === 'dark' ? 'gray.200' : '#1a202c'
  useEffect(() => {
    progressAnimation.start({
      width: `${barValue}%`,
      transition: { duration: 2 }
    })
  }, [barValue, progressAnimation])

  const MotionBox = motion(Box)
  return (
    <Box w={'100%'}>
      <Flex alignItems={'center'} mb={1}>
        <img src={image} alt={name} width={50} height={50} />{' '}
        <Text>{name}</Text>
      </Flex>
      <Box h="3" borderRadius="md" bg={bg}>
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
