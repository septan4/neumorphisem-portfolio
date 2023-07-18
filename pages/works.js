import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

const test = 'https://www.youtube.com/embed/-2zYLzPNlZU'

const Works = () => (
  <Layout title="Works">
    <Container maxW="container.lg">
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem src={test}></WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem src={test}></WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem src={test}></WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem src={test}></WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem src={test}></WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem src={test}></WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem src={test}></WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
