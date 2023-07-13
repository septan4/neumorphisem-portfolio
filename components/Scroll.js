import { useColorModeValue, Text, Flex, Box, Image } from '@chakra-ui/react'
import { Fragment } from 'react'
import Section from './SectionS'
import SectionContent from './SectionContent'
import StickyContainer from './sticky/StickyContainer'
import Video from './VideoGrid.js'
import { useLaxElement } from '../hooks/useLax'

const url =
  'https://res.cloudinary.com/dannykeane/video/upload/sp_full_hd_lean/q_80:qmax_90,ac_none/v1/dk-memoji-dark.m3u8'

export default props => {
  const calHeights = [`100vh`, `100vh`, `100vh`, `45vh`]
  return (
    <Section>
      <StickyContainer
        calHeights={`calc(${calHeights[0]} + ${calHeights[1]} + ${calHeights[2]} + ${calHeights[3]})`}
        before={<Before />}
        primary={<Primary />}
        after={<After calHeights={calHeights} />}
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
  const videoMaskRef = useLaxElement()
  const videoRef = useLaxElement()
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
        borderRadius="lg"
        boxShadow={BoxShadow}
        sx={{
          width: '200px',
          height: '152px',

          top: '50%',
          left: '50%',
          position: 'absolute',
          zIndex: 3,
          transformOrigin: '0 0',
          transform: `translate3d(-50%, -50%, 0)`
        }}
      >
        <Image src="/soren.jpg" alt="test" p={1} borderRadius="lg" />{' '}
      </Box>
      <Box
        ref={videoMaskRef}
        data-lax-preset={'videoMaskFade'}
        as={'span'}
        className={'video-mask'}
        sx={{
          width: 'inherit',
          height: 'inherit',
          display: 'block',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          position: 'absolute',
          zIndex: 2
        }}
      />
      <Box
        ref={videoRef}
        data-lax-anchor="#bio"
        data-lax-preset={'videoScale'}
        className={'video-container'}
        sx={{ width: '100%', height: '100%', position: 'relative' }}
      >
        <Video
          url={url}
          sx={{
            height: '100%',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            position: 'absolute',
            zIndex: 1,
            objectFit: 'cover',
            transformOrigin: '0 0'
          }}
        />
        <Box
          className={'video-placeholder'}
          sx={{
            width: '100%',
            height: '100%',
            minHeight: '100vh',
            background: 'green',
            top: '0',
            right: '0',
            left: '0',
            position: 'absolute',
            opacity: 0
          }}
        />
      </Box>
    </Box>
  )
}

const After = props => {
  const { calHeights } = props
  return (
    <Fragment>
      <Box sx={{ height: calHeights[2] }}>
        <SectionContent>
          <Flex
            sx={{
              height: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}
          >
            <Box sx={{ maxWidth: '66.66667%', margin: '0 auto' }}>
              <Text as={'p'}>
                We put the brains of iPhone 11 Pro in the body of iPhone SE. A13
                Bionic is the fastest chip ever in a smartphone, period. So
                everything feels fluid, whether you’re launching apps, playing
                the latest games, or exploring new ways to work and play with
                augmented reality.
              </Text>
            </Box>
          </Flex>
        </SectionContent>
      </Box>
      <Box
        sx={{
          height: calHeights[3]
        }}
      >
        yooo
      </Box>
    </Fragment>
  )
}
