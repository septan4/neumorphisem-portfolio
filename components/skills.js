import * as React from 'react'
import {
  Box,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  useColorModeValue,
  Flex,
  SimpleGrid
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Section from '../components/section'
import ProgressBar from './progressbar'

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
  const boxShadowDark = 'inset 2px 2px 4px #000, inset -5px -3px 4px #17191e'

  const activeBoxShadow = useColorModeValue(boxShadowLight, boxShadowDark)
  const inactiveBoxShadow = useColorModeValue(boxShadowLightBu, boxShadowDarkBu)
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  const activeColor = useColorModeValue('#8121b5', 'whiteAlpha.900')
  return (
    <Tabs
      index={tabIndex}
      onChange={handleTabsChange}
      variant="unstyled"
      isLazy
    >
      <TabList display="flex" justifyContent="center" mb={4}>
        <Flex direction="row" justifyContent="space-between" w="220px">
          <Tab
            w="100px"
            boxShadow={inactiveBoxShadow}
            color={inactiveColor}
            _selected={{ boxShadow: activeBoxShadow, color: activeColor }}
            p={4}
            borderRadius="xl"
          >
            Software
          </Tab>
          <Tab
            w="100px"
            color={inactiveColor}
            boxShadow={inactiveBoxShadow}
            _selected={{ boxShadow: activeBoxShadow, color: activeColor }}
            p={4}
            borderRadius="xl"
          >
            Skills
          </Tab>
        </Flex>
      </TabList>

      <TabPanels>
        <TabPanel>
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <Section delay={0.1}>
              {' '}
              <SimpleGrid columns={[1, 2, 2]} gap={6}>
                <ProgressBar
                  image={'./images/pr.png'}
                  name={'Adobe Premiere'}
                  progress={70}
                  darkProgress={69.9}
                />
                <ProgressBar
                  image={'./images/pr.png'}
                  name={'Adobe After Effects'}
                  progress={70}
                  darkProgress={69.9}
                />
                <ProgressBar
                  image={'./images/pr.png'}
                  name={'Adobe Photoshop'}
                  progress={70}
                  darkProgress={69.9}
                />
                <ProgressBar
                  image={'./images/pr.png'}
                  name={'Adobe Illustrator'}
                  progress={70}
                  darkProgress={69.9}
                />
                <ProgressBar
                  image={'./images/pr.png'}
                  name={'Adobe XD'}
                  progress={30}
                  darkProgress={29.9}
                />
              </SimpleGrid>
            </Section>
          </MotionBox>
        </TabPanel>
        <TabPanel>
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <Section delay={0.1}>
              <SimpleGrid columns={[1, 2, 2]} gap={6}>
                <ProgressBar
                  image={'./images/pr.png'}
                  name={'Adobe Premiere'}
                  progress={70}
                  darkProgress={69.9}
                />
                <ProgressBar
                  image={'./images/pr.png'}
                  name={'Adobe After Effects'}
                  progress={70}
                  darkProgress={69.9}
                />
                <ProgressBar
                  image={'./images/pr.png'}
                  name={'Adobe Photoshop'}
                  progress={70}
                  darkProgress={69.9}
                />
                <ProgressBar
                  image={'./images/pr.png'}
                  name={'Adobe Illustrator'}
                  progress={70}
                  darkProgress={69.9}
                />
                <ProgressBar
                  image={'./images/pr.png'}
                  name={'Adobe XD'}
                  progress={30}
                  darkProgress={29.9}
                />
              </SimpleGrid>
            </Section>
          </MotionBox>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default MyTabs
