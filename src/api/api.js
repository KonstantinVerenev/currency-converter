import axios from "axios";

const API_KEY = "f076ae69a96cb8efc89f0556"

const instance = axios.create({
  baseURL: 'https://v6.exchangerate-api.com/v6'
})

export const currencyAPI = {
  getCurrency() {
    return instance.get(`/${API_KEY}/latest/USD`)
      .then(response => {
        return response.data
      })
  },
  getExchangeRate(firstCurrency, secondCurrency) {
    return instance.get(`/${API_KEY}/pair/${firstCurrency}/${secondCurrency}`)
      .then(response => {
        return response.data
      })
  }
}