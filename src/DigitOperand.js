import React from 'react'

export default function DigitOperand({ dispatch, operand, operandName }) {
  return (
    <button className={operandName} onClick={() => dispatch({ type: operandName, num: operand })}>{operand}</button>
  )
}
