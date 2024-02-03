import React from 'react'
import { formatCurrency } from '../lib/utils'

const TestFunctiion = () => {
  const formatCurrensyText:string = formatCurrency(1000)
  console.log(formatCurrensyText,"formatCurrensyText")
  return (
    <div>
      {formatCurrensyText}
    </div>

  )
}

export default TestFunctiion