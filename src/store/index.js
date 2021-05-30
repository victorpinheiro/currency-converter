import Vue from 'vue';
import Vuex from 'vuex';
import API from '@/api';
import API_KEY from '@/config';

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
    fetchExchangeRates({ commit }, fromCurrency) {
      API.get(`latest?access_key=${API_KEY}&format=1&base=${fromCurrency}`).then((response) => {
        commit('SET_RATES', response.data.rates);
        commit('SET_CURRENCIES', response.data.rates);
      });
    },
  },
  getters: {
    getAllCurrencies: (state) => state.currencies,
    getRates: (state) => state.rates,
  },
});
