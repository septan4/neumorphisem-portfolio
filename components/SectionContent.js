import { jsx, Container } from '@chakra-ui/react'

export default props => (
  <Container
    className={'section-content'}
    sx={{
      height: `100%`,
      margin: `0 auto`
    }}
  >
    {props.children}
  </Container>
)
