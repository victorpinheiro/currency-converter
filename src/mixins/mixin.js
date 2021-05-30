export default {
  methods: {
    fetchExchangeRates(fromCurrency) {
      this.$store.dispatch('fetchExchangeRates', fromCurrency);
    },
  },
  data: () => ({
    userLanguage: navigator.language,
  }),
};
