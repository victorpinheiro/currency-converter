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
      state.currencies = Object.keys(rates);
    },
  },
  actions: {
    fetchExchangeRates({ commit }, fromCurrency) {
      API.get(`latest?access_key=${API_KEY}&format=1&base=${fromCurrency}`)
        .then((response) => {
          commit('SET_RATES', response.data.rates);
        });
    },
  },
  getters: {
    getAllCurrencies: (state) => state.currencies,
  },
  modules: {
  },
});
