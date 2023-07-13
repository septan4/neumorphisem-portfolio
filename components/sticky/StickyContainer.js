import { jsx, Box } from '@chakra-ui/react'
import StickyContentBefore from './StickyContentBefore'
import StickyContent from './StickyContent'
import StickyContentAfter from './StickyContentAfter'

export default props => {
  const { calHeights, children, before, primary, after } = props

  return (
    <Box
      className={'sticky-container'}
      sx={{
        position: `relative`,
        height: `auto`,
        minHeight: calHeights && calHeights
      }}
      {...props}
    >
      {before && <StickyContentBefore>{before}</StickyContentBefore>}
      <StickyContent>{children || primary}</StickyContent>
      {after && <StickyContentAfter>{after}</StickyContentAfter>}
    </Box>
  )
}
