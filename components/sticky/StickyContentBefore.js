import { jsx, Box } from '@chakra-ui/react'

export default props => {
  const { children } = props
  return (
    <Box
      className={'sticky-content__above'}
      sx={{
        height: `calc((100vh) - (200px / 2))`,
        top: 0,
        right: 0,
        left: 0,
        position: `absolute`,
        zIndex: 2
      }}
    >
      {children}
    </Box>
  )
}
