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
import ProgressBarCircular from './Circular/progressbarCircular'

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
        <TabPanel p={'0'} pt="5">
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
                  image={'./images/pr3.png'}
                  name={'Adobe Premiere Pro'}
                  progress={99.9}
                  darkProgress={100}
                  width={50}
                  color={'#8c8cff'}
                />
                <ProgressBar
                  image={'./images/ae1.png'}
                  name={'Adobe After Effects'}
                  progress={85}
                  darkProgress={84.9}
                  width={50}
                  color={'#8c8cff'}
                />
                <ProgressBar
                  image={'./images/ps1.png'}
                  name={'Adobe Photoshop'}
                  progress={100}
                  darkProgress={99.9}
                  width={50}
                  color={'#1b9bfe'}
                />
                <ProgressBar
                  image={'./images/ai1.png'}
                  name={'Adobe Illustrator'}
                  progress={70}
                  darkProgress={69.9}
                  width={50}
                  color={'#fe8400'}
                />
                <ProgressBar
                  image={'./images/xd1.png'}
                  name={'Adobe XD'}
                  progress={30}
                  color="#fe3dfa"
                  width={50}
                  darkProgress={29.9}
                />
                <ProgressBar
                  image={'./images/lr.png'}
                  name={'Adobe Lightroom'}
                  progress={100}
                  darkProgress={99.9}
                  width={50}
                  color={'#1c9cff'}
                />
                <ProgressBar
                  image={'./images/br.png'}
                  name={'Adobe Bridge'}
                  progress={100}
                  darkProgress={99.9}
                  width={48}
                  color={'#000a1c'}
                />
                <ProgressBar
                  image={'./images/dav.png'}
                  name={'DaVinci Resolve'}
                  progress={80}
                  darkProgress={79.9}
                  color="#011b43"
                  width={50}
                />
                <ProgressBar
                  image={'./images/cub.png'}
                  name={'Steinberg Cubase'}
                  progress={90}
                  darkProgress={89.9}
                  color="#971e2c"
                  width={43}
                />
                <ProgressBar
                  image={'./images/figma.png'}
                  name={'Figma'}
                  progress={25}
                  darkProgress={24.9}
                  color="#1cd955"
                  width={50}
                />
                <ProgressBar
                  image={'./images/mio.png'}
                  width={45}
                  name={'Microsoft Office'}
                  progress={80}
                  darkProgress={79.9}
                  color="#eb3c01"
                />
              </SimpleGrid>
            </Section>
          </MotionBox>
        </TabPanel>
        <TabPanel p={'0'} pt="5">
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <Section delay={0.1}>
              <SimpleGrid columns={[2, 2, 4]} gap={6}>
                <ProgressBarCircular
                  text="Visual Effects"
                  percentage={40}
                  years={4}
                />{' '}
                <ProgressBarCircular
                  text="Colour Correction"
                  percentage={90}
                  years={6}
                />{' '}
                <ProgressBarCircular
                  text="Sound Designing
                  "
                  percentage={100}
                  years={7}
                />{' '}
                <ProgressBarCircular
                  text="Video Editing "
                  percentage={100}
                  years={7}
                />{' '}
                <ProgressBarCircular
                  text="Graphic Designing "
                  percentage={40}
                  years={4}
                />{' '}
                <ProgressBarCircular text="CRM" percentage={60} years={5} />{' '}
                <ProgressBarCircular
                  text="Marketing "
                  percentage={40}
                  years={4}
                />{' '}
                <ProgressBarCircular
                  text="Branding "
                  percentage={40}
                  years={4}
                />{' '}
                <ProgressBarCircular
                  text="Videography   "
                  percentage={60}
                  years={6}
                />{' '}
                <ProgressBarCircular
                  text="Motion Graphics"
                  percentage={90}
                  years={6}
                />{' '}
              </SimpleGrid>
            </Section>
          </MotionBox>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default MyTabs
