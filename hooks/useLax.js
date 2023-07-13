import lax from '../utils/lax'
import { useEffect, useRef } from 'react'

const useLax = () => {
  useEffect(() => {
    const updateLax = () => {
      lax.update(window.scrollY)
    }
    document.addEventListener('scroll', updateLax, false)
    updateLax()

    return () => {
      document.removeEventListener('scroll', updateLax)
    }
  }, [])
}

const useLaxElement = () => {
  const ref = useRef()

  useEffect(() => {
    const currentNode = ref.current

    lax.addElement(currentNode)

    return () => {
      lax.removeElement(currentNode)
    }
  }, [])

  return ref
}

const createLaxPreset = presets => {
  presets.map(preset =>
    lax.addPreset(preset.name, () => {
      return preset.options
    })
  )
}

export { useLax, useLaxElement, createLaxPreset }
