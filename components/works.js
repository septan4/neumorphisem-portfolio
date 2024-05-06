import * as React from 'react'
import {
  Box,
  Tab,
  Tabs,
  TabList,
  Container,
  Heading,
  TabPanel,
  TabPanels,
  useColorModeValue,
  Flex
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Section from '../components/section'
import NewWorks from '../components/newWorks'
import OldWorks from '../components/oldWorks'

import Layout from './layouts/article'
const MotionBox = motion(Box)

function MyTabs() {
  const [tabIndex, setTabIndex] = React.useState(0)

  const handleTabsChange = index => {
    setTabIndex(index)
  }

  const boxShadowDarkBu =
    ' -3px -3px 3px 0 rgba(255, 255, 255, 0.04), 5px 5px 5px 0 rgba(0, 0, 0, 2)'
  const boxShadowLightBu =
    '4px 4px 6px 0 rgba(0,0,0,.1), -4px -4px 6px rgba(255,255,255,1)'
  const boxShadowLight = 'inset 6px 6px 6px #cbced1, inset -6px -6px 6px white'
  const boxShadowDark =
    'inset 3px 3px 5px rgba(0,0,0,.7),inset -3px -3px 5px rgba(225,225,225,.1)'

  const activeBoxShadow = useColorModeValue(boxShadowLight, boxShadowDark)
  const inactiveBoxShadow = useColorModeValue(boxShadowLightBu, boxShadowDarkBu)
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  const activeColor = useColorModeValue('#8121b5', 'whiteAlpha.900')
  return (
    <Layout title="Works">
      <Container maxW="container.lg" id="works">
        <Box
          width="100%"
          boxShadow={inactiveBoxShadow}
          borderRadius="lg"
          p={{ base: 2, lg: 4 }}
        >
          <Heading as="h3" variant="section-title" fontSize={20} mb={4} p={4}>
            Works
          </Heading>

          <Tabs
            index={tabIndex}
            onChange={handleTabsChange}
            variant="unstyled"
            isLazy
          >
            <TabList display="flex" justifyContent="center" mb={4}>
              <Flex direction="row" justifyContent="space-between" w="260px">
                <Tab
                  w="120px"
                  boxShadow={inactiveBoxShadow}
                  color={inactiveColor}
                  _selected={{ boxShadow: activeBoxShadow, color: activeColor }}
                  p={4}
                  borderRadius="xl"
                >
                  New Works
                </Tab>
                <Tab
                  w="120px"
                  color={inactiveColor}
                  boxShadow={inactiveBoxShadow}
                  _selected={{ boxShadow: activeBoxShadow, color: activeColor }}
                  p={4}
                  borderRadius="xl"
                >
                  Old Works
                </Tab>
              </Flex>
            </TabList>

            <TabPanels>
              <TabPanel p={'0'} pt="5">
                <MotionBox
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Section delay={0.1}>
                    {' '}
                    <NewWorks />
                  </Section>
                </MotionBox>
              </TabPanel>
              <TabPanel p={'0'} pt="5">
                <MotionBox
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Section delay={0.1}>
                    <OldWorks />
                  </Section>
                </MotionBox>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </Layout>
  )
}

export default MyTabs
