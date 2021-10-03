import React, { useEffect, useState } from "react";
import { currencyAPI } from "./api/api";
import CurrencyInput from "./components/CurrencyInput/CurrencyInput";
import Preloader from "./components/Preloader/Preloader";

const App = () => {
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [firstCurrency, setFirstCurrency] = useState()
  const [secondCurrency, setSecondCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState()
  const [amountFromFirstCurrency, setAmountFromFirstCurrency] = useState(true)
  const [initialized, setInitialized] = useState(false)


  let firstAmount, secondAmount
  if (amountFromFirstCurrency) {
    firstAmount = Math.floor(amount * 100) / 100
    secondAmount = Math.floor((amount * exchangeRate) * 100) / 100
  } else {
    secondAmount = Math.floor(amount * 100) / 100
    firstAmount = Math.floor((amount / exchangeRate) * 100) / 100
  }

  useEffect(() => {
    async function getApiData() {
      const response = await currencyAPI.getCurrency()
      setCurrencyOptions([...Object.keys(response.conversion_rates)])
      setFirstCurrency(Object.keys(response.conversion_rates)[0])
      setSecondCurrency(Object.keys(response.conversion_rates)[1])
      setExchangeRate(response.conversion_rates[Object.keys(response.conversion_rates)[1]])
      setInitialized(true)
    }
    getApiData()
  }, [])

  useEffect(() => {
    if (firstCurrency && secondCurrency) {
      async function getApiData() {
        const response = await currencyAPI.getExchangeRate(firstCurrency, secondCurrency)
        setExchangeRate(response.conversion_rate)
      }
      getApiData()
    }
  }, [firstCurrency, secondCurrency])

  const onChangeFirstCurrency = (e) => {
    setFirstCurrency(e.value)
  }

  const onChangeSecondCurrency = (e) => {
    setSecondCurrency(e.value)
  }

  const onChangeFirstAmount = (e) => {
    setAmount(e.target.value)
    setAmountFromFirstCurrency(true)
  }

  const onChangeSecondAmount = (e) => {
    setAmount(e.target.value)
    setAmountFromFirstCurrency(false)
  }

  if (!initialized) {
    return <Preloader />
  }

  return (
    <div className="App">
      <CurrencyInput
        currencyOptions={currencyOptions}
        selectedCurrency={firstCurrency}
        onChangeCurrency={onChangeFirstCurrency}
        amount={firstAmount}
        onChangeAmount={onChangeFirstAmount}
      />
      <CurrencyInput
        currencyOptions={currencyOptions}
        selectedCurrency={secondCurrency}
        onChangeCurrency={onChangeSecondCurrency}
        amount={secondAmount}
        onChangeAmount={onChangeSecondAmount}
      />
    </div>
  )
}

export default App;

  // useEffect(() => {
  //   currencyAPI.getCurrency()
  //     .then(response => {
  //       setCurrencyOptions([response.base, ...Object.keys(response.rates)])
  //     })
  // }, [])
