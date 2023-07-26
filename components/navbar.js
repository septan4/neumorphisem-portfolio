import Logo from './logo'
import {
  Container,
  Box,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  Link,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import dynamic from 'next/dynamic'

const ScrollLink = dynamic(() => import('react-scroll').then(mod => mod.Link), {
  ssr: false
})
const LinkItem = ({ to, path, target, children, ...props }) => {
  const active = path === to
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
    <Link
      borderRadius="md"
      scroll={false}
      boxShadow={active ? activeBoxShadow : inactiveBoxShadow}
      color={active ? activeColor : inactiveColor}
      p={2}
      target={target}
      {...props}
    >
      <ScrollLink
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={2000}
      >
        {children}
      </ScrollLink>
    </Link>
  )
}

const MenuItemLink = ({ to, children, ...props }) => (
  <MenuItem {...props} bg={useColorModeValue('#ecf0f3', '#17191e')}>
    <ScrollLink
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={1000}
    >
      {children}
    </ScrollLink>
  </MenuItem>
)

const Navbar = props => {
  const { path } = props
  const boxShadowDarkBu =
    ' -3px -3px 3px 0 rgba(255, 255, 255, 0.04), 5px 5px 5px 0 rgba(0, 0, 0, 2)'
  const boxShadowLightBu =
    '4px 4px 6px 0 rgba(0,0,0,.1), -4px -4px 6px rgba(255,255,255,1)'
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ecf0f3', '#17191e')}
      boxShadow={useColorModeValue(boxShadowLightBu, boxShadowDarkBu)}
      zIndex={2}
      borderRadius="lg"
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.xxl"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem to="works" path={path}>
            Works
          </LinkItem>
          <LinkItem to="about" path={path}>
            About
          </LinkItem>
          <LinkItem borderRadius="md" href="/posts" path={path}>
            Contact
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="variant"
                aria-label="Options"
                boxShadow={useColorModeValue(boxShadowLightBu, boxShadowDarkBu)}
              />
              <MenuList bg={useColorModeValue('#ecf0f3', '#17191e')}>
                <MenuItemLink to="works">Works</MenuItemLink>
                <MenuItemLink to="about">About</MenuItemLink>
                <MenuItemLink to="contact">Contact</MenuItemLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
