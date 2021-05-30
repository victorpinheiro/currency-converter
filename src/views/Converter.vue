<template>
  <div>
    <v-row class="py-5">
      <v-col cols="12" sm="4">
        <v-text-field
          outlined
          :label="$t('amount')"
          v-model="valueToConvert"
          @click="displayConvertedValue = false"
          type="number"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="4">
        <v-select
          disabled
          outlined
          :label="$t('from')"
          v-model="fromCurrency"
          :items="currencies"
        />
      </v-col>
      <v-col cols="12" sm="4">
        <v-select
          outlined
          v-model="toCurrency"
          :items="currencies"
          :label="$t('to')"
          @click="displayConvertedValue = false"
        />
      </v-col>
    </v-row>
    <v-btn large color="primary" @click="convertValue()" :disabled="!toCurrency">
      {{ $t("convert") }}
    </v-btn>
    <div v-if="displayConvertedValue">
      <p class="pt-15">
        <b class="text-h5"> {{ `${currencyFormatter(fromCurrency, valueToConvert)} = ` }} </b>
        <b class="text-h4">
          {{ currencyFormatter(toCurrency, convertedValue) }}*
        </b>
      </p>
      <p><small>*{{ $t("valuesAreRounded") }}</small></p>
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
    this.fetchExchangeRates('EUR');
  },
  data: () => ({
    toCurrency: null,
    valueToConvert: null,
    convertedValue: null,
    fromCurrency: 'EUR',
    displayConvertedValue: false,
  }),
  methods: {
    convertValue() {
      this.convertedValue = this.valueToConvert * this.rates[this.toCurrency];
      this.displayConvertedValue = true;
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
