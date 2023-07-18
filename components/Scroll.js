import { useColorModeValue, Flex, Box, Image } from '@chakra-ui/react'
import Section from './SectionS'
import SectionContent from './SectionContent'
import StickyContainer from './sticky/StickyContainer'
import { useLaxElement } from '../hooks/useLax'

export default props => {
  const calHeights = [`100vh`, `100vh`, `30vh`, `0vh`]
  return (
    <Section>
      <StickyContainer
        calHeights={`calc(${calHeights[0]} + ${calHeights[1]} + ${calHeights[2]} + ${calHeights[3]})`}
        before={<Before />}
        primary={<Primary />}
      />
    </Section>
  )
}

const Before = props => {
  const boxShadowDarkBu =
    ' -3px -3px 3px 0 rgba(255, 255, 255, 0.04), 5px 5px 5px 0 rgba(0, 0, 0, 2)'
  const boxShadowLightBu =
    '4px 4px 6px 0 rgba(0,0,0,.1), -4px -4px 6px rgba(255,255,255,1)'
  const BoxShadow = useColorModeValue(boxShadowLightBu, boxShadowDarkBu)

  const headingRef = useLaxElement()
  return (
    <SectionContent>
      <Flex
        bg={useColorModeValue('#ecf0f3', '#17191e')}
        sx={{
          height: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          flexWrap: 'wrap',
          background: 'transparent'
        }}
      >
        <Box
          sx={{ margin: '0 auto' }}
          borderRadius="lg"
          p={50}
          textAlign="center"
          ref={headingRef}
          data-lax-preset="fadeInOutA"
          boxShadow={BoxShadow}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I&apos;m your all-in-one video editing and marketing
          professional, rooted in years of diverse experience. I'm adept at
          turning your ideas into visual and sonic masterpieces, while also
          harnessing the power of social media to elevate your brand. Ready to
          exceed your expectations, from studio to screen!
        </Box>
      </Flex>
    </SectionContent>
  )
}

const Primary = props => {
  const boxShadowDarkBu =
    ' -3px -3px 3px 0 rgba(255, 255, 255, 0.04), 5px 5px 5px 0 rgba(0, 0, 0, 2)'
  const boxShadowLightBu =
    '4px 4px 6px 0 rgba(0,0,0,.1), -4px -4px 6px rgba(255,255,255,1)'
  const BoxShadow = useColorModeValue(boxShadowLightBu, boxShadowDarkBu)
  const iconRef = useLaxElement()

  return (
    <Box
      id={'bio'}
      sx={{
        width: 'inherit',
        height: 'inherit',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <Box
        ref={iconRef}
        data-lax-preset={'scaleInFadeOut'}
        className="icon"
        borderRadius="sm"
        boxShadow={BoxShadow}
        sx={{
          width: '22%',
          maxW: '200px',
          top: '50%',
          left: '50%',
          position: 'absolute',
          zIndex: 3,
          transformOrigin: '0 0',
          transform: `translate3d(-50%, -50%, 0)`
        }}
      >
        <Image src="/soren.jpg" alt="test" p={1} borderRadius="md" />{' '}
      </Box>
    </Box>
  )
}
