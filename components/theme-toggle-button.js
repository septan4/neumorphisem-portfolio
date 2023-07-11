import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()
  const boxShadowDarkBu =
    ' -3px -3px 3px 0 rgba(255, 255, 255, 0.04), 5px 5px 5px 0 rgba(0, 0, 0, 2)'
  const boxShadowLightBu =
    '   4px 4px 6px 0 rgba(0,0,0,.1), -4px -4px 6px rgba(255,255,255,1)'
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme"
          colorScheme={useColorModeValue('white', '#17191e')}
          color={useColorModeValue('#8121b5', '#ecf0f3')}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          boxShadow={useColorModeValue(boxShadowLightBu, boxShadowDarkBu)}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
