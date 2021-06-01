export default {
  methods: {
    async fetchExchangeRates(fromCurrency) {
      await this.$store.dispatch('fetchExchangeRates', fromCurrency);
    },
  },
  data: () => ({
    userLanguage: navigator.language,
  }),
};
