import React from 'react'

export default function DigitsButton({ dispatch, digits, digitsName }) {
  return (
    <button className={digitsName} onClick={() => dispatch({ type: 'addDigits', num: digits })}>{digits}</button>
  )
}
