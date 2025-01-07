import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import Skill from '../components/skills'
import Contact from '../components/contact'

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
      <Container maxW="container.lg" mt={20} mb={20}>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title" id="about">
            About
          </Heading>
          <Paragraph>
            With +7 years of experience in video editing, VFX designing, motion
            graphic designing, sound editing, studio production, CRM, marketing
            strategies, branding strategies and advertising, I possess a wealth
            of expertise in these areas. My exceptional communication skills
            enable me to identify the needs of clients effectively and develop
            successful promotional strategies that exceed their expectations.
            <br></br>I am competent in using the required software related to
            the field of work to fulfil the needs of clients. As a professional,
            I approach my work with the utmost dedication and commitment,
            striving always to produce high-quality results that meet the
            client&apos;s specifications.
          </Paragraph>

          <Box my={10}>
            <Skill />
          </Box>
          <Box align="center" my={10}>
            <Button
              as={NextLink}
              href="https://drive.google.com/file/d/1pO4kbdRb2cNW5sxCL3a19mlhudP6RuLn/view"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="none"
              color={activeColor}
              target="_blank"
              boxShadow={BoxShadow}
            >
              My Resume
            </Button>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Contact />
        </Section>

        <Section delay={0.3}></Section>
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
