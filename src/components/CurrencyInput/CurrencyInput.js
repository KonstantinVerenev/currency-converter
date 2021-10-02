import React from 'react'
import Select from 'react-select';
import './CurrencyInput.css'

const CurrencyInput = (props) => {
  const { currencyOptions, selectedCurrency, onChangeCurrency, amount, onChangeAmount } = props

  const selectedCurrencyForReactSelect = { value: selectedCurrency, label: <div className='label'><div>{selectedCurrency}</div><img src={`./img/flags/${selectedCurrency}.png`} alt='flag' /></div> }

  // const optionElements = currencyOptions.map(option => <option key={option} value={option}>{option}</option>)
  const options = currencyOptions.map(option => {
    return {
      value: option, label: <div className='label'> <div >{option}</div> <img src={`./img/flags/${option}.png`} alt='flag' /></div >
    }
  })

  return (
    <>
      <fieldset className='CurrencyInputContainer'>
        <input className='CurrencyInput' type='number' value={amount} onChange={onChangeAmount} />
        {/* <select value={selectedCurrency} onChange={onChangeCurrency}>
          {optionElements}
        </select> */}
        <Select
          className='currencySelect'
          value={selectedCurrencyForReactSelect}
          onChange={onChangeCurrency}
          options={options}
        />
      </fieldset>


    </>
  )
}

export default CurrencyInput
