import Image from 'next/image'
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  useMediaQuery
} from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ src }) => {
  const [isSmallScreen] = useMediaQuery('(max-width: 600px)')
  const [isMediumScreen] = useMediaQuery('(max-width: 850px)')

  return (
    <Box w="100%" textAlign="center" overflow="hidden">
      <iframe
        width="100%"
        height={isSmallScreen ? '185px' : isMediumScreen ? '220px' : '260px'}
        src={src}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; "
        allowfullscreen
      ></iframe>
    </Box>
  )
}

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
