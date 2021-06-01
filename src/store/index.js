import Vue from 'vue';
import Vuex from 'vuex';
import API from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rates: {},
    currencies: [],
  },
  mutations: {
    SET_RATES(state, rates) {
      state.rates = rates;
    },
    SET_CURRENCIES(state, currencies) {
      state.currencies = Object.keys(currencies);
    },
  },
  actions: {
    fetchExchangeRates({ commit }, fromCurrency = 'EUR') {
      API.get(`latest?base=${fromCurrency}`).then((response) => {
        commit('SET_RATES', response.data.rates);
        commit('SET_CURRENCIES', response.data.rates);
      }, (error) => {
        window.alert(error);
      });
    },
  },
  getters: {
    getAllCurrencies: (state) => state.currencies,
    getRates: (state) => state.rates,
  },
});
