import { jsx, Box } from '@chakra-ui/react'

export default props => {
  const { children } = props
  return (
    <Box
      className={'sticky-content__below'}
      sx={{
        right: 0,
        left: 0,
        bottom: 0,
        position: `absolute`,
        zIndex: 3
      }}
    >
      {children}
    </Box>
  )
}
