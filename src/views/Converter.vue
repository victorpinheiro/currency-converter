<template>
  <div>
    <v-overlay :value="fetching"></v-overlay>
    <v-progress-circular
      indeterminate
      color="primary"
      v-if="fetching"
    ></v-progress-circular>
    <v-row class="py-5">
      <v-col cols="12" sm="4">
        <v-text-field
          outlined
          :label="$t('amount')"
          v-model="valueToConvert"
          @click="displayResult(false)"
          type="number"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="4">
        <v-select
          outlined
          :label="$t('from')"
          v-model="fromCurrency"
          :items="currencies"
          @click="displayResult(false)"
        />
      </v-col>
      <v-col cols="12" sm="4">
        <v-select
          outlined
          v-model="toCurrency"
          :items="currencies"
          :label="$t('to')"
          @click="displayResult(false)"
        />
      </v-col>
    </v-row>
    <v-btn
      large
      color="primary"
      @click="convertValue()"
      :disabled="!toCurrency || !valueToConvert || !fromCurrency"
    >
      {{ $t("convert") }}
    </v-btn>
    <div v-if="displayConvertedValue">
      <p class="pt-15">
        <b class="text-h5"> {{ `${currencyFormatter(fromCurrency, valueToConvert)} = ` }} </b>
        <b class="text-h4"> {{ currencyFormatter(toCurrency, convertedValue) }}* </b>
      </p>
      <p>
        <small>*{{ $t("valuesAreRounded") }}</small>
      </p>
    </div>

  </div>
</template>

<script>
import mixin from '@/mixins/mixin';
import { mapGetters } from 'vuex';

export default {
  name: 'Converter',
  mixins: [mixin],
  computed: {
    ...mapGetters({ currencies: 'getAllCurrencies' }),
    ...mapGetters({ rates: 'getRates' }),
  },
  mounted() {
    this.fetchExchangeRates();
  },
  data: () => ({
    toCurrency: null,
    valueToConvert: null,
    convertedValue: null,
    fromCurrency: null,
    displayConvertedValue: false,
    fetching: false,
  }),
  methods: {
    convertValue() {
      this.fetching = true;
      this.fetchExchangeRates(this.fromCurrency).then(() => {
        setTimeout(() => { // This timeout is a quick fix to get the rates always updated.
          this.convertedValue = this.valueToConvert * this.rates[this.toCurrency];
          this.displayResult(true);
          this.fetching = false;
        }, 800);
      });
    },
    displayResult(value) {
      this.displayConvertedValue = value;
    },
    currencyFormatter(currency, value) {
      return new Intl.NumberFormat(this.userLanguage, {
        style: 'currency',
        currency,
      }).format(value);
    },
  },
};
</script>

<style scoped></style>
