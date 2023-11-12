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

const video = 'https://www.youtube.com/embed/vQrCATU_y7U'
const video1 = 'https://www.youtube.com/embed/0z2whTJF97g'
const video2 = 'https://www.youtube.com/embed/2j-2xm57G_Y'
const video3 = 'https://www.youtube.com/embed/GDvJTz755Jc'
const video4 = 'https://www.youtube.com/embed/b8RxrFdDdLQ'
const video5 = 'https://www.youtube.com/embed/YhDWtBFjZrc'

const Works = () => {
  const boxShadowDarkBu =
    ' -3px -3px 3px 0 rgba(255, 255, 255, 0.04), 5px 5px 5px 0 rgba(0, 0, 0, 2)'
  const boxShadowLightBu =
    '4px 4px 6px 0 rgba(0,0,0,.1), -4px -4px 6px rgba(255,255,255,1)'

  const inactiveBoxShadow = useColorModeValue(boxShadowLightBu, boxShadowDarkBu)
  const activeColor = useColorModeValue('#8121b5', 'whiteAlpha.900')
  const [visibleCount, setVisibleCount] = useState(4)
  const videos = [video, video1, video2, video3, video4, video5]
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
