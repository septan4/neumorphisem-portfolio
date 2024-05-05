import {
  Container,
  SimpleGrid,
  useColorModeValue,
  Box,
  Button
} from '@chakra-ui/react'
import Layout from './layouts/article'
import Section from './section'
import { WorkGridItem } from './grid-item'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const video = 'https://www.youtube-nocookie.com/embed/8QOVtlgGZg0'
const video1 = 'https://www.youtube-nocookie.com/embed/QKdy4V5htcI'
const video2 = 'https://www.youtube.com/embed/HsNRoy7tpC8'
const video3 = 'https://www.youtube.com/embed/NU1ARZVCLGo'
const video4 = 'https://www.youtube.com/embed/qO6LHn9SQzs'
const video5 = 'https://www.youtube.com/embed/pZcBJafF79w'
const video6 = 'https://www.youtube.com/embed/eODz5Cjvws4'
const video7 = 'https://www.youtube.com/embed/PzdVtVdYstw'
const video8 = 'https://www.youtube.com/embed/91PyAkfKtzU'
const video9 = 'https://www.youtube.com/embed/XQyqqapJxV0?si=w_92mKMJaJUze3op'
const video10 = 'https://www.youtube.com/embed/Jf6sy9sCw9k?si=qBCbpiSe-kazFYFW'
const video11 = 'https://www.youtube.com/embed/UK0TsFM5mr8?si=TV0XwS8_CqhT0SCy'
const video12 = 'https://www.youtube.com/embed/cGU4FVXF1Dw?si=naribZEepsuDHWv2'
const video13 = 'https://www.youtube.com/embed/m2PBj8P8PQw?si=l4GhkwRyIuQ4WfC0'
const video14 = 'https://www.youtube.com/embed/EBRf93rt8YU?si=1hs23P28GzxODnFf'
const video15 = 'https://www.youtube.com/embed/xGRbWcVt7OY?si=k2w6tUQr2986ZFkX'

const Works = () => {
  const boxShadowDarkBu =
    ' -3px -3px 3px 0 rgba(255, 255, 255, 0.04), 5px 5px 5px 0 rgba(0, 0, 0, 2)'
  const boxShadowLightBu =
    '4px 4px 6px 0 rgba(0,0,0,.1), -4px -4px 6px rgba(255,255,255,1)'

  const inactiveBoxShadow = useColorModeValue(boxShadowLightBu, boxShadowDarkBu)
  const activeColor = useColorModeValue('#8121b5', 'whiteAlpha.900')
  const [visibleCount, setVisibleCount] = useState(4)
  const videos = [
    video9,
    video,
    video1,
    video3,
    video2,
    video4,
    video8,
    video6,
    video7,
    video5,
    video10,
    video11,
    video12,
    video13,
    video14,
    video15
  ]
  const handleSeeMoreClick = () => {
    if (visibleCount === 4) {
      setVisibleCount(videos.length) // Show all videos
    } else {
      setVisibleCount(4) // Show only 4 videos
    }
  }

  return (
    <Layout title="Works">
      <Container maxW="container.lg" id="works">
        <Box width="100%">
          <SimpleGrid columns={[1, 1, 2]} gap={[1, 1, 5]}>
            {videos.slice(0, 4).map((videoSrc, index) => (
              <Section key={index}>
                <WorkGridItem src={videoSrc}></WorkGridItem>
              </Section>
            ))}
          </SimpleGrid>
          <AnimatePresence>
            {visibleCount > 4 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <SimpleGrid
                  columns={[1, 1, 2]}
                  gap={[1, 1, 5]}
                  p={{ base: 0, lg: 2 }}
                >
                  {videos.slice(4).map((videoSrc, index) => (
                    <Section key={index}>
                      <WorkGridItem src={videoSrc}></WorkGridItem>
                    </Section>
                  ))}
                </SimpleGrid>
              </motion.div>
            )}
          </AnimatePresence>
          <Button
            margin={'auto'}
            display="flex"
            colorScheme="none"
            color={activeColor}
            onClick={handleSeeMoreClick}
            boxShadow={inactiveBoxShadow}
          >
            {visibleCount === 4 ? 'See More' : 'See Less'}
          </Button>
        </Box>
      </Container>
    </Layout>
  )
}

export default Works
export { getServerSideProps } from './chakra'
