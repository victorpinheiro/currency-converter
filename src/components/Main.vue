<template>
  <v-row>
    <v-col cols="12" sm="2" />
    <v-col cols="12" sm="8" class="text-center">
      <v-card rounded="lg" class="pa-5 align-center" min-height="50vh">
        <p class="text-h4 py-5">
          <b>{{ $t("appTitle") }}</b>
        </p>
        <v-row>
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
        <v-btn large color="primary" @click="convertValue()" :disabled="!toCurrency">{{
          $t("convert")
        }}</v-btn>
        <p class="pt-15" v-if="displayConvertedValue">
          <b class="text-h5"> {{ `${currencyFormatter(fromCurrency, valueToConvert)} = ` }} </b>
          <b class="text-h4">
            {{ currencyFormatter(toCurrency, convertedValue) }}
          </b>
        </p>
      </v-card>
      <Countdown class="py-5" />
    </v-col>
    <v-col cols="12" sm="2" />
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';
import Countdown from '@/components/Countdown.vue';
import mixin from '@/mixins/mixin';

export default {
  name: 'Main',
  components: { Countdown },
  mixins: [mixin],
  data: () => ({
    toCurrency: '',
    valueToConvert: null,
    convertedValue: null,
    fromCurrency: 'EUR',
    displayConvertedValue: false,
  }),
  methods: {
    convertValue() {
      this.convertedValue = this.valueToConvert * this.$store.state.rates[this.toCurrency];
      this.displayConvertedValue = true;
    },
    currencyFormatter(currency, value) {
      return new Intl.NumberFormat(this.userLanguage, {
        style: 'currency',
        currency,
      }).format(value);
    },
  },
  computed: {
    ...mapGetters({ currencies: 'getAllCurrencies' }),
  },
  mounted() {
    this.fetchExchangeRates('EUR');
  },
};
</script>
