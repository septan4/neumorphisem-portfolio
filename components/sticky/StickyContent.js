import { jsx, Box } from '@chakra-ui/react'

export default props => {
  const { children } = props
  return (
    <Box
      className={'sticky-content'}
      sx={{
        height: `100vh`,
        top: 0,
        position: `sticky`,
        zIndex: 1
      }}
    >
      {children}
    </Box>
  )
}
