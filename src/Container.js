import React from 'react';
import { useReducer } from 'react';
import DigitsButton from './DigitsButton';
import DigitOperand from './DigitOperand';

export default function Container() {
  let operandSymbol = ['+', '-', '÷', '*']

  let initState = {
    prev: 0,
    cur: '0'
  }
  function reducer(state, action) {
    switch (action.type) {
        case 'addDigits':
            if (state.cur.length === 1 && state.cur[state.cur.length - 1] === '0') {
                return ({
                    ...state,
                    cur: action.num,
                })
            } else {
                return ({
                    ...state,
                    cur: state.cur + action.num,
                })
            }

        case 'plus':
            if ((operandSymbol.indexOf(state.cur[state.cur.length - 1]) >= 0 || state.cur.length === 0) || (state.cur[state.cur.length - 1] == '0' && state.cur.length === 1)) {
                return state;
            } else {
                return ({
                    ...state,
                    cur: state.cur + action.num,
                })
            }

        case 'minus':
            if ((operandSymbol.indexOf(state.cur[state.cur.length - 1]) >= 0 || state.cur.length === 0) || (state.cur[state.cur.length - 1] == '0' && state.cur.length === 1)) {
                return state;
            } else {
                return ({
                    ...state,
                    cur: state.cur + action.num,
                })
            }

        case 'divide':
            if ((operandSymbol.indexOf(state.cur[state.cur.length - 1]) >= 0 || state.cur.length === 0) || (state.cur[state.cur.length - 1] == '0' && state.cur.length === 1)) {
                return state;
            } else {
                return ({
                    ...state,
                    cur: state.cur + action.num,
                })
            }

        case 'multiply':
            if ((operandSymbol.indexOf(state.cur[state.cur.length - 1]) >= 0 || state.cur.length === 0) || (state.cur[state.cur.length - 1] == '0' && state.cur.length === 1)) {
                return state;
            } else {
                return ({
                    ...state,
                    cur: state.cur + action.num,
                })
            }

        case 'del':
            if (state.cur.length === 1) {
                return ({
                    ...state,
                    cur: '0'
                })
            } else {
                return ({
                    ...state,
                    cur: state.cur.substring(0, state.cur.length - 1)
                })
            }

        
        case 'equal':
            state.cur = state.cur.replace('÷', '/')
            return ({
                prev: eval(state.cur),
                cur: (eval(state.cur)).toString()
            })

        
        case 'clear':
            return ({
                cur: '0',
                prev: '0',

            })
        

        default:
            return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initState)
  console.log(state.cur)

  return (
    <div className='container'>
        <div className="display">
            <div className="prev">{state.prev}</div>
            <div className="cur" >{state.cur}</div>
        </div>
        <div className="buttons">
            <div className="operators">
                <DigitOperand dispatch = {dispatch} operand='+' operandName='plus'/>
                <DigitOperand dispatch = {dispatch} operand='-' operandName='minus'/>
                <DigitOperand dispatch = {dispatch} operand='÷' operandName='divide'/>
                <DigitOperand dispatch = {dispatch} operand='*' operandName='multiply'/>
                <DigitOperand dispatch = {dispatch} operand='AC' operandName='clear'/>
            </div>
            <div className="numbers">
                <DigitsButton dispatch = {dispatch} digitsName='one' digits='1'/>
                <DigitsButton dispatch = {dispatch} digitsName='two' digits='2'/>
                <DigitsButton dispatch = {dispatch} digitsName='three' digits='3'/>
                <DigitsButton dispatch = {dispatch} digitsName='four' digits='4'/>
                <DigitsButton dispatch = {dispatch} digitsName='five' digits='5'/>
                <DigitsButton dispatch = {dispatch} digitsName='six' digits='6'/>
                <DigitsButton dispatch = {dispatch} digitsName='seven' digits='7'/>
                <DigitsButton dispatch = {dispatch} digitsName='eight' digits='8'/>
                <DigitsButton dispatch = {dispatch} digitsName='nine' digits='9'/>
                <DigitsButton dispatch = {dispatch} digitsName='zero' digits='0'/>
                <DigitsButton dispatch = {dispatch} digitsName='dot' digits='.'/>
                <DigitOperand dispatch = {dispatch} operand='DEL' operandName='del'/>
                <DigitOperand dispatch = {dispatch} operand='=' operandName='equal'/>
            </div>
        </div>
    </div>
  )
}
