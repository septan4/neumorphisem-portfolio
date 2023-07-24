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
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import Image from 'next/image'
import Hero from '../components/hero'
import Works from '../components/works'

const Home = () => (
  <Layout>
    <Hero />
    <Works />
    <Container maxW="container.lg" mt={20}>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          +7 Years Experience Of Video Editing, Motion Graphic Designing, Sound
          Editing, Studio Production, Commercial Advising, Brand Consulting And
          Advertising. Excellent Communication Skills And Ability To Identify
          Clients' Needs And Develop Successful Promotional Strategies.
          Competent In Using Adobe After Effects And Adobe Premiere Pro To
          Fullfill The Needs Of My Clients.
          <Link as={NextLink} href="/works/inkdrop" passHref scroll={false}>
            Inkdrop
          </Link>
          . He publishes content for marketing his products and his YouTube
          channel called &quot;
          <Link
            as={NextLink}
            href="https://www.youtube.com/devaslife"
            passHref
            target="_blank"
          >
            Dev as Life
          </Link>
          &quot; has more than 100k subscribers.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}></Section>

      <Section delay={0.3}></Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
