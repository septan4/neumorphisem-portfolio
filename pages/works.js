import {
  Container,
  Heading,
  SimpleGrid,
  useColorModeValue,
  Box
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import React, { useState } from 'react'
import styled from 'styled-components'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { useTheme } from '@chakra-ui/react'

const video = 'https://www.youtube-nocookie.com/embed/8QOVtlgGZg0'
const video1 = 'https://www.youtube-nocookie.com/embed/QKdy4V5htcI'
const video2 = 'https://www.youtube.com/embed/HsNRoy7tpC8'
const video3 = 'https://www.youtube.com/embed/NU1ARZVCLGo'
const video4 = 'https://www.youtube.com/embed/qO6LHn9SQzs'
const video5 = 'https://www.youtube.com/embed/pZcBJafF79w'
const video6 = 'https://www.youtube.com/embed/eODz5Cjvws4'
const video7 = 'https://www.youtube.com/embed/PzdVtVdYstw'

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`

const TabButton = styled.button`
  border-radius: 5px;
  border: none;
  margin: 0 10px;
  padding: 10px 20px;
  box-shadow: ${props => props.boxShadow};
  &:focus {
    outline: none;
  }
`

const TabContent = styled.div`
  padding: 20px;

  border-radius: 5px;

  transition: opacity 300ms ease-in-out;
  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 1;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0;
  }
`

const tabs = ['New Works', 'Old Works']

const Works = () => {
  const theme = useTheme()
  const colorMode = theme.colorMode
  const boxShadowDarkBu =
    ' -3px -3px 3px 0 rgba(255, 255, 255, 0.04), 5px 5px 5px 0 rgba(0, 0, 0, 2)'
  const boxShadowLightBu =
    '4px 4px 6px 0 rgba(0,0,0,.1), -4px -4px 6px rgba(255,255,255,1)'
  const boxShadowLight = 'inset 6px 6px 6px #cbced1, inset -6px -6px 6px white'
  const boxShadowDark = 'inset 2px 2px 4px #000, inset -5px -3px 4px #17191e'

  const activeBoxShadow = useColorModeValue(boxShadowLight, boxShadowDark)
  const inactiveBoxShadow = useColorModeValue(boxShadowLightBu, boxShadowDarkBu)

  const [activeTab, setActiveTab] = useState(tabs[0])
  return (
    <Layout title="Works">
      <Container maxW="container.lg">
        <Box width="100%" boxShadow={inactiveBoxShadow} borderRadius="lg" p={2}>
          <Heading as="h3" fontSize={20} mb={4} p={4}>
            Works
          </Heading>
          <TabContainer>
            {tabs.map(tab => (
              <TabButton
                key={tab}
                onClick={() => setActiveTab(tab)}
                boxShadow={
                  activeTab === tab ? activeBoxShadow : inactiveBoxShadow
                }
              >
                {tab}
              </TabButton>
            ))}
          </TabContainer>
          <SwitchTransition>
            <CSSTransition
              key={activeTab}
              addEndListener={(node, done) =>
                node.addEventListener('transitionend', done, false)
              }
              classNames="fade"
            >
              <TabContent>
                {activeTab === 'New Works' ? (
                  <SimpleGrid columns={[1, 1, 2]} gap={[1, 1, 5]}>
                    <Section>
                      <WorkGridItem src={video}></WorkGridItem>
                    </Section>
                    <Section>
                      <WorkGridItem src={video1}></WorkGridItem>
                    </Section>
                    <Section>
                      <WorkGridItem src={video2}></WorkGridItem>
                    </Section>
                    <Section>
                      <WorkGridItem src={video3}></WorkGridItem>
                    </Section>
                    <Section>
                      <WorkGridItem src={video4}></WorkGridItem>
                    </Section>
                    <Section>
                      <WorkGridItem src={video5}></WorkGridItem>
                    </Section>
                    <Section>
                      <WorkGridItem src={video6}></WorkGridItem>
                    </Section>
                    <Section>
                      <WorkGridItem src={video7}></WorkGridItem>
                    </Section>
                  </SimpleGrid>
                ) : (
                  `${activeTab} content`
                )}
              </TabContent>
            </CSSTransition>
          </SwitchTransition>
        </Box>
      </Container>
    </Layout>
  )
}

export default Works
export { getServerSideProps } from '../components/chakra'
