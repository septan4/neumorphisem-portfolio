import { jsx, Box } from '@chakra-ui/react'

export default props => (
  <Box
    as="section"
    className="section"
    sx={{
      position: `relative`
    }}
  >
    {props.children}
  </Box>
)
