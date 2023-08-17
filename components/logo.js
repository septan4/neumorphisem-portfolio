import { Text, useColorModeValue, Box } from '@chakra-ui/react'
import FootprintIcon from './icons/footprint'
import styled from '@emotion/styled'
import { Link as ScrollLink } from 'react-scroll'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 19px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  return (
    <ScrollLink
      activeClass="active"
      to="home"
      spy={true}
      smooth={true}
      offset={-70}
      duration={1000}
    >
      <Box display="flex" flexDirection="column" height="100%">
        <LogoBox>
          <FootprintIcon />
          <Text
            cursor="pointer"
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            Sourena Lalehzari
          </Text>
        </LogoBox>
        <Box mt="auto" />
      </Box>
    </ScrollLink>
  )
}

export default Logo
