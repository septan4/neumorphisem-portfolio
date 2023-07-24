import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import Hero from '../components/hero'
import Works from '../components/works'

const Home = () => {
  const boxShadowDarkBu =
    ' -3px -3px 3px 0 rgba(255, 255, 255, 0.04), 5px 5px 5px 0 rgba(0, 0, 0, 2)'
  const boxShadowLightBu =
    '4px 4px 6px 0 rgba(0,0,0,.1), -4px -4px 6px rgba(255,255,255,1)'
  const BoxShadow = useColorModeValue(boxShadowLightBu, boxShadowDarkBu)
  const activeColor = useColorModeValue('#8121b5', 'whiteAlpha.900')
  return (
    <Layout>
      <Hero />
      <Works />
      <Container maxW="container.lg" mt={20}>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>
            +7 Years Experience Of Video Editing, Motion Graphic Designing,
            Sound Editing, Studio Production, Commercial Advising, Brand
            Consulting And Advertising. Excellent Communication Skills And
            Ability To Identify Clients' Needs And Develop Successful
            Promotional Strategies. Competent In Using Adobe After Effects And
            Adobe Premiere Pro To Fullfill The Needs Of My Clients.
          </Paragraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="none"
              color={activeColor}
              boxShadow={BoxShadow}
            >
              My Resume
            </Button>
          </Box>
        </Section>

        <Section delay={0.2}></Section>

        <Section delay={0.3}></Section>
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
