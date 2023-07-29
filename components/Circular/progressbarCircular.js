import React from 'react'
import styles from './progressbarCircular.module.css'
import { Text, useColorModeValue } from '@chakra-ui/react'

let animationId = 0

const NeumorphicCircle = ({ text, percentage, years }) => {
  const boxShadowDarkBu =
    ' -3px -3px 3px 0 rgba(255, 255, 255, 0.04), 5px 5px 25px 0 rgba(0, 0, 0, 2)'
  const boxShadowLightBu =
    '4px 4px 6px 0 rgba(0,0,0,.1), -4px -4px 6px rgba(255,255,255,0.4)'
  const boxShadowLight = 'inset 6px 6px 6px #cbced1, inset -6px -6px 6px white'
  const boxShadowDark =
    'inset 3px 3px 5px rgba(0,0,0,.7),inset -3px -3px 5px rgba(225,225,225,.1)'

  const activeBoxShadow = useColorModeValue(boxShadowLight, boxShadowDark)
  const inactiveBoxShadow = useColorModeValue(boxShadowLightBu, boxShadowDarkBu)

  // Create a unique animation name and increment the counter
  const animationName = `bar_${animationId++}`

  // Calculate final stroke-dashoffset based on percentage
  const dashoffset = 429 * (1 - percentage / 100)

  return (
    <div
      className={styles.container}
      style={{ '--inactive-box-shadow': inactiveBoxShadow }}
    >
      <div className={styles.barBig} style={{ boxShadow: inactiveBoxShadow }}>
        <div className={styles.bar} style={{ boxShadow: activeBoxShadow }}>
          <svg className={styles.circularProgressSVG}>
            <circle
              cx="50%"
              cy="50%"
              r="50%"
              className={styles.circularProgressCircle}
              style={{
                animation: `${animationName} 1s ease forwards`,
                animationFillMode: `forwards`
              }}
            ></circle>
          </svg>
          <h2 className={styles.progressH1}>
            +{years}
            <br />
            Years
          </h2>
        </div>
      </div>
      <Text ml={1} mt="20px">
        {text}
      </Text>
      <style jsx>{`
        @keyframes ${animationName} {
          0% {
            stroke-dashoffset: 429px;
          }
          100% {
            stroke-dashoffset: ${dashoffset}px;
          }
        }
      `}</style>
    </div>
  )
}

export default NeumorphicCircle
